#!/usr/bin/env python3
"""Uzaktan yakına oda videosu: python3 room_video.py SAHNE.png CIKTI.mp4 x,y,w,h  (room_scene.py çıktısı)"""
import subprocess, numpy as np
from PIL import Image
import sys
img=Image.open(sys.argv[1]); W,H=img.size
ax,ay,aw,ah=map(int,sys.argv[3].split(','))
OW,OH,FPS,DUR,HOLD=1920,1080,30,12,2.0
p=subprocess.Popen(['ffmpeg','-y','-f','rawvideo','-pix_fmt','rgb24','-s',f'{OW}x{OH}','-r',str(FPS),'-i','-',
 '-vf',f'fade=in:0:20,fade=out:st={DUR-0.7}:d=0.7','-c:v','libx264','-preset','slow','-crf','16','-pix_fmt','yuv420p','-movflags','+faststart',sys.argv[2]],stdin=subprocess.PIPE,stderr=subprocess.DEVNULL)
c0=np.array([W/2,H/2]); w0=W
c1=np.array([ax+aw/2,ay+ah/2]); w1=min(max(aw*1.08,ah*1.08*16/9),W)
N=FPS*DUR
for i in range(N):
    t=min(i/(FPS*(DUR-HOLD)),1.0); e=t*t*(3-2*t); e=e*e*(3-2*e)*0+ (0.5-0.5*np.cos(np.pi*t))
    w=w0*(w1/w0)**e; c=c0+(c1-c0)*e; h=w*9/16
    box=(c[0]-w/2,c[1]-h/2,c[0]+w/2,c[1]+h/2)
    p.stdin.write(img.resize((OW,OH),Image.LANCZOS,box=box).tobytes())
p.stdin.close(); p.wait(); print(p.returncode)
