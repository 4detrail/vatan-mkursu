(function(){'use strict';
var $=function(s){return document.querySelector(s)};
// Tema
var root=document.documentElement;
$('#theme').addEventListener('click',function(){var t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}});

// Mobil menü
var b=$('#burger'),nav=$('#nav');
function menu(o){nav.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Menüyü kapat':'Menüyü aç')}
b.addEventListener('click',function(){menu(!nav.classList.contains('open'))});
nav.addEventListener('click',function(e){if(e.target.tagName==='A')menu(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});

// Açılış animasyonu (yalnızca ana sayfada)
var intro=$('#intro');
if(intro){var done=false;
  var end=function(){if(done)return;done=true;intro.classList.add('out');document.body.classList.remove('intro-lock');
    try{sessionStorage.setItem('seen','1')}catch(e){}setTimeout(function(){intro.remove()},700)};
  var seen=false;try{seen=sessionStorage.getItem('seen')==='1'}catch(e){}
  if(seen||matchMedia('(prefers-reduced-motion: reduce)').matches){intro.remove();document.body.classList.remove('intro-lock')}
  else{requestAnimationFrame(function(){intro.classList.add('play')});setTimeout(end,3300);$('#skip').addEventListener('click',end)}
}
})();
