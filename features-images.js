// features-images.js - ملف إضافي فقط، لا تلمس الكود الأساسي
window.addEventListener('load', () => {
  // 1. اللوغو
  let logoEl = document.querySelector('.logo');
  if(logoEl){
    logoEl.innerHTML = '<img src="logo.png" style="max-height:70px;max-width:220px;object-fit:contain"><div style="color:#D4AF37">PETROYAM</div>';
  }
  // 2. الخلفية الكاملة
  let style = document.createElement('style');
  style.innerHTML = `
  body {
    background: url('background.png') no-repeat center center fixed !important;
    background-size: cover !important;
  }
  body::before {
    content:''; position:fixed; inset:0;
    background: rgba(15, 23, 42, 0.82);
    z-index: 0; pointer-events:none;
  }
  .container, header { position:relative; z-index:1; }
  h1, h2, .title { color: #D4AF37 !important; }
  p, label, span { color: white !important; }
  `;
  document.head.appendChild(style);
});
