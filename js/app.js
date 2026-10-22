document.documentElement.classList.add('js');
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* REVIEWS: textos de ejemplo. Reemplázalos por las reseñas reales de tus clientes antes de publicar. */
const REV=[["Ahora mis clientes ven los platos con foto y es mucho más fácil elegir. Cambiar un precio toma un minuto.","Compay Food Truck"],["El menú se ve tan profesional como nuestra marca. Los clientes lo escanean y encuentran todo rápido.","401 Zona Gourmet"],["Jason entregó en el tiempo prometido y el menú quedó justo como lo imaginábamos.","What’s That Food"]];
/* reveal */
const rv=$$('h2,.lead,.pj,.why li,.fx li,.inc li,.plan,.pic,.ct p,.ct .cta,.q'),io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
rv.forEach((el,i)=>{el.classList.add('rv');el.style.setProperty('--dl',(i%3)*.08+'s');io.observe(el)});
/* demo: el pedido se hace solo */
const T=$$('#demo .tp'),C=$('#cart'),L=['1 plato · RD$ 300','2 platos · RD$ 700','3 platos · RD$ 800'];let tm=[],vis=true;
const fin=()=>{T.forEach(t=>t.classList.add('on'));C.textContent='✓ Pedido enviado por WhatsApp';C.className='cart on ok'};
function play(){tm.forEach(clearTimeout);tm=[];T.forEach(t=>t.classList.remove('on'));C.className='cart';const at=(m,f)=>tm.push(setTimeout(f,m));
T.forEach((t,i)=>at(1300+i*1300,()=>{t.classList.remove('on');void t.offsetWidth;t.classList.add('on');C.textContent=L[i];C.classList.add('on')}));
at(5600,()=>{C.textContent='✓ Pedido enviado por WhatsApp';C.classList.add('ok')});at(9000,play)}
if(RM)fin();else new IntersectionObserver(e=>{e[0].isIntersecting?(!vis||!tm.length)&&play():(tm.forEach(clearTimeout),tm=[]);vis=true}).observe($('#demo'));
/* parallax del celular en portafolio */
const sh=$$('.shot');let tk=0;const par=()=>{tk=0;sh.forEach(s=>{const r=s.getBoundingClientRect();s.style.setProperty('--p',Math.max(-1,Math.min(1,(innerHeight/2-(r.top+r.height/2))/innerHeight*-2)).toFixed(2))})};
if(!RM){addEventListener('scroll',()=>{tk||(tk=requestAnimationFrame(par))},{passive:true});par()}
/* antes y después */
const cm=$('#cmp'),rg=cm.querySelector('input'),sx=v=>cm.style.setProperty('--x',v+'%');rg.oninput=()=>sx(rg.value);let shown=0;
new IntersectionObserver(e=>{if(e[0].isIntersecting&&!shown&&!RM){shown=1;const t0=performance.now();(function f(n){const k=Math.min((n-t0)/2200,1),v=50+Math.sin(k*Math.PI*2)*32*(1-k*.3);sx(v);rg.value=v;if(k<1)requestAnimationFrame(f);else{sx(50);rg.value=50}})(t0)}},{threshold:.6}).observe(cm);
/* reseñas */
const rb=$$('.rt button'),rq=$('#rq'),rn=$('#rn');
function show(i){rb.forEach((b,j)=>b.setAttribute('aria-pressed',j==i));rq.classList.add('o');rn.classList.add('o');setTimeout(()=>{rq.textContent='“'+REV[i][0]+'”';rn.textContent=REV[i][1];rq.classList.remove('o');rn.classList.remove('o')},RM?0:220)}
rb.forEach((b,i)=>b.onclick=()=>show(i));rq.textContent='“'+REV[0][0]+'”';rn.textContent=REV[0][1];
/* línea de tiempo con progreso */
const tl=$('#tl'),st=$$('#tl li');function pg(){const r=tl.getBoundingClientRect(),y=innerHeight*.6;tl.style.setProperty('--h',Math.max(0,Math.min(r.height,y-r.top))+'px');st.forEach(l=>l.classList.toggle('on',l.getBoundingClientRect().top<y))}
addEventListener('scroll',pg,{passive:true});pg();
/* FAQ */
$$('.q button').forEach(b=>b.onclick=()=>{const q=b.parentElement,o=!q.classList.contains('open');$$('.q').forEach(x=>{x.classList.remove('open');x.firstElementChild.setAttribute('aria-expanded',false)});if(o){q.classList.add('open');b.setAttribute('aria-expanded',true)}});
/* botón flotante */
new IntersectionObserver(e=>$('#fab').classList.toggle('h',e[0].isIntersecting)).observe($('#contacto'));

/* ===== MOTION LAYER ===== */
const FINE=matchMedia('(hover:hover) and (pointer:fine)').matches,root=document.documentElement;
/* QR del hero */
(()=>{let o='',s=11;const r=()=>(s=s*16807%2147483647)/2147483647;for(let y=0;y<25;y++)for(let x=0;x<25;x++){let d,hit=0;for(const[a,b]of[[0,0],[18,0],[0,18]]){const u=x-a,v=y-b;if(u>=-1&&u<=7&&v>=-1&&v<=7){hit=1;d=u>=0&&u<=6&&v>=0&&v<=6&&(u%6==0||v%6==0||(u>1&&u<5&&v>1&&v<5))}}if(!hit)d=r()>.52;if(d)o+=`M${x} ${y}h1v1h-1z`}$('#qr').innerHTML='<path d="'+o+'"/>'})();
/* titular por letras y títulos por palabras */
$$('h1 span').forEach((s,k)=>{const t=s.textContent;s.textContent='';s.style.animation='none';[...t].forEach((c,i)=>{const e=document.createElement('i');e.textContent=c;e.style.animationDelay=(1.05+k*.25+i*.035)+'s';s.append(e)})});
$$('h2').forEach(h=>{h.innerHTML=h.textContent.split(' ').map((w,i)=>`<span class="w"><span style="transition-delay:${i*.07}s">${w}</span></span>`).join(' ')});
/* marquesina */
const mt=$('.mt');mt.innerHTML+=mt.innerHTML;
/* scroll: progreso y parallax del hero */
addEventListener('scroll',()=>{root.style.setProperty('--sp',(scrollY/(root.scrollHeight-innerHeight)).toFixed(3));root.style.setProperty('--hy',Math.min(scrollY,900))},{passive:true});
/* contadores */
if(!RM){const cn=$$('[data-n]');cn.forEach(e=>{e.dataset.t=e.textContent;e.textContent='0'});const co=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;co.unobserve(x.target);const e=x.target,n=+e.dataset.n,sf=e.dataset.t.replace(/[\d,]/g,''),t0=performance.now();(function f(t){const k=Math.min((t-t0)/1600,1),v=Math.round(n*(1-Math.pow(1-k,3)));e.textContent=(e.dataset.f?v.toLocaleString('en-US'):v)+sf;if(k<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});cn.forEach(e=>co.observe(e))}
/* partículas del hero */
if(!RM){const h=$('.hero');for(let i=0;i<18;i++){const d=document.createElement('i'),z=3+Math.random()*7;d.className='dt';d.style.cssText=`left:${Math.random()*100}%;width:${z}px;height:${z}px;animation-duration:${6+Math.random()*8}s;animation-delay:${-Math.random()*10}s;${i%3?'':'background:var(--r)'}`;h.prepend(d)}}
/* reseñas automáticas */
let ri=0,rt;const au=()=>{clearInterval(rt);if(!RM)rt=setInterval(()=>show(ri=(ri+1)%3),6000)};rb.forEach((b,i)=>b.addEventListener('click',()=>{ri=i;au()}));au();
/* interacción con puntero (solo escritorio) */
if(FINE&&!RM){
const c=document.createElement('i');c.className='cu';document.body.append(c);let x=0,y=0,cx=0,cy=0;addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY;c.classList.add('on');c.classList.toggle('h',!!e.target.closest('a,button,input'))});(function f(){cx+=(x-cx)*.18;cy+=(y-cy)*.18;c.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(f)})();
const ph=$('.phone');$('.hero').addEventListener('pointermove',e=>ph.style.setProperty('--tx',(e.clientX/innerWidth-.5)*2));
sh.forEach(s=>{s.addEventListener('pointermove',e=>{const r=s.getBoundingClientRect();s.style.setProperty('--tx',((e.clientX-r.left)/r.width-.5)*2);s.style.setProperty('--ty',((e.clientY-r.top)/r.height-.5)*2)});s.addEventListener('pointerleave',()=>{s.style.setProperty('--tx',0);s.style.setProperty('--ty',0)})});
$$('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.setProperty('--mx',(e.clientX-r.left-r.width/2)*.25+'px');b.style.setProperty('--my',(e.clientY-r.top-r.height/2)*.35+'px')});b.addEventListener('pointerleave',()=>{b.style.removeProperty('--mx');b.style.removeProperty('--my')})})}
