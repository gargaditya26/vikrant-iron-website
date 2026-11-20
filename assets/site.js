
const menuButton=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')})}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('#enquiry-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Website enquiry - Vikrant Iron');const body=encodeURIComponent(`Name: ${d.get('name')}\nCompany: ${d.get('company')||'-'}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')||'-'}\nInterested in: ${d.get('interest')||'-'}\nMessage: ${d.get('message')||'-'}`);window.location.href=`mailto:info@vikrantgroup.in?subject=${subject}&body=${body}`;})}

// Scroll reveal: subtle motion, with reduced-motion support.
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}
 }),{threshold:.12,rootMargin:'0px 0px -35px 0px'});
 revealItems.forEach(item=>revealObserver.observe(item));
}else{revealItems.forEach(item=>item.classList.add('is-visible'))}
