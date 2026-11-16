#!/usr/bin/env python3
"""Sade oda sahnesi: python3 room_scene.py GIRDI.jpg SAHNE.png  -> tablonun konumunu (x,y,w,h) yazdırır.
Tablo fotoğrafı yalnızca eşit oranda ölçeklenir, hiçbir şey üstüne binmez."""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import sys
SRC,OUT=sys.argv[1],sys.argv[2]
W,H=3456,1944
art=Image.open(SRC).convert('RGB')
_top=1720-270-40-22   # konsolun üst yüzü
s=min(W*0.50/art.width,(_top-40-110)/art.height)
aw,ah=int(art.width*s),int(art.height*s)
art=art.resize((aw,ah),Image.LANCZOS)
ax=(W-aw)//2; ay=110
yy,xx=np.mgrid[0:H,0:W].astype(np.float32)
# base wall: warm grey with soft light from top-left
base=np.array([112,113,114],np.float32)
light=1.0+0.10*np.exp(-(((xx-W*0.3)/(W*0.6))**2+((yy-H*0.1)/(H*0.7))**2))-0.12*(yy/H)
wall=base[None,None,:]*light[...,None]
# blurred edge extension of the artwork
P=500
a=np.array(art).astype(np.float32)
ext=np.pad(a,((P,P),(P,P),(0,0)),mode='edge')
ext=np.array(Image.fromarray(ext.astype(np.uint8)).filter(ImageFilter.GaussianBlur(120))).astype(np.float32)
# distance from art rectangle
dx=np.maximum(np.maximum(ax-xx,xx-(ax+aw)),0); dy=np.maximum(np.maximum(ay-yy,yy-(ay+ah)),0)
d=np.sqrt(dx**2+dy**2)
w=np.clip(1-d/P,0,1)**2
canvas=wall.copy()
y0,x0=ay-P,ax-P
ys=slice(max(y0,0),min(y0+ext.shape[0],H)); xs=slice(max(x0,0),min(x0+ext.shape[1],W))
e=ext[ys.start-y0:ys.stop-y0, xs.start-x0:xs.stop-x0]
canvas[ys,xs]=canvas[ys,xs]*(1-w[ys,xs,None])+e*w[ys,xs,None]
# paste art with feathered edge (inner 60px)
F=60
iy,ix=np.mgrid[0:ah,0:aw].astype(np.float32)
m=np.clip(np.minimum.reduce([ix,iy,aw-1-ix,ah-1-iy])/F,0,1)
m=m*m*(3-2*m)
reg=canvas[ay:ay+ah,ax:ax+aw]
canvas[ay:ay+ah,ax:ax+aw]=reg*(1-m[...,None])+a*m[...,None]
# floor
fy=1720
img=Image.fromarray(np.clip(canvas,0,255).astype(np.uint8))
fl=np.zeros((H-fy,W,3),np.float32)
fyy,fxx=np.mgrid[0:H-fy,0:W].astype(np.float32)
oak=np.array([176,142,104],np.float32)
g=0.82+0.18*(fyy/(H-fy))
rng=np.random.default_rng(3)
plank=np.zeros_like(fxx)
pw=260
for k in range(-2,W//pw+3):
    plank+=np.where((fxx>=k*pw+((fyy//1)*0))&(fxx<(k+1)*pw),rng.uniform(-10,10),0)
grain=np.array(Image.fromarray((rng.normal(128,40,(H-fy,W//6))).clip(0,255).astype(np.uint8)).resize((W,H-fy),Image.BILINEAR)).astype(np.float32)-128
fl=oak[None,None,:]*g[...,None]+plank[...,None]+grain[...,None]*0.12
vy=-1400.0
xp=(fxx-W/2)*(fy-vy)/((fyy+fy)-vy)
plank=np.zeros_like(fxx)
idx=np.floor(xp/pw).astype(int)
tone=rng.uniform(-12,12,400); plank=tone[(idx+200)%400]
fl=oak[None,None,:]*g[...,None]+plank[...,None]+grain[...,None]*0.12
seams=(np.mod(xp,pw)<2.5)
fl[seams]*=0.8
img.paste(Image.fromarray(fl.clip(0,255).astype(np.uint8)),(0,fy))
d=ImageDraw.Draw(img)
d.rectangle([0,fy-46,W,fy],fill=(236,234,229))   # baseboard
d.rectangle([0,fy-46,W,fy-42],fill=(250,249,246))
# shadow under baseboard on wall & floor
sh=Image.new('L',(W,H),0); sd=ImageDraw.Draw(sh)
sd.rectangle([0,fy,W,fy+18],fill=90)
# sideboard
cx=W//2; bw,bh=1900,270; bx0=cx-bw//2; by0=fy-bh-40
sd.rounded_rectangle([bx0+30,by0+40,bx0+bw+60,fy+40],30,fill=150)
sh=sh.filter(ImageFilter.GaussianBlur(40))
img=Image.composite(Image.new('RGB',(W,H),(30,28,26)),img,sh.point(lambda v:v*0.55))
d=ImageDraw.Draw(img)
# legs
for lx in (bx0+80,bx0+bw-110):
    d.polygon([(lx,by0+bh),(lx+30,by0+bh),(lx+24,fy+6),(lx+8,fy+6)],fill=(40,30,22))
body=np.zeros((bh,bw,3),np.float32)
byy,bxx=np.mgrid[0:bh,0:bw].astype(np.float32)
walnut=np.array([118,82,54],np.float32)
gr=np.array(Image.fromarray(rng.normal(128,45,(bh//3,bw//2)).clip(0,255).astype(np.uint8)).resize((bw,bh),Image.BICUBIC).filter(ImageFilter.GaussianBlur(1))).astype(np.float32)-128
body=walnut*(1.08-0.25*byy[...,None]/bh)+gr[...,None]*0.18
img.paste(Image.fromarray(body.clip(0,255).astype(np.uint8)),(bx0,by0))
d=ImageDraw.Draw(img)
d.rectangle([bx0-10,by0-22,bx0+bw+10,by0],fill=(132,94,64)); d.rectangle([bx0-10,by0-22,bx0+bw+10,by0-18],fill=(160,120,86))
for i in range(1,4):
    x=bx0+i*bw//4; d.line([(x,by0+14),(x,by0+bh-14)],fill=(78,52,34),width=4)
for i in range(4):
    x=bx0+i*bw//4+bw//8; d.rounded_rectangle([x-60,by0+60,x+60,by0+72],6,fill=(196,168,108))
top=by0-22
# tall floor vase with dried pampas (left)
vx=380; vt=fy-520
for k in range(30):
    ang=np.deg2rad(rng.uniform(-35,35)); L=rng.uniform(300,520)
    x1=vx+np.sin(ang)*L; y1=vt-np.cos(ang)*L
    d.line([(vx,vt),(x1,y1)],fill=(150,128,96),width=4)
    for j in range(12):
        t=0.6+j*0.035; px_=vx+(x1-vx)*t; py_=vt+(y1-vt)*t
        d.ellipse([px_-16,py_-8,px_+16,py_+8],fill=(224,208,180))
d.ellipse([vx-150,fy-470,vx+150,fy+4],fill=(214,208,198))
d.ellipse([vx-110,fy-420,vx-40,fy-250],fill=(232,228,220))
d.rectangle([vx-50,vt-10,vx+50,fy-400],fill=(214,208,198))
# books + small bowl (right)
bxr=bx0+bw-420
for i,(c,hh) in enumerate([((70,78,72),38),((200,190,172),32),((150,120,90),34)]):
    yb=top-sum(h for _,h in [((0,),38),((0,),32),((0,),34)][:i])-hh
    d.rectangle([bxr-150+i*12,yb,bxr+150-i*10,yb+hh-2],fill=c)
d.chord([bxr-90,top-104-120,bxr+90,top-104+60],0,180,fill=(205,190,160))
# plant in corner (right)
px,py=W-330,fy
for k in range(40):
    ang=np.deg2rad(rng.uniform(-60,60)); L=rng.uniform(350,800)
    x1=px+np.sin(ang)*L*0.8; y1=py-260-np.cos(ang)*L
    d.line([(px,py-260),(x1,y1)],fill=(58,82,52),width=5)
    for j in range(5):
        t=0.45+j*0.12; qx=px+(x1-px)*t; qy=py-260+(y1-py+260)*t; r=rng.uniform(26,46)
        col=tuple(int(c) for c in rng.integers([38,78,42],[70,120,70]))
        d.ellipse([qx-r,qy-r*0.55,qx+r,qy+r*0.55],fill=col)
d.polygon([(px-170,py-300),(px+170,py-300),(px+130,py+4),(px-130,py+4)],fill=(218,212,202))
d.rectangle([px-180,py-320,px+180,py-296],fill=(230,225,216))
# global vignette + grain
o=np.array(img).astype(np.float32)
v=1-0.28*(((xx-W/2)/(W*0.7))**2+((yy-H*0.45)/(H*0.8))**2)
o*=v[...,None]
o+=rng.normal(0,2.2,o.shape)
# re-paste art crisply over everything it overlaps (art is top-most only where above furniture)
out=Image.fromarray(o.clip(0,255).astype(np.uint8))
out.save(OUT); print(f'{ax},{ay},{aw},{ah}')
