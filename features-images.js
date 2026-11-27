// features-images.js - ملف إضافي فقط، لا تلمس الكود الأساسي
// 1. اللوغو
window.addEventListener('load', () => {
  let logoEl = document.querySelector('.logo');
  if(logoEl){
    logoEl.innerHTML = '<img src="images/logo.png" style="max-height:70px;max-width:220px;object-fit:contain" onerror="this.style.display=\'none\'"><div>PETROYAM</div>';
  }
  // 2. الخلفية المائية
  let style = document.createElement('style');
  style.innerHTML = `body::before{
    content:''; position:fixed; inset:0;
    background-image:url('images/background.png');
    background-repeat:no-repeat; background-position:center;
    background-size:400px; opacity:0.07; pointer-events:none; z-index:0;
  }
  .container, header{position:relative; z-index:1;}
  .product-img{width:45px;height:45px;object-fit:cover;border-radius:8px;}`;
  document.head.appendChild(style);
});

// 3. صورة المنتج - تتحول لصورة صغيرة وتنحفظ مع المنتج
let currentProductImage = '';
function handleProductImage(input){
  let file = input.files[0];
  if(!file) return;
  let reader = new FileReader();
  reader.onload = e => { currentProductImage = e.target.result; alert('تم اختيار صورة المنتج'); };
  reader.readAsDataURL(file);
}
// راح نربطها باضافة المنتج الأصلي
let oldAddProduct = window.addProduct;
