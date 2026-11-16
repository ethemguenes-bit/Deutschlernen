import math, subprocess, sys, wave
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

SP = sys.argv[1]
SRC = sys.argv[2]
OUT = sys.argv[3]
W, H, FPS = 1080, 1920, 30
RED = (214, 34, 52)
WHITE = (255, 255, 255)
FONT = f"{SP}/fonts/Montserrat.ttf"

_fc = {}
def font(size, wght=800):
    k = (size, wght)
    if k not in _fc:
        f = ImageFont.truetype(FONT, size)
        try:
            f.set_variation_by_axes([wght])
        except Exception:
            pass
        _fc[k] = f
    return _fc[k]

src = Image.open(SRC).convert("RGB")
# crops from the 1600x1600 poster
portrait = src.crop((690, 0, 1530, 840))     # the man by the lake
document = src.crop((0, 0, 720, 760))          # medical report
def cover(img, w, h):
    r = max(w / img.width, h / img.height)
    img = img.resize((int(img.width * r) + 1, int(img.height * r) + 1), Image.LANCZOS)
    x, y = (img.width - w) // 2, (img.height - h) // 2
    return img.crop((x, y, x + w, y + h))
BIG = 1.25
_pb = cover(portrait, int(W * BIG), int(H * BIG)).filter(ImageFilter.GaussianBlur(40))
_pb = ImageEnhance.Brightness(_pb).enhance(0.5)
_pf = portrait.resize((int(W * BIG), int(portrait.height * W * BIG / portrait.width)), Image.LANCZOS)
_m = Image.new("L", _pf.size, 255)
_md = ImageDraw.Draw(_m)
for i in range(220):
    _md.line((0, _pf.height - 1 - i, _pf.width, _pf.height - 1 - i), fill=int(255 * i / 220))
_pb.paste(_pf, (0, int(H * BIG * 0.15)), _m)
portrait_bg = _pb
document_bg = cover(document, int(W * BIG), int(H * BIG))
document_bg = ImageEnhance.Color(document_bg).enhance(0.3)

def ease(t):
    t = max(0.0, min(1.0, t))
    return 1 - (1 - t) ** 3

def kenburns(bg, p, z0=1.0, z1=1.12, dark=0.45, blur=0):
    z = z0 + (z1 - z0) * p
    cw, ch = int(bg.width / (z * BIG) * 1), int(bg.height / (z * BIG))
    cx, cy = bg.width // 2, bg.height // 2
    fr = bg.crop((cx - cw // 2, cy - ch // 2, cx - cw // 2 + cw, cy - ch // 2 + ch)).resize((W, H), Image.BILINEAR)
    if blur:
        fr = fr.filter(ImageFilter.GaussianBlur(blur))
    fr = ImageEnhance.Brightness(fr).enhance(1 - dark)
    return fr

def gradient(fr, start=0.45, strength=235):
    g = Image.new("L", (1, H))
    for y in range(H):
        v = 0 if y < H * start else int(strength * ((y - H * start) / (H * (1 - start))) ** 0.8)
        g.putpixel((0, y), v)
    black = Image.new("RGB", (W, H), (0, 0, 0))
    return Image.composite(black, fr, g.resize((W, H)))

def wrap(text, f, maxw):
    words, lines, cur = text.split(), [], ""
    d = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    for w in words:
        t = (cur + " " + w).strip()
        if d.textlength(t, font=f) <= maxw:
            cur = t
        else:
            lines.append(cur); cur = w
    lines.append(cur)
    return lines

def draw_lines(fr, lines, size, y, t_in, color=WHITE, wght=800, center=True, stagger=0.12, highlight=None, maxw=940, lh=1.18):
    """lines: list of strings (each may be auto-wrapped). Animated fade+slide per line."""
    f = font(size, wght)
    out = []
    for l in lines:
        out += wrap(l, f, maxw)
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    for i, l in enumerate(out):
        a = ease((t_in - i * stagger) / 0.35)
        if a <= 0:
            continue
        dy = int((1 - a) * 40)
        tw = d.textlength(l, font=f)
        x = (W - tw) / 2 if center else 70
        yy = y + i * size * lh + dy
        col = color
        if highlight and any(h in l for h in highlight):
            col = RED
        # shadow
        d.text((x + 3, yy + 4), l, font=f, fill=(0, 0, 0, int(160 * a)))
        d.text((x, yy), l, font=f, fill=col + (int(255 * a),))
    fr.paste(layer, (0, 0), layer)
    return y + len(out) * size * lh

def pill(fr, text, y, t_in, size=46):
    a = ease(t_in / 0.3)
    if a <= 0:
        return
    f = font(size, 800)
    d = ImageDraw.Draw(fr, "RGBA")
    tw = d.textlength(text, font=f)
    x = (W - tw) / 2
    d.rounded_rectangle((x - 30, y - 18, x + tw + 30, y + size + 22), radius=14, fill=RED + (int(255 * a),))
    d.text((x, y), text, font=f, fill=(255, 255, 255, int(255 * a)))

# ---------------------------------------------------------------- scenes
scenes = []
def scene(dur):
    def deco(fn):
        scenes.append((dur, fn)); return fn
    return deco

def punch_word(t, word, sub=None, color=WHITE):
    fr = Image.new("RGB", (W, H), (8, 8, 10))
    # punch-in: starts big, settles
    s = 1 + 0.35 * (1 - ease(t / 0.18))
    size = int(150 * s)
    f = font(size, 900)
    d = ImageDraw.Draw(fr)
    lines = word.split("\n")
    total = len(lines) * size * 1.1
    y = H / 2 - total / 2 - 60
    for l in lines:
        tw = d.textlength(l, font=f)
        d.text(((W - tw) / 2, y), l, font=f, fill=color)
        y += size * 1.1
    if sub:
        a = ease((t - 0.15) / 0.25)
        f2 = font(52, 600)
        tw = d.textlength(sub, font=f2)
        d.text(((W - tw) / 2, y + 30), sub, font=f2, fill=tuple(int(c * a) for c in (200, 200, 200)))
    # flash on cut
    if t < 0.06:
        fr = Image.blend(fr, Image.new("RGB", (W, H), (255, 255, 255)), 0.35)
    return fr

# HOOK ---------------------------------------------------------
@scene(1.3)
def s_hook1(t, p): return punch_word(t, "4. EVRE\nKANSER")
@scene(1.2)
def s_hook2(t, p): return punch_word(t, "TEK\nBÖBREK")
@scene(1.2)
def s_hook3(t, p): return punch_word(t, "%86\nENGELLİ")
@scene(2.3)
def s_hook4(t, p):
    fr = Image.new("RGB", (W, H), (8, 8, 10))
    draw_lines(fr, ["...ve şu an"], 78, 760, t, wght=600)
    if t > 0.5:
        tt = t - 0.5
        s = 1 + 0.4 * (1 - ease(tt / 0.2))
        f = font(int(140 * s), 900)
        d = ImageDraw.Draw(fr)
        txt = "CEZAEVİNDE."
        tw = d.textlength(txt, font=f)
        d.text(((W - tw) / 2, 880), txt, font=f, fill=RED)
        if tt < 0.06:
            fr = Image.blend(fr, Image.new("RGB", (W, H), (255, 255, 255)), 0.3)
    return fr

# STORY --------------------------------------------------------
@scene(3.6)
def s_who(t, p):
    fr = gradient(kenburns(portrait_bg, p, 1.0, 1.10, dark=0.15), 0.5)
    pill(fr, "BU, MEHMET DAYLAK", 1330, t - 0.3)
    draw_lines(fr, ["4. evre kanser hastası.", "%86 engelli, tek böbrekli."], 62, 1460, t - 0.7)
    return fr

@scene(4.2)
def s_13(t, p):
    fr = kenburns(document_bg, p, 1.05, 1.18, dark=0.75, blur=3)
    n = max(1, min(13, int(1 + 12 * ease(t / 1.4))))
    d = ImageDraw.Draw(fr)
    f = font(330, 900)
    txt = str(n)
    tw = d.textlength(txt, font=f)
    d.text(((W - tw) / 2, 470), txt, font=f, fill=RED)
    draw_lines(fr, ["GÜN"], 110, 830, t - 0.2, wght=900)
    draw_lines(fr, ["Tahliyesinden yalnızca 13 gün sonra", "yeniden tutuklandı."], 60, 1090, t - 1.4, highlight=["tutuklandı"])
    return fr

@scene(4.4)
def s_pet(t, p):
    fr = kenburns(document_bg, p, 1.18, 1.30, dark=0.75, blur=4)
    y = draw_lines(fr, ["Kanserin nüksedip nüksetmediğini", "gösterecek"], 62, 600, t - 0.1, maxw=1000)
    y = draw_lines(fr, ["PET TETKİKİ"], 120, y + 30, t - 0.7, color=RED, wght=900)
    y = draw_lines(fr, ["bile yapılamadı."], 66, y + 20, t - 1.1)
    draw_lines(fr, ["Tedavisi yarım kaldı."], 54, y + 90, t - 2.2, wght=600, color=(220, 220, 220))
    return fr

@scene(3.8)
def s_question(t, p):
    fr = kenburns(portrait_bg, p, 1.12, 1.22, dark=0.55, blur=4)
    draw_lines(fr, ["Ağır hasta bir insanı", "cezaevinde tutmak"], 70, 660, t - 0.1)
    draw_lines(fr, ["HANGİ VİCDANA", "SIĞAR?"], 112, 880, t - 0.9, wght=900, color=RED)
    return fr

@scene(4.5)
def s_cta(t, p):
    fr = Image.new("RGB", (W, H), (8, 8, 10))
    # small portrait circle
    a = ease(t / 0.4)
    ph = cover(portrait.crop((120, 0, 720, 600)), 380, 380)
    m = Image.new("L", (380, 380), 0); ImageDraw.Draw(m).ellipse((0, 0, 379, 379), fill=int(255 * a))
    fr.paste(ph, ((W - 380) // 2, 420), m)
    d = ImageDraw.Draw(fr)
    d.ellipse(((W - 380) // 2 - 8, 412, (W + 380) // 2 + 8, 808), outline=RED + (0,), width=8) if a > 0.5 else None
    draw_lines(fr, ["#MehmetDaylak", "HapisteKalamaz"], 92, 900, t - 0.4, color=RED, wght=900)
    draw_lines(fr, ["Sessiz kalma."], 64, 1180, t - 1.1)
    draw_lines(fr, ["PAYLAŞ  •  ETİKETLE  •  SESİNİ YÜKSELT"], 40, 1290, t - 1.5, wght=700, color=(210, 210, 210))
    return fr

# ---------------------------------------------------------------- render
total = sum(d for d, _ in scenes)
nframes = int(total * FPS)
# audio: low drone + heartbeat + hit on each hook cut
SR = 44100
N = int(total * SR) + SR
tt = np.arange(N) / SR
audio = 0.05 * np.sin(2 * np.pi * 55 * tt) * (0.6 + 0.4 * np.sin(2 * np.pi * 0.2 * tt))
audio += 0.03 * np.sin(2 * np.pi * 82.4 * tt)
def thump(at, amp=0.7, f0=60):
    i = int(at * SR); n = int(0.25 * SR)
    if i + n > N: return
    x = np.arange(n) / SR
    audio[i:i + n] += amp * np.sin(2 * np.pi * f0 * x * (1 - 0.5 * x)) * np.exp(-x * 18)
# heartbeat through the whole video
b = 0.0
while b < total:
    thump(b, 0.45); thump(b + 0.28, 0.3)
    b += 1.0
# impact hits on scene cuts
c = 0.0
for d, _ in scenes:
    thump(c, 0.9, 45)
    c += d
fade = np.ones(N); fl = int(1.0 * SR); end = int(total * SR)
fade[end - fl:end] = np.linspace(1, 0, fl); fade[end:] = 0
audio = np.clip(audio * fade, -1, 1)
with wave.open(f"{SP}/audio.wav", "wb") as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((audio * 32767).astype(np.int16).tobytes())

proc = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
                         "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-", "-i", f"{SP}/audio.wav",
                         "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p",
                         "-c:a", "aac", "-b:a", "160k", "-shortest", "-movflags", "+faststart", OUT],
                        stdin=subprocess.PIPE)

start = 0.0
fi = 0
progress_total = total
for dur, fn in scenes:
    n = int(round(dur * FPS))
    for k in range(n):
        t = k / FPS
        fr = fn(t, k / max(1, n - 1))
        # progress bar
        d = ImageDraw.Draw(fr)
        d.rectangle((0, H - 10, int(W * (fi / nframes)), H), fill=RED)
        proc.stdin.write(fr.tobytes())
        fi += 1
proc.stdin.close(); proc.wait()
print("frames", fi, "duration", total)
