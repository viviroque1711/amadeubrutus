(()=>{const cv=document.querySelector('.roque-globo');if(!cv)return;const g=cv.getContext('2d');
 const red=matchMedia('(prefers-reduced-motion: reduce)').matches,dpr=Math.min(2,devicePixelRatio||1);
 const N=[[166.6,172.8,7.8],[175.1,235.7,5.8],[190.8,190.4,8.0],[210.9,226.4,5.7],[216.8,161.0,8.2],[219.2,115.6,8.1],[225.0,193.7,11.0],[225.0,245.0,5.8],[241.1,132.3,4.1],[249.3,276.8,11.0],[253.4,205.5,4.0],[255.1,160.9,5.8],[264.0,113.0,2.8],[266.4,132.2,4.0],[266.4,226.5,5.4],[273.5,190.4,4.0],[277.5,146.8,4.0],[294.0,125.0,2.2],[302.4,172.9,5.4],[302.4,218.6,5.4],[307.0,143.0,2.2],[310.3,247.4,7.8],[329.9,195.9,4.1],[337.9,165.3,4.1]];
 const E=[[0,1],[0,4],[0,5],[1,2],[1,3],[1,7],[1,9],[2,3],[2,4],[2,6],[3,6],[3,10],[4,5],[4,8],[4,11],[4,15],[5,8],[6,10],[6,11],[7,9],[7,10],[8,11],[9,10],[9,14],[9,21],[10,14],[10,15],[11,16],[15,16],[15,18],[15,19],[16,18],[18,19],[19,21],[19,22]];
 const pts=N.map(([x,y,r])=>{let nx=(x-252)/92,ny=(y-195)/92;const d=Math.hypot(nx,ny);if(d>.97){nx*=.97/d;ny*=.97/d}return{x:nx,y:ny,z:Math.sqrt(Math.max(0,1-nx*nx-ny*ny)),r}});
 const ring=[];for(let k=0;k<80;k++){const t=k/80*Math.PI*2;ring.push({x:Math.cos(t),y:0,z:Math.sin(t)})}
 const W=72;cv.width=W*dpr;cv.height=W*dpr;let ang=0,tx=0,ty=0,tiltX=0,tiltY=0,ativo=true,ultimo=performance.now(),t0=ultimo;
 const a=cv.closest('a');a&&a.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();tx=((e.clientY-r.top)/r.height-.5)*.5;ty=((e.clientX-r.left)/r.width-.5)*.8});a&&a.addEventListener('pointerleave',()=>{tx=0;ty=0});
 function quadro(now){const dt=Math.min(.05,(now-ultimo)/1000);ultimo=now;const intro=red?1:Math.min(1,(now-t0)/2200),ease=1-Math.pow(1-intro,3);
  if(!red)ang+=Math.PI*2/14*dt;tiltX+=(tx-tiltX)*.06;tiltY+=(ty-tiltY)*.06;
  const ay=ang+tiltY,ax=-.14+tiltX,ca=Math.cos(ay),sa=Math.sin(ay),cb=Math.cos(ax),sb=Math.sin(ax),S=W*.4*dpr,o=W*dpr/2;
  const pr=p=>{let x=p.x*ca+p.z*sa,z=-p.x*sa+p.z*ca,y=p.y*cb-z*sb;z=p.y*sb+z*cb;const k=1/(1-z*.3);return{X:o+x*S*k,Y:o+y*S*k,z,k}};
  g.clearRect(0,0,cv.width,cv.height);
  const hl=g.createRadialGradient(o,o,S*.2,o,o,S*1.3);hl.addColorStop(0,'rgba(192,138,30,.16)');hl.addColorStop(1,'rgba(192,138,30,0)');g.fillStyle=hl;g.fillRect(0,0,cv.width,cv.height);
  g.lineWidth=dpr;g.strokeStyle='rgba(192,138,30,'+(.55*ease)+')';g.beginPath();g.arc(o,o,S*1.05,Math.PI*.55,Math.PI*.55+Math.PI*2*ease);g.stroke();
  g.beginPath();ring.forEach((p,i)=>{const q=pr(p);i?g.lineTo(q.X,q.Y):g.moveTo(q.X,q.Y)});g.closePath();g.strokeStyle='rgba(143,163,191,'+(.2*ease)+')';g.stroke();
  const P=pts.map(pr);
  E.forEach(([i,j],n)=>{const A=P[i],B=P[j],dp=((A.z+B.z)/2+1)/2,l=Math.min(1,Math.max(0,ease*E.length*1.15-n*.5));if(l<=0)return;g.strokeStyle='rgba(192,138,30,'+((.2+.65*dp)*l)+')';g.lineWidth=(.5+.8*dp)*dpr;g.beginPath();g.moveTo(A.X,A.Y);g.lineTo(A.X+(B.X-A.X)*l,A.Y+(B.Y-A.Y)*l);g.stroke()});
  pts.map((p,i)=>({p,q:P[i]})).sort((u,v)=>u.q.z-v.q.z).forEach(({p,q})=>{const f=(q.z+1)/2,rr=Math.max(.9*dpr,p.r/92*S*.6*q.k)*(.55+.45*ease);g.fillStyle='rgba('+Math.round(150+80*f)+','+Math.round(100+70*f)+','+Math.round(10+40*f)+','+((.35+.65*f)*ease)+')';g.beginPath();g.arc(q.X,q.Y,rr,0,Math.PI*2);g.fill()});
  if(ativo&&!red)requestAnimationFrame(quadro)}
 if('IntersectionObserver'in window){new IntersectionObserver(es=>{const v=es[0].isIntersecting;if(v&&!ativo){ativo=true;ultimo=performance.now();requestAnimationFrame(quadro)}else if(!v)ativo=false}).observe(cv)}
 requestAnimationFrame(quadro);
})();
