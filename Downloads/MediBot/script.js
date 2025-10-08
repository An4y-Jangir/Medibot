(() => {
    document.getElementById('year').textContent = new Date().getFullYear();
    function createRipple(e) {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const r = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 1.6;
      r.style.width = r.style.height = `${size}px`;
      r.style.left = `${e.clientX - rect.left - size/2}px`;
      r.style.top = `${e.clientY - rect.top - size/2}px`;
      r.className = 'ripple';
      btn.appendChild(r);
      setTimeout(()=> r.remove(), 550);
    }
    document.querySelectorAll('.btn').forEach(b => {
      b.addEventListener('click', createRipple);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') document.documentElement.classList.add('show-outline');
    });
  })();
  