document.addEventListener('DOMContentLoaded', () => {
  
  // 1. التبديل الذكي بين اللغتين (EN | عر) بدون تدمير الـ Layout
  const langToggle = document.getElementById('langToggle');
  const langTargets = document.querySelectorAll('.lang-target');
  let currentLang = 'en';

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      if (currentLang === 'en') {
        currentLang = 'ar';
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
        langToggle.textContent = 'EN';
      } else {
        currentLang = 'en';
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        langToggle.textContent = 'عر';
      }

      // تحديث النصوص بناءً على لغة الهدف المحددة في وسوم البيانات
      langTargets.forEach(el => {
        const textValue = el.getAttribute(`data-${currentLang}`);
        if (textValue) {
          el.innerHTML = textValue;
        }
      });

      // إعادة تصفير وحساب كود الكتابة التلقائية ليتناسب مع اللغة الحالية
      clearInterval(typingInterval);
      initTypewriter();
    });
  }

  // 2. حركة الكتابة التلقائية للمسمى الوظيفي المعتمد (Typewriter EFFECT)
  const typewriterEl = document.getElementById('typewriter');
  let typingInterval;
  
  const initTypewriter = () => {
    const phrases = currentLang === 'en' 
      ? ["GIS Analyst", "Spatial Analysis Specialist"] 
      : ["محللة نظم معلومات جغرافية", "أخصائية تحليلات مكانية"];
      
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const type = () => {
      const currentPhrase = phrases[phraseIdx];
      if (isDeleting) {
        typewriterEl.textContent = currentPhrase.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typewriterEl.textContent = currentPhrase.substring(0, charIdx + 1);
        charIdx++;
      }

      let typeSpeed = isDeleting ? 40 : 100;

      if (!isDeleting && charIdx === currentPhrase.length) {
        typeSpeed = 1800; // وقت الانتظار عند اكتمال الجملة
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        typeSpeed = 400; // وقت الانتظار قبل بدء الجملة الجديدة
      }

      typingInterval = setTimeout(type, typeSpeed);
    };
    type();
  };

  initTypewriter();

  // 3. حركة الماوس التفاعلية (Interactive Custom Cursor)
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');

  if (cursor && cursorRing) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
      }, 50);
    });

    const interactiveElements = document.querySelectorAll('a, button, .stat-card, .skill-tag, .project-card, .quick-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.background = '#0077ff';
        cursorRing.style.width = '50px';
        cursorRing.style.height = '50px';
        cursorRing.style.borderColor = 'rgba(0,119,255,0.6)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = '#00e5c0';
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
        cursorRing.style.borderColor = 'rgba(0,229,192,0.4)';
      });
    });
  }

  // 4. حركات ظهور العناصر عند النزول (Smooth Scroll Reveal)
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
