document.addEventListener('DOMContentLoaded',()=>{
  const root=document.documentElement;
  const themeToggle=document.getElementById('themeToggle');
  const savedTheme=localStorage.getItem('aryam-theme');
  if(savedTheme) root.dataset.theme=savedTheme;
  const updateThemeIcon=()=>{themeToggle.innerHTML=root.dataset.theme==='dark'?'<i class="ri-sun-line"></i>':'<i class="ri-moon-line"></i>';};
  updateThemeIcon();
  themeToggle?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('aryam-theme',root.dataset.theme);updateThemeIcon();});

  const langToggle=document.getElementById('langToggle');
  const rtlMap={
    '#about h2':'تفكير مكاني،<br><em>ونتائج جاهزة للقرار.</em>',
  };
  let ar=false;
  const labels={
    about:'عني',projects:'المشاريع',skills:'المهارات',education:'التعليم',contact:'التواصل'
  };
  langToggle?.addEventListener('click',()=>{
    ar=!ar;root.lang=ar?'ar':'en';root.dir=ar?'rtl':'ltr';langToggle.textContent=ar?'EN':'عر';
    document.querySelectorAll('nav a').forEach(a=>{const href=a.getAttribute('href')?.slice(1); if(labels[href]) a.textContent=ar?labels[href]:({about:'About',projects:'Projects',skills:'Skills',education:'Education',contact:'Contact'})[href];});
    if(ar){document.querySelector('.hero-desc').textContent='أحوّل البيانات المكانية إلى أدلة تحليلية ومخرجات جاهزة لدعم القرار — من نماذج التطوير الصناعي وقواعد البيانات الجغرافية إلى لوحات المعلومات والمشاريع التطبيقية.';document.querySelector('.hero-role').innerHTML='التحليل المكاني <b>·</b> البيانات الجغرافية <b>·</b> دعم القرار';document.querySelector('#about h2').innerHTML=rtlMap['#about h2'];document.querySelector('#projects .section-heading h2').innerHTML='مشاريع تبدأ<br><em>بسؤال مكاني.</em>';document.querySelector('#skills .section-heading h2').innerHTML='الأدوات خلف<br><em>الخرائط.</em>';document.querySelector('#contact h2').innerHTML='خلّنا نتحدث<br><em>عن المكان.</em>';}else{document.querySelector('.hero-desc').textContent='I turn spatial data into analytical evidence and decision-ready outputs — from industrial development models and geospatial databases to interactive dashboards and applied GIS projects.';document.querySelector('.hero-role').innerHTML='Spatial Analysis <b>·</b> Geospatial Data <b>·</b> Decision Support';document.querySelector('#about h2').innerHTML='Spatial thinking,<br><em>decision-ready</em> outputs.';document.querySelector('#projects .section-heading h2').innerHTML='Projects with a<br><em>spatial question</em> behind them.';document.querySelector('#skills .section-heading h2').innerHTML='The stack behind<br><em>the maps.</em>';document.querySelector('#contact h2').innerHTML='Let’s talk<br><em>spatial.</em>';}
  });

  const cursor=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
  if(window.matchMedia('(pointer:fine)').matches){document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px';});document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>{cursor.classList.add('hover');ring.classList.add('hover')});el.addEventListener('mouseleave',()=>{cursor.classList.remove('hover');ring.classList.remove('hover')})})}
});
