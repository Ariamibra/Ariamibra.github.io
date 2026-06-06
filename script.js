document.addEventListener('DOMContentLoaded', () => {
  // 1. تشغيل وتأثير حركة الماوس التفاعلي
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');

  if (cursor && cursorRing) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      // حلقة الماوس تتبع الماوس الأصلي بنعومة بسيطة
      setTimeout(() => {
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
      }, 50);
    });

    // تكبير المؤثرات عند المرور على الأزرار والروابط قابلية الضغط
    const interactiveElements = document.querySelectorAll('a, button, .stat-card, .skill-tag, .project-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.background = '#0077ff'; // يقلب أزرق فخم عند اللمس
        cursorRing.style.width = '50px';
        cursorRing.style.height = '50px';
        cursorRing.style.borderColor = 'rgba(0,119,255,0.6)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = '#00e5c0'; // يرجع للون الـ Accent الأساسي
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
        cursorRing.style.borderColor = 'rgba(0,229,192,0.4)';
      });
    });
  }

  // 2. ظهور العناصر بنعومة أثناء التمرير (Scroll Reveal)
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
  revealOnScroll(); // تشغيل أولي للعناصر الظاهرة مسبقاً في الشاشة

  // 3. نظام تبديل اللغة الذكي والكامل (Multi-language Engine)
  const lang

