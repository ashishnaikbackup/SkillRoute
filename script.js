const progress=document.getElementById('progress');
function update(){const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progress.style.width=(max?window.scrollY/max*100:0)+'%'}
window.addEventListener('scroll',update,{passive:true});update();

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -30px'});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

// Subtle pointer tilt on the product preview, disabled for touch devices.
const app=document.querySelector('.app');
if(app && window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  app.addEventListener('pointermove',e=>{const r=app.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;app.style.transform=`perspective(1000px) rotateY(${x*4}deg) rotateX(${y*-4}deg) translateY(-4px)`});
  app.addEventListener('pointerleave',()=>{app.style.transform=''});
}

// Smoothly highlight the active navigation section while scrolling.
const navLinks=[...document.querySelectorAll('nav a')];
const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}})
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(s=>sectionObserver.observe(s));