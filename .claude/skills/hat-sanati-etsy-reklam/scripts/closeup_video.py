#!/usr/bin/env python3
"""Ürün fotoğrafından yakın çekim (Ken Burns) videosu üretir.
Fotoğrafın kendi pikselleri yalnızca kırpılıp EŞİT oranda ölçeklenir; hiçbir şey yeniden
çizilmez -> Arapça harfler bozulmaz.

Kullanım:
  python3 closeup_video.py GIRDI.jpg CIKTI.mp4 [--size 1080x1080] [--dur 15]
        [--focus "x,y,boyut" ...]   # odak noktaları, piksel cinsinden (orijinal görselde)
--focus verilmezse: tam görünüm -> sol / orta / sağ üçte bire yakın çekim -> tam görünüm.
"""
import argparse, subprocess, numpy as np
from PIL import Image, ImageFilter
ap=argparse.ArgumentParser(); ap.add_argument('src'); ap.add_argument('out')
ap.add_argument('--size',default='1080x1080'); ap.add_argument('--dur',type=float,default=15)
ap.add_argument('--fps',type=int,default=30); ap.add_argument('--focus',nargs='*')
a=ap.parse_args()
img=Image.open(a.src).convert('RGB'); W,H=img.size
OW,OH=map(int,a.size.lower().split('x')); R=OW/OH
full=(W/2,H/2,min(W,H*R))          # crop WIDTH, height = width/R
if a.focus:
    pts=[tuple(map(float,f.split(','))) for f in a.focus]
else:
    s=full[2]*0.6; pts=[(W*0.22,H*0.52,s),(W*0.5,H*0.52,s),(W*0.8,H*0.52,s*0.9)]
# timeline: intro hold, each focus: travel + slow push, outro pull-back
D=a.dur; intro=D*0.12; outro=D*0.18; seg=(D-intro-outro)/len(pts)
K=[(0,*full),(intro,full[0],full[1],full[2]*0.92)]
t=intro
for (x,y,s) in pts:
    K.append((t+seg*0.55,x,y,s)); K.append((t+seg,x,y+5,s*0.9)); t+=seg
K.append((D-0.3,*full))
def at(t):
    for (t0,*p),(t1,*q) in zip(K,K[1:]):
        if t<=t1:
            u=(t-t0)/max(t1-t0,1e-6); e=0.5-0.5*np.cos(np.pi*u)
            return p[0]+(q[0]-p[0])*e, p[1]+(q[1]-p[1])*e, p[2]*(q[2]/p[2])**e
    return K[-1][1:]
p=subprocess.Popen(['ffmpeg','-y','-f','rawvideo','-pix_fmt','rgb24','-s',f'{OW}x{OH}','-r',str(a.fps),'-i','-',
 '-vf',f'fade=in:0:15,fade=out:st={D-0.6}:d=0.6','-c:v','libx264','-preset','slow','-crf','15',
 '-pix_fmt','yuv420p','-movflags','+faststart',a.out],stdin=subprocess.PIPE,stderr=subprocess.DEVNULL)
for i in range(int(a.fps*D)):
    cx,cy,w=at(i/a.fps); w=min(w,W,H*R); h=w/R
    cx=min(max(cx,w/2),W-w/2); cy=min(max(cy,h/2),H-h/2)
    f=img.resize((OW,OH),Image.LANCZOS,box=(cx-w/2,cy-h/2,cx+w/2,cy+h/2))
    if w<OW: f=f.filter(ImageFilter.UnsharpMask(radius=1.2,percent=40,threshold=2))
    p.stdin.write(f.tobytes())
p.stdin.close(); p.wait(); print('ok' if p.returncode==0 else 'ffmpeg hata', a.out)
