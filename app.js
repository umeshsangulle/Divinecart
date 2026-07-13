// ============================================================
// 1. DATA
// ============================================================
const CATEGORIES = [
  { slug: 'agarbatti', name: 'Agarbatti', image: 'https://picsum.photos/seed/cat_agarbatti/800/400', desc: 'Premium incense sticks for a divine atmosphere.' },
  { slug: 'cotton-batti', name: 'Cotton Batti', image: 'https://picsum.photos/seed/cat_cotton/800/400', desc: 'Pure cotton wicks for your daily puja.' },
  { slug: 'kumkum', name: 'Kumkum', image: 'https://picsum.photos/seed/cat_kumkum/800/400', desc: 'Sacred kumkum and haldi powders.' },
  { slug: 'dhoopbatti', name: 'DhoopBatti', image: 'https://picsum.photos/seed/cat_dhoop/800/400', desc: 'Traditional dhoop for spiritual cleansing.' },
  { slug: 'diya', name: 'Diya', image: 'https://picsum.photos/seed/cat_diya/800/400', desc: 'Handcrafted diyas to light up your prayers.' },
  { slug: 'festival-specials', name: 'Festival Specials', image: 'https://picsum.photos/seed/cat_festival/800/400', desc: 'Curated kits for special occasions and festivals.' },
  { slug: 'cloths', name: 'Sacred Cloths', image: 'https://picsum.photos/seed/cat_cloth/800/400', desc: 'Vastras and asans for deities.' },
];

const generateProduct = (id, name, category, price, mrp, rating, reviewCount, isBestseller = false, isNew = false, isTrending = false) => {
  const discount = Math.round(((mrp - price) / mrp) * 100);
  return {
    id, name, slug: name.toLowerCase().replace(/\s+/g, '-'), category, price, mrp, discount, rating, reviewCount,
    description: `Experience the divine aura with our authentic ${name}. Handcrafted with devotion, this premium product brings peace and spiritual serenity to your daily puja rituals.`,
    benefits: ['Creates a peaceful and spiritual ambiance', 'Made from authentic, premium quality ingredients', 'Perfect for daily prayers and meditation', 'Long-lasting and pure'],
    specifications: { 'Brand': 'DivineCart', 'Origin': 'India', 'Quality': 'Premium Export Quality', 'Packaging': 'Secure & Sacred' },
    images: [`https://picsum.photos/seed/${id}1/600/600`, `https://picsum.photos/seed/${id}2/600/600`, `https://picsum.photos/seed/${id}3/600/600`, `https://picsum.photos/seed/${id}4/600/600`],
    inStock: true, isNew, isBestseller, isTrending
  };
};

const PRODUCTS = [
  generateProduct('p1', 'Rose Agarbatti Premium', 'agarbatti', 149, 199, 4.8, 124, true, false, true),
  generateProduct('p2', 'Sandalwood Pure Agarbatti', 'agarbatti', 199, 249, 4.9, 312, true, false, true),
  generateProduct('p3', 'Jasmine Agarbatti', 'agarbatti', 129, 169, 4.6, 89, false, false, false),
  generateProduct('p4', 'Lavender Meditation Agarbatti', 'agarbatti', 179, 229, 4.7, 156, false, true, false),
  generateProduct('p5', 'Pure Cotton Wicks Long', 'cotton-batti', 89, 119, 4.9, 450, true, false, false),
  generateProduct('p6', 'Cotton Batti Pack of 200', 'cotton-batti', 129, 159, 4.8, 210, false, false, true),
  generateProduct('p7', 'Round Cotton Wicks (Phool Batti)', 'cotton-batti', 79, 99, 4.7, 180, false, true, false),
  generateProduct('p8', 'Ghee Dipped Cotton Wicks', 'cotton-batti', 249, 299, 4.9, 85, false, true, true),
  generateProduct('p9', 'Nag Champa Dhoop Batti', 'dhoopbatti', 199, 249, 4.8, 267, true, false, true),
  generateProduct('p10', 'Chandan Dhoop Premium', 'dhoopbatti', 229, 299, 4.9, 198, true, false, false),
  generateProduct('p11', 'Guggal Dhoop Cups', 'dhoopbatti', 149, 199, 4.6, 120, false, false, false),
  generateProduct('p12', 'Loban Dhoop Sticks', 'dhoopbatti', 179, 229, 4.7, 145, false, true, false),
  generateProduct('p13', 'Pure Kumkum Powder', 'kumkum', 99, 129, 4.9, 530, true, false, false),
  generateProduct('p14', 'Kashmiri Kumkum Premium', 'kumkum', 149, 189, 4.8, 210, false, true, true),
  generateProduct('p15', 'Haldi Kumkum Pack', 'kumkum', 129, 159, 4.7, 340, true, false, false),
  generateProduct('p16', 'Liquid Sindoor Red', 'kumkum', 89, 119, 4.5, 90, false, false, false),
  generateProduct('p17', 'Lord Krishna Pitambar Cloth', 'cloths', 499, 649, 4.9, 85, true, false, true),
  generateProduct('p18', 'Goddess Radha Silk Cloth', 'cloths', 599, 799, 4.8, 72, false, true, false),
  generateProduct('p19', 'Goddess Durga Vastra Red', 'cloths', 549, 699, 4.9, 120, true, false, true),
  generateProduct('p20', 'Pooja Aasan Velvet', 'cloths', 299, 399, 4.7, 240, false, false, false),
  generateProduct('p21', 'Clay Diya Set of 12', 'diya', 149, 199, 4.8, 410, true, false, false),
  generateProduct('p22', 'Brass Diya Premium', 'diya', 349, 449, 4.9, 156, false, false, true),
  generateProduct('p23', 'Akhand Jyoti Diya Brass', 'diya', 599, 799, 4.9, 280, true, false, true),
  generateProduct('p24', 'Designer Terracotta Diyas', 'diya', 249, 349, 4.7, 110, false, true, false),
  generateProduct('p25', 'Diwali Puja Kit Complete', 'festival-specials', 899, 1199, 4.9, 520, true, false, true),
  generateProduct('p26', 'Navratri Special Pack', 'festival-specials', 649, 849, 4.8, 310, false, true, false),
  generateProduct('p27', 'Satyanarayan Puja Samagri', 'festival-specials', 799, 999, 4.9, 185, true, false, false),
  generateProduct('p28', 'Ganesh Chaturthi Kit', 'festival-specials', 599, 799, 4.7, 140, false, false, true)
];

const BLOG_POSTS = [
  {
    id: '1', slug: 'guide-to-diwali-puja-preparation', title: 'A Complete Guide to Diwali Puja Preparation',
    excerpt: 'Everything you need to know about preparing your home and mandir for the grand Diwali Puja.',
    content: 'Diwali, the festival of lights, signifies the triumph of light over darkness and good over evil. The core of this celebration is the Lakshmi Puja, performed to welcome the Goddess of Wealth into our homes...\n\nPreparing for the puja requires several essential items: pure cotton wicks (phool batti), mustard oil or ghee for diyas, premium agarbatti and dhoop to purify the air, and sacred kumkum. Ensure your mandir is cleaned and decorated with fresh flowers before placing the deity. Offerings of sweets and fruits are essential. Start the puja by invoking Lord Ganesha, followed by Goddess Lakshmi. Lighting 11, 21, or 51 diyas around the house is a common tradition to invite prosperity.',
    image: 'https://picsum.photos/seed/blog1/800/400', date: 'Oct 15, 2023', author: 'Pandit Sharma', category: 'Pooja Guides', readTime: '5 min read'
  },
  {
    id: '2', slug: 'significance-of-kumkum', title: 'The Spiritual Significance of Kumkum',
    excerpt: 'Understanding why Kumkum is considered one of the most sacred elements in Hindu rituals.',
    content: 'Kumkum, typically made from turmeric and natural slaked lime, holds immense significance in Hindu culture. Applied between the eyebrows at the Ajna Chakra, it is believed to retain energy in the human body and control various levels of concentration. Beyond its physiological benefits, offering kumkum to deities is a profound act of devotion, particularly to Goddesses who embody Shakti (divine energy).',
    image: 'https://picsum.photos/seed/blog2/800/400', date: 'Sep 28, 2023', author: 'DivineCart Team', category: 'Spiritual Practices', readTime: '4 min read'
  },
  {
    id: '3', slug: 'choosing-right-agarbatti', title: 'How to Choose the Right Agarbatti for Meditation',
    excerpt: 'Different fragrances have different effects on the mind. Learn which one suits your spiritual practice.',
    content: 'Aromatherapy plays a vital role in meditation by anchoring the mind and reducing anxiety. When choosing an agarbatti, opt for natural ingredients over synthetic perfumes. Sandalwood (Chandan) is ideal for deep spiritual meditation as it cools the mind. Lavender aids in relaxation and sleep preparation, while Nag Champa creates a deeply mystical ambiance suitable for chanting and intense focus.',
    image: 'https://picsum.photos/seed/blog3/800/400', date: 'Aug 10, 2023', author: 'Anjali Desai', category: 'Product Education', readTime: '6 min read'
  },
  {
    id: '4', slug: 'navratri-fasting-and-rituals', title: 'Navratri Fasting Rules and Daily Rituals',
    excerpt: 'A comprehensive guide to observing Navratri fasts with complete devotion and correct practices.',
    content: 'Navratri celebrates the nine forms of Goddess Durga. Fasting during this period is not just physical detoxification but a spiritual discipline. Consume satvik food, avoid grains, onion, and garlic. Daily rituals include lighting an Akhand Jyoti (continuous lamp), reciting the Durga Saptashati, and offering specific flowers and bhog to the Goddess each day. Cleanliness of mind and environment is paramount.',
    image: 'https://picsum.photos/seed/blog4/800/400', date: 'Sep 05, 2023', author: 'Pandit Sharma', category: 'Hindu Festivals', readTime: '7 min read'
  },
  {
    id: '5', slug: 'importance-of-brass-diyas', title: 'Why Brass Diyas are Preferred in Temples',
    excerpt: 'Explore the metallurgical and spiritual reasons behind using brass and copper diyas for daily prayers.',
    content: 'Brass is considered a highly auspicious metal in Hinduism. It is known to attract positive spiritual waves (Sattvik frequencies) and emit them into the surroundings. Unlike iron or steel, brass does not carry negative energies. Lighting a brass diya with pure ghee creates a purifying aura that destroys negative elements in the atmosphere.',
    image: 'https://picsum.photos/seed/blog5/800/400', date: 'Jul 22, 2023', author: 'DivineCart Team', category: 'Temple Traditions', readTime: '4 min read'
  },
  {
    id: '6', slug: 'understanding-mantra-chanting', title: 'The Science and Soul of Mantra Chanting',
    excerpt: 'How sound vibrations can transform your physical space and inner self during puja.',
    content: 'Mantras are precise sound vibrations formulated to influence the physical and subtle bodies. When chanted with correct pronunciation and intent, they create resonance that can calm the nervous system and clear the mind. Using a rudraksha or tulsi mala helps in keeping count while grounding the energy. Start with simple mantras like "Om" or the Gayatri Mantra.',
    image: 'https://picsum.photos/seed/blog6/800/400', date: 'Jun 15, 2023', author: 'Anjali Desai', category: 'Spiritual Practices', readTime: '5 min read'
  }
];

// ============================================================  
// 2. STATE — Cart, Wishlist
// ============================================================
let cart = JSON.parse(localStorage.getItem('dc_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('dc_wishlist') || '[]');

function saveCart() { localStorage.setItem('dc_cart', JSON.stringify(cart)); updateHeaderBadges(); }
function saveWishlist() { localStorage.setItem('dc_wishlist', JSON.stringify(wishlist)); updateHeaderBadges(); }

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.product.id === productId);
  if (existing) existing.quantity += qty;
  else cart.push({ product, quantity: qty });
  saveCart();
  showToast(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  saveCart();
  showToast('Item removed from cart', 'info');
  if (window.location.hash === '#/cart' || window.location.hash === '#/checkout') router();
}

function updateCartQty(productId, qty) {
  if (qty <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find(item => item.product.id === productId);
  if (item) {
    item.quantity = qty;
    saveCart();
    if (window.location.hash === '#/cart' || window.location.hash === '#/checkout') router();
  }
}

function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const exists = wishlist.some(p => p.id === productId);
  if (exists) {
    wishlist = wishlist.filter(p => p.id !== productId);
    showToast('Removed from wishlist', 'info');
  } else {
    wishlist.push(product);
    showToast(`${product.name} added to wishlist!`, 'success');
  }
  saveWishlist();
  
  // Update icons visually if on page
  const btns = document.querySelectorAll(`[data-wishlist-id="${productId}"]`);
  btns.forEach(btn => {
    if (exists) btn.classList.remove('active');
    else btn.classList.add('active');
  });

  if (window.location.hash === '#/wishlist') router();
}

function isInWishlist(productId) {
  return wishlist.some(p => p.id === productId);
}

function clearCart() {
  cart = [];
  saveCart();
}

// ============================================================
// 4. UI HELPERS
// ============================================================
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  let icon = '';
  if (type === 'success') icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`;
  else if (type === 'error') icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`;
  else icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;
  
  toast.innerHTML = `${icon} <span style="font-weight: 500; font-size: 0.875rem;">${msg}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function updateHeaderBadges() {
  const cartBadge = document.getElementById('cart-badge');
  const wishlistBadge = document.getElementById('wishlist-badge');
  
  const cartTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartTotal > 0) {
    cartBadge.textContent = cartTotal;
    cartBadge.classList.remove('hidden');
  } else {
    cartBadge.classList.add('hidden');
  }

  if (wishlist.length > 0) {
    wishlistBadge.textContent = wishlist.length;
    wishlistBadge.classList.remove('hidden');
  } else {
    wishlistBadge.classList.add('hidden');
  }
}

function getStarHtml(rating) {
  let stars = '';
  for(let i=1; i<=5; i++) {
    const filled = i <= Math.floor(rating) ? 'filled' : '';
    stars += `<svg class="star-icon ${filled}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }
  return stars;
}

function getProductCardHtml(product) {
  const wishActive = isInWishlist(product.id) ? 'active' : '';
  const badges = [];
  if (product.discount > 0) badges.push(`<span class="product-badge badge-discount">${product.discount}% OFF</span>`);
  if (product.isNew) badges.push(`<span class="product-badge badge-new">NEW</span>`);
  if (product.isBestseller) badges.push(`<span class="product-badge badge-bestseller">BESTSELLER</span>`);

  return `
    <div class="product-card group">
      <div class="product-badges">${badges.join('')}</div>
      <button class="wishlist-btn ${wishActive}" onclick="toggleWishlist('${product.id}')" data-wishlist-id="${product.id}" title="Wishlist">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </button>
      <a href="#/product/${product.id}" class="product-image-container block">
        <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy">
        <div class="quick-actions">
          <button class="quick-btn" onclick="event.preventDefault(); openQuickView('${product.id}')" title="Quick View">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button class="quick-btn" onclick="event.preventDefault(); addToCart('${product.id}')" title="Add to Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>
        </div>
      </a>
      <div class="product-info">
        <div class="product-rating">
          ${getStarHtml(product.rating)}
          <span style="font-size:0.875rem; font-weight:500;">${product.rating}</span>
          <span style="font-size:0.75rem; color:hsl(var(--muted-foreground));">(${product.reviewCount})</span>
        </div>
        <a href="#/product/${product.id}"><h3 class="product-title">${product.name}</h3></a>
        <div class="product-price-wrap">
          <span class="product-price">₹${product.price}</span>
          ${product.mrp > product.price ? `<span class="product-mrp">₹${product.mrp}</span>` : ''}
        </div>
        <button class="btn btn-primary w-full" onclick="addToCart('${product.id}')" ${!product.inStock ? 'disabled' : ''}>
          ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  `;
}

function openQuickView(id) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;
  const modal = document.getElementById('quick-view-modal');
  const body = document.getElementById('quick-view-body');
  
  window.currentQuickViewQty = 1;

  body.innerHTML = `
    <div style="flex: 1 1 50%; min-width: 300px; background: hsl(var(--muted));">
      <img src="${p.images[0]}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.name}">
    </div>
    <div style="flex: 1 1 50%; min-width: 300px; padding: 2rem; display: flex; flex-direction: column; justify-content: center;">
      <h2 class="font-serif font-bold" style="font-size: 1.5rem; margin-bottom: 0.5rem;">${p.name}</h2>
      <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom: 1rem;">
        <div style="display:flex;">${getStarHtml(p.rating)}</div>
        <span class="text-muted-foreground" style="font-size:0.875rem;">(${p.reviewCount} reviews)</span>
      </div>
      <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom: 1.5rem;">
        <span class="font-bold text-primary" style="font-size: 1.5rem;">₹${p.price}</span>
        ${p.mrp > p.price ? `<span class="text-muted-foreground" style="text-decoration:line-through;">₹${p.mrp}</span>` : ''}
      </div>
      <p class="text-muted-foreground" style="font-size:0.875rem; margin-bottom: 1.5rem; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">
        ${p.description}
      </p>
      <div style="display:flex; align-items:center; gap:1rem; margin-bottom: 1.5rem;">
        <div class="qty-selector">
          <button class="qty-btn" onclick="updateQVQty(-1)">-</button>
          <input type="number" class="qty-input" id="qv-qty" value="1" readonly>
          <button class="qty-btn" onclick="updateQVQty(1)">+</button>
        </div>
        <span style="font-size:0.875rem; font-weight:500; color:#16a34a;">${p.inStock ? 'In Stock' : 'Out of Stock'}</span>
      </div>
      <div style="display:flex; gap:0.75rem;">
        <button class="btn btn-outline-primary" style="flex:1;" onclick="addToCart('${p.id}', window.currentQuickViewQty); closeModal()">Add to Cart</button>
        <button class="btn btn-primary" style="flex:1;" onclick="addToCart('${p.id}', window.currentQuickViewQty); closeModal(); window.location.hash='#/checkout'">Buy Now</button>
      </div>
      <div style="text-align:center; margin-top:1rem;">
        <a href="#/product/${p.id}" style="color:hsl(var(--primary)); font-size:0.875rem;" onclick="closeModal()">View full details</a>
      </div>
    </div>
  `;
  modal.classList.add('active');
}

window.updateQVQty = function(delta) {
  window.currentQuickViewQty = Math.max(1, window.currentQuickViewQty + delta);
  document.getElementById('qv-qty').value = window.currentQuickViewQty;
}

function closeModal() {
  document.getElementById('quick-view-modal').classList.remove('active');
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('active');
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

// ============================================================
// 5. PAGE RENDERERS
// ============================================================
const contentArea = document.getElementById('app-content');

function renderHome() {
  contentArea.innerHTML = `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <img src="https://picsum.photos/seed/divinehero1/1920/1080" class="hero-bg" alt="Hero">
      <div class="hero-content">
        <h1 class="hero-title" style="transform: translateY(20px); animation: slideUp 0.8s forwards;">Authentic Hindu Spiritual Products for Every Devotee</h1>
        <p class="hero-subtitle" style="opacity: 0; animation: fadeIn 0.8s 0.2s forwards;">Bring the divine aura to your home with our premium collection of handcrafted puja essentials.</p>
        <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:1rem; opacity: 0; animation: slideUp 0.8s 0.4s forwards;">
          <a href="#/shop" class="btn btn-primary btn-lg">Shop Now</a>
          <a href="#/category/festival-specials" class="btn btn-outline btn-lg" style="color:white; border-color:white; background:rgba(255,255,255,0.1); backdrop-filter:blur(4px);">Explore Collections</a>
        </div>
      </div>
    </section>

    <!-- Trust Pillars -->
    <section class="bg-muted py-10 border-b">
      <div class="container px-4">
        <div class="grid grid-5 xs-grid-2 md-grid-5 gap-6 text-center">
          ${[
            {icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>', title: 'Authentic Products'},
            {icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>', title: 'Quality Assured'},
            {icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>', title: 'Secure Payments'},
            {icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v5c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>', title: 'Fast Shipping'},
            {icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>', title: 'Easy Returns'}
          ].map(p => `
            <div class="flex flex-col items-center gap-2">
              <div class="bg-card text-primary rounded-full flex items-center justify-center shadow-sm" style="width:3rem; height:3rem; margin-bottom:0.5rem;">
                <div style="width:1.5rem; height:1.5rem;">${p.icon}</div>
              </div>
              <h4 style="font-size:0.875rem; font-weight:700;">${p.title}</h4>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="py-20 container px-4">
      <div class="text-center" style="margin-bottom: 3rem;">
        <h2 class="section-title font-serif">Shop by Category</h2>
        <div class="title-divider"></div>
      </div>
      <div class="grid grid-4 sm-grid-2 md-grid-4 gap-6">
        ${CATEGORIES.map(cat => `
          <a href="#/category/${cat.slug}" class="relative rounded-xl overflow-hidden group" style="aspect-ratio: 4/5; display:block;">
            <div class="absolute inset-0 z-10" style="background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent); transition: opacity 0.3s;"></div>
            <img src="${cat.image}" class="absolute inset-0 w-full h-full object-cover transition-transform group-hover-scale" style="transition: transform 0.7s;">
            <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 class="text-white font-serif font-bold" style="font-size: 1.5rem; margin-bottom: 0.25rem;">${cat.name}</h3>
              <p class="text-white opacity-0" style="font-size:0.875rem; transform:translateY(1rem); transition:all 0.3s; opacity: 0.8;">Explore collection &rarr;</p>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-20 bg-muted border-t border-b">
      <div class="container px-4">
        <div class="text-center" style="margin-bottom: 2.5rem;">
          <h2 class="section-title font-serif" style="margin-bottom: 2rem;">Divine Collections</h2>
          <div class="tabs-list">
            <button class="tab-btn active" onclick="switchHomeTab('bestsellers')">Best Sellers</button>
            <button class="tab-btn" onclick="switchHomeTab('new')">New Arrivals</button>
            <button class="tab-btn" onclick="switchHomeTab('trending')">Trending</button>
          </div>
        </div>
        <div id="home-products-grid" class="grid grid-4 sm-grid-1 md-grid-2 lg-grid-4 gap-6">
          <!-- Rendered by JS -->
        </div>
        <div class="text-center mt-12" style="margin-top: 3rem;">
          <a href="#/shop" class="btn btn-outline-primary btn-lg">View All Products <svg style="margin-left:0.5rem;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 container px-4">
      <div class="text-center" style="margin-bottom: 3rem;">
        <h2 class="section-title font-serif">What Our Devotees Say</h2>
        <div class="title-divider"></div>
      </div>
      <div class="grid grid-3 sm-grid-1 gap-8">
        ${[
          {name: "Rahul S.", role: "Verified Buyer", text: "The quality of the agarbattis is simply divine. The fragrance lingers for hours and creates a perfect atmosphere for my morning puja."},
          {name: "Priya M.", role: "Verified Buyer", text: "I ordered the Diwali Puja Kit. Everything was packed so beautifully and the items were 100% authentic. It made our festival very special."},
          {name: "Anand K.", role: "Verified Buyer", text: "The brass diyas are heavy and of premium quality. Customer service was excellent when I had a question about my order. Highly recommend."}
        ].map(t => `
          <div class="bg-card border rounded-xl p-8 relative">
            <div style="display:flex; color:hsl(var(--primary)); margin-bottom:1rem;">${getStarHtml(5)}</div>
            <p class="text-muted-foreground italic mb-6">"${t.text}"</p>
            <div>
              <h4 class="font-bold">${t.name}</h4>
              <p class="text-muted-foreground" style="font-size:0.75rem;">${t.role}</p>
            </div>
            <div class="absolute" style="top:1.5rem; right:1.5rem; font-family:var(--font-serif); font-size:4rem; line-height:1; color:hsla(var(--primary), 0.1);">"</div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-20" style="background-color:hsl(var(--secondary)); color:white;">
      <div class="container px-4 text-center" style="max-width:42rem;">
        <h2 class="font-serif font-bold" style="font-size:2.25rem; margin-bottom:1rem;">Join Our Spiritual Community</h2>
        <p style="opacity:0.9; margin-bottom:2rem;">Subscribe to receive updates on new products, festive offers, and spiritual guides.</p>
        <form class="flex sm-grid-1 gap-2" style="flex-direction:row;" onsubmit="event.preventDefault(); showToast('Subscribed successfully!', 'success'); this.reset();">
          <input type="email" placeholder="Enter your email address" class="input" style="flex:1; background:white; color:black; border:none; height:3rem; padding: 0 1rem;" required>
          <button type="submit" class="btn btn-primary" style="height:3rem; padding:0 2rem; white-space:nowrap;">Subscribe Now</button>
        </form>
      </div>
    </section>
  `;
  
  // Custom styles for hover effects in this inline block
  const style = document.createElement('style');
  style.innerHTML = `
    .group:hover .group-hover-scale { transform: scale(1.1); }
    .group:hover p { opacity: 1 !important; transform: translateY(0) !important; }
    @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  `;
  contentArea.appendChild(style);
  
  // initial tab
  window.switchHomeTab('bestsellers');
}

window.switchHomeTab = function(tab) {
  document.querySelectorAll('.tabs-list .tab-btn').forEach(b => {
    b.classList.remove('active');
    if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(`'${tab}'`)) {
      b.classList.add('active');
    }
  });
  
  let filtered = [];
  if(tab === 'new') filtered = PRODUCTS.filter(p => p.isNew).slice(0,8);
  else if(tab === 'trending') filtered = PRODUCTS.filter(p => p.isTrending).slice(0,8);
  else filtered = PRODUCTS.filter(p => p.isBestseller).slice(0,8);
  
  document.getElementById('home-products-grid').innerHTML = filtered.map(getProductCardHtml).join('');
}

function renderShop(params) {
  const searchQuery = params.get('search') || '';
  const page = parseInt(params.get('page') || '1', 10);
  
  // In a real app we'd maintain state, but for pure JS we'll read from URL params
  // Let's implement an interactive filter that redraws a section
  
  contentArea.innerHTML = `
    <div class="bg-muted py-8 border-b">
      <div class="container px-4 text-center">
        <h1 class="font-serif font-bold" style="font-size:2.25rem; margin-bottom:1rem;">Shop All Products</h1>
        <div style="display:flex; justify-content:center; gap:0.5rem; font-size:0.875rem; color:hsl(var(--muted-foreground));">
          <a href="#/" class="transition-colors hover-text-primary">Home</a>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          <span style="color:hsl(var(--foreground));">Shop</span>
        </div>
      </div>
    </div>

    <div class="container px-4 py-12 flex gap-8" style="flex-wrap: wrap;">
      <!-- Sidebar -->
      <aside style="width: 16rem; flex-shrink: 0;" class="hidden lg:block" id="shop-sidebar">
        <div style="margin-bottom: 2rem;">
          <h3 class="font-serif font-bold text-lg border-b" style="padding-bottom:0.5rem; margin-bottom:1rem;">Search</h3>
          <input type="text" id="filter-search" class="input" placeholder="Search products..." value="${searchQuery}" onkeyup="if(event.key==='Enter') applyFilters()">
        </div>
        <div style="margin-bottom: 2rem;">
          <h3 class="font-serif font-bold text-lg border-b" style="padding-bottom:0.5rem; margin-bottom:1rem;">Categories</h3>
          <div style="display:flex; flex-direction:column; gap:0.75rem;" id="filter-categories">
            ${CATEGORIES.map(c => `
              <label style="display:flex; align-items:center; gap:0.75rem; cursor:pointer;">
                <input type="checkbox" value="${c.slug}" class="shop-filter-cat">
                <span class="text-sm text-muted-foreground transition-colors hover-text-foreground">${c.name}</span>
              </label>
            `).join('')}
          </div>
        </div>
        <div style="margin-bottom: 2rem;">
          <h3 class="font-serif font-bold text-lg border-b" style="padding-bottom:0.5rem; margin-bottom:1rem;">Max Price: ₹<span id="price-val">2000</span></h3>
          <input type="range" id="filter-price" min="50" max="2000" step="50" value="2000" oninput="document.getElementById('price-val').textContent=this.value" onchange="applyFilters()">
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:hsl(var(--muted-foreground)); margin-top:0.5rem;">
            <span>₹50</span><span>₹2000+</span>
          </div>
        </div>
        <button class="btn btn-primary w-full" onclick="applyFilters()">Apply Filters</button>
      </aside>

      <!-- Main -->
      <div style="flex:1; min-width:0;">
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1rem; margin-bottom:2rem;">
          <button class="btn btn-outline lg:hidden" onclick="document.getElementById('shop-sidebar').classList.toggle('hidden'); document.getElementById('shop-sidebar').classList.toggle('block');">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> Filters
          </button>
          <p class="text-muted-foreground text-sm" id="shop-count">Showing 0 products</p>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-muted-foreground"><path d="M21 4H3"/><path d="M21 12H3"/><path d="M21 20H3"/></svg>
            <select id="filter-sort" onchange="applyFilters()" style="background:transparent; border:none; font-size:0.875rem; font-weight:500; outline:none; cursor:pointer;">
              <option value="popularity">Sort by Popularity</option>
              <option value="newest">Sort by Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
        
        <div id="shop-grid" class="grid grid-3 sm-grid-1 md-grid-2 gap-6"></div>
        <div id="shop-pagination" style="display:flex; justify-content:center; gap:0.5rem; margin-top:3rem;"></div>
      </div>
    </div>
  `;

  // Inline style for toggling sidebar on mobile
  const st = document.createElement('style');
  st.innerHTML = `.lg\\:hidden { display: none; } @media (max-width: 1024px) { .lg\\:hidden { display: inline-flex; } .lg\\:block { display: none; } .block { display: block !important; width: 100% !important; margin-bottom: 2rem;} }`;
  contentArea.appendChild(st);

  window.applyFilters = function(pPage = 1) {
    const q = document.getElementById('filter-search').value.toLowerCase();
    const maxP = parseInt(document.getElementById('filter-price').value, 10);
    const sort = document.getElementById('filter-sort').value;
    const cats = Array.from(document.querySelectorAll('.shop-filter-cat:checked')).map(cb => cb.value);

    let res = PRODUCTS.filter(p => p.price <= maxP);
    if(q) res = res.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    if(cats.length > 0) res = res.filter(p => cats.includes(p.category));

    if(sort === 'price-low') res.sort((a,b)=>a.price - b.price);
    else if(sort === 'price-high') res.sort((a,b)=>b.price - a.price);
    else if(sort === 'newest') res.sort((a,b)=> (b.isNew?1:0) - (a.isNew?1:0));
    else res.sort((a,b)=> b.reviewCount - a.reviewCount);

    document.getElementById('shop-count').textContent = `Showing ${res.length} products`;

    const perPage = 12;
    const totalPages = Math.ceil(res.length / perPage);
    const paginated = res.slice((pPage - 1) * perPage, pPage * perPage);

    const grid = document.getElementById('shop-grid');
    if(paginated.length > 0) {
      grid.innerHTML = paginated.map(getProductCardHtml).join('');
    } else {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 5rem 0; background:hsl(var(--muted)); border-radius:var(--radius-xl);">
          <h3 class="font-serif text-2xl mb-2">No products found</h3>
          <p class="text-muted-foreground mb-6">Try adjusting your filters or search query.</p>
          <button class="btn btn-primary" onclick="document.getElementById('filter-search').value=''; document.getElementById('filter-price').value=2000; document.getElementById('price-val').textContent='2000'; document.querySelectorAll('.shop-filter-cat').forEach(c=>c.checked=false); applyFilters();">Clear Filters</button>
        </div>
      `;
    }

    const pg = document.getElementById('shop-pagination');
    pg.innerHTML = '';
    if(totalPages > 1) {
      for(let i=1; i<=totalPages; i++) {
        pg.innerHTML += `<button class="btn ${i===pPage ? 'btn-primary' : 'bg-muted'}" style="width:2.5rem; height:2.5rem; padding:0;" onclick="applyFilters(${i}); window.scrollTo({top:0, behavior:'smooth'})">${i}</button>`;
      }
    }
  }

  // initialize
  applyFilters(page);
}

function renderProduct(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if(!product) {
    contentArea.innerHTML = `<div class="container py-20 text-center"><h2 class="font-serif text-2xl mb-4">Product not found</h2><a href="#/shop" class="btn btn-primary">Return to Shop</a></div>`;
    return;
  }

  const catName = CATEGORIES.find(c => c.slug === product.category)?.name || product.category;

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0,4);

  contentArea.innerHTML = `
    <div class="bg-muted py-4 border-b">
      <div class="container px-4 flex gap-2" style="font-size:0.875rem; color:hsl(var(--muted-foreground)); flex-wrap:wrap;">
        <a href="#/" class="hover-text-primary">Home</a>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        <a href="#/shop" class="hover-text-primary">Shop</a>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        <a href="#/category/${product.category}" class="hover-text-primary">${catName}</a>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        <span class="text-foreground" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:200px;">${product.name}</span>
      </div>
    </div>

    <div class="container px-4 py-10">
      <div class="grid grid-2 sm-grid-1 gap-8" style="margin-bottom: 4rem;">
        
        <!-- Gallery -->
        <div>
          <div class="gallery-main">
            <img id="main-image" src="${product.images[0]}" class="w-full h-full object-cover">
          </div>
          <div class="gallery-thumbs">
            ${product.images.map((img, i) => `
              <div class="gallery-thumb ${i===0 ? 'active' : ''}" onclick="document.getElementById('main-image').src='${img}'; document.querySelectorAll('.gallery-thumb').forEach(t=>t.classList.remove('active')); this.classList.add('active');">
                <img src="${img}" class="w-full h-full object-cover">
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Info -->
        <div>
          <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">
            ${product.isBestseller ? `<span class="product-badge badge-bestseller">BESTSELLER</span>` : ''}
            ${product.discount > 0 ? `<span class="product-badge badge-discount">${product.discount}% OFF</span>` : ''}
            <span class="product-badge" style="background:${product.inStock ? '#dcfce7' : '#fee2e2'}; color:${product.inStock ? '#15803d' : '#b91c1c'};">${product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}</span>
          </div>

          <h1 class="font-serif font-bold" style="font-size:2.25rem; margin-bottom:0.5rem; line-height:1.2;">${product.name}</h1>
          
          <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem; padding-bottom:1.5rem; border-bottom:1px solid hsl(var(--border));">
            <div style="display:flex;">${getStarHtml(product.rating)}</div>
            <span style="font-weight:500; font-size:0.875rem;">${product.rating} Rating</span>
            <span class="text-muted-foreground" style="font-size:0.875rem;">(${product.reviewCount} Reviews)</span>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <div style="display:flex; align-items:flex-end; gap:0.75rem; margin-bottom:0.5rem;">
              <span class="font-bold text-primary" style="font-size: 2.25rem; line-height:1;">₹${product.price}</span>
              ${product.mrp > product.price ? `<span class="text-muted-foreground" style="text-decoration:line-through; font-size:1.25rem; line-height:1.2;">₹${product.mrp}</span>` : ''}
            </div>
            <p class="text-muted-foreground" style="font-size:0.875rem;">Inclusive of all taxes</p>
          </div>

          <p style="opacity:0.8; margin-bottom:2rem; line-height:1.6;">${product.description}</p>

          <div style="display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:2rem;">
            <div class="qty-selector">
              <button class="qty-btn" onclick="updatePdQty(-1)" style="font-size:1.25rem;">-</button>
              <input type="number" class="qty-input" id="pd-qty" value="1" readonly style="font-size:1.125rem;">
              <button class="qty-btn" onclick="updatePdQty(1)" style="font-size:1.25rem;">+</button>
            </div>
            <button class="btn btn-primary" style="flex:1; height:3.5rem; font-size:1.125rem;" onclick="addToCart('${product.id}', parseInt(document.getElementById('pd-qty').value, 10))" ${!product.inStock ? 'disabled' : ''}>Add to Cart</button>
            <button class="btn btn-outline" style="width:3.5rem; height:3.5rem; padding:0; border-color:${isInWishlist(product.id)?'hsl(var(--secondary))':'hsl(var(--border))'}; background:${isInWishlist(product.id)?'hsla(var(--secondary), 0.1)':'transparent'}" onclick="toggleWishlist('${product.id}'); this.style.borderColor=isInWishlist('${product.id}')?'hsl(var(--secondary))':'hsl(var(--border))'; this.style.background=isInWishlist('${product.id}')?'hsla(var(--secondary), 0.1)':'transparent'; this.innerHTML=isInWishlist('${product.id}')?'<svg width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'currentColor\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' class=\\'text-secondary\\'><path d=\\'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\\'/></svg>':'<svg width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'><path d=\\'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\\'/></svg>';">
              ${isInWishlist(product.id) ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>' : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>'}
            </button>
          </div>

          <div class="grid grid-3 gap-4 py-6 border-t border-b mb-8 text-center" style="font-size:0.75rem; font-weight:500; color:hsl(var(--muted-foreground));">
            <div class="flex flex-col items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> 100% Authentic</div>
            <div class="flex flex-col items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v5c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg> Fast Delivery</div>
            <div class="flex flex-col items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg> Easy Returns</div>
          </div>

          <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem; color:hsl(var(--muted-foreground)); cursor:pointer;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg> Share this product
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="border rounded-xl overflow-hidden bg-card" style="margin-bottom: 5rem;">
        <div style="display:flex; border-bottom:1px solid hsl(var(--border)); background:hsl(var(--muted));">
          <button class="pd-tab-btn active" style="flex:1; padding:1rem; font-weight:700; background:hsl(var(--background)); color:hsl(var(--primary)); border-bottom:2px solid hsl(var(--primary));" onclick="switchPdTab('desc', this)">Description</button>
          <button class="pd-tab-btn" style="flex:1; padding:1rem; font-weight:700; color:hsl(var(--muted-foreground));" onclick="switchPdTab('specs', this)">Specifications</button>
          <button class="pd-tab-btn" style="flex:1; padding:1rem; font-weight:700; color:hsl(var(--muted-foreground));" onclick="switchPdTab('benefits', this)">Benefits</button>
        </div>
        <div style="padding: 2.5rem;">
          <div id="tab-desc" class="tab-pane active prose prose-orange">
            <h3 class="font-serif">About this Item</h3>
            <p>${product.description}</p>
            <p>DivineCart ensures that every item is ethically sourced and crafted by skilled artisans, maintaining the purity required for your sacred rituals.</p>
          </div>
          <div id="tab-specs" class="tab-pane">
            <div class="grid grid-2 sm-grid-1 gap-4">
              ${Object.entries(product.specifications).map(([k,v]) => `
                <div style="display:flex; justify-content:space-between; padding:0.5rem 0; border-bottom:1px solid hsl(var(--border));">
                  <span class="text-muted-foreground" style="font-weight:500;">${k}</span>
                  <span style="font-weight:500;">${v}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div id="tab-benefits" class="tab-pane">
            <ul style="list-style:none; margin:0;">
              ${product.benefits.map(b => `
                <li style="display:flex; align-items:flex-start; gap:0.75rem; margin-bottom:0.75rem;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary" style="margin-top:0.125rem;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span style="opacity:0.8;">${b}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>

      ${related.length > 0 ? `
        <div>
          <h2 class="section-title font-serif text-center" style="margin-bottom:2.5rem;">Similar Products</h2>
          <div class="grid grid-4 sm-grid-1 md-grid-2 gap-6">
            ${related.map(getProductCardHtml).join('')}
          </div>
        </div>
      ` : ''}

    </div>
  `;

  window.updatePdQty = function(delta) {
    const el = document.getElementById('pd-qty');
    el.value = Math.max(1, parseInt(el.value, 10) + delta);
  }

  window.switchPdTab = function(id, btn) {
    document.querySelectorAll('.pd-tab-btn').forEach(b => {
      b.style.background = '';
      b.style.color = 'hsl(var(--muted-foreground))';
      b.style.borderBottom = '';
    });
    btn.style.background = 'hsl(var(--background))';
    btn.style.color = 'hsl(var(--primary))';
    btn.style.borderBottom = '2px solid hsl(var(--primary))';

    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.getElementById(`tab-${id}`).classList.add('active');
  }
}

function renderCategory(slug) {
  const cat = CATEGORIES.find(c => c.slug === slug);
  if(!cat) return renderNotFound();

  const prods = PRODUCTS.filter(p => p.category === slug);

  contentArea.innerHTML = `
    <div style="position:relative; height:20rem; display:flex; align-items:center; justify-content:center; overflow:hidden;">
      <div style="position:absolute; inset:0; background:rgba(0,0,0,0.5); z-index:10;"></div>
      <img src="${cat.image}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
      <div class="container relative text-center text-white" style="z-index:20;">
        <h1 class="font-serif font-bold" style="font-size:3rem; margin-bottom:1rem; text-shadow:0 2px 4px rgba(0,0,0,0.5);">${cat.name}</h1>
        <p style="font-size:1.125rem; opacity:0.9; max-width:42rem; margin:0 auto;">${cat.desc}</p>
      </div>
    </div>

    <div class="bg-muted py-4 border-b">
      <div class="container px-4 flex justify-center gap-2" style="font-size:0.875rem; color:hsl(var(--muted-foreground)); flex-wrap:wrap;">
        <a href="#/" class="hover-text-primary">Home</a>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        <a href="#/shop" class="hover-text-primary">Shop</a>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        <span class="text-foreground" style="font-weight:500;">${cat.name}</span>
      </div>
    </div>

    <div class="container px-4 py-12">
      <p class="text-muted-foreground" style="margin-bottom:2rem;">${prods.length} Products Found</p>
      ${prods.length > 0 ? `
        <div class="grid grid-4 sm-grid-1 md-grid-2 gap-6">
          ${prods.map(getProductCardHtml).join('')}
        </div>
      ` : `
        <div class="text-center py-20 bg-muted rounded-xl">
          <h3 class="font-serif text-2xl mb-2">No products in this category yet</h3>
          <p class="text-muted-foreground">Check back later for new arrivals.</p>
        </div>
      `}
    </div>
  `;
}

function renderAbout() {
  contentArea.innerHTML = `
    <section class="hero" style="height:50vh; min-height:400px;">
      <div class="hero-overlay" style="background:rgba(0,0,0,0.5);"></div>
      <img src="https://picsum.photos/seed/abouthero/1920/1080" class="hero-bg">
      <div class="hero-content" style="max-width:48rem;">
        <h1 class="font-serif font-bold" style="font-size:3.75rem; margin-bottom:1.5rem;">Our Spiritual Journey</h1>
        <p style="font-size:1.25rem; opacity:0.9;">Dedicated to bringing authentic, pure, and premium puja essentials to devotees worldwide.</p>
      </div>
    </section>

    <section class="py-20 container px-4">
      <div style="max-width:56rem; margin:0 auto; text-align:center;">
        <h2 class="font-serif font-bold text-primary" style="font-size:2.25rem; margin-bottom:2rem;">Namaste. Welcome to DivineCart.</h2>
        <p class="text-muted-foreground" style="font-size:1.125rem; margin-bottom:1.5rem; line-height:1.8;">
          Founded with a vision to make authentic spiritual products accessible to every household, DivineCart is more than an e-commerce platform. It is a commitment to preserving our sacred traditions. We noticed that finding pure ingredients for daily puja—unadulterated kumkum, chemical-free agarbatti, and traditional brassware—was becoming increasingly difficult.
        </p>
        <p class="text-muted-foreground" style="font-size:1.125rem; line-height:1.8;">
          We partner directly with traditional artisans, local gaushalas, and authentic manufacturers across India to source products that meet the highest standards of purity prescribed in our Shastras.
        </p>
      </div>
    </section>

    <section class="py-20 bg-muted border-t border-b">
      <div class="container px-4">
        <h2 class="font-serif font-bold text-center" style="font-size:2.25rem; margin-bottom:4rem;">Our Core Values</h2>
        <div class="grid grid-4 sm-grid-1 md-grid-2 gap-8">
          ${[
            { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>', title: 'Absolute Purity', desc: 'No synthetic chemicals. Only 100% natural, satvik ingredients for your deities.' },
            { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>', title: 'Eco-Conscious', desc: 'Sustainable packaging and environmentally responsible sourcing practices.' },
            { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.1 2.1 0 0 0 0 2.97l7.92 7.92A2.1 2.1 0 0 0 19.93 18.8l-7.92-7.92"/></svg>', title: 'Artisan Support', desc: 'Empowering local craftspeople and traditional incense makers across India.' },
            { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>', title: 'Devotional Quality', desc: 'Every product is handled with the utmost respect and devotion before it reaches you.' }
          ].map(v => `
            <div class="bg-card p-8 rounded-xl border text-center shadow-sm" style="transition:box-shadow 0.3s;" onmouseover="this.classList.add('shadow-md')" onmouseout="this.classList.remove('shadow-md')">
              <div class="bg-muted text-primary rounded-full flex items-center justify-center mx-auto" style="width:4rem; height:4rem; margin-bottom:1.5rem;">
                ${v.icon}
              </div>
              <h3 class="font-serif font-bold text-xl mb-3">${v.title}</h3>
              <p class="text-muted-foreground text-sm leading-relaxed">${v.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="py-20 container px-4">
      <div style="background:hsl(var(--secondary)); border-radius:var(--radius-xl); overflow:hidden; display:flex; flex-wrap:wrap; color:white;">
        <div style="flex:1 1 50%; min-width:300px; padding:3rem; display:flex; flex-direction:column; justify-content:center;">
          <h2 class="font-serif font-bold" style="font-size:2.25rem; margin-bottom:1.5rem;">Crafted with Devotion</h2>
          <p style="opacity:0.9; line-height:1.8; font-size:1.125rem; margin-bottom:2rem;">
            Every incense stick is hand-rolled, every diya is carefully cast, and every cotton wick is woven with devotion. We believe the purity of the materials used in prayer directly influences the spiritual experience.
          </p>
          <div style="width:6rem; height:0.25rem; background:rgba(255,255,255,0.3); border-radius:9999px;"></div>
        </div>
        <div style="flex:1 1 50%; min-width:300px; position:relative; min-height:300px;">
          <img src="https://picsum.photos/seed/aboutartisan/800/800" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  const faqs = [
    { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries. International shipping costs are calculated at checkout based on weight and destination." },
    { q: "How do I know the products are authentic?", a: "We source directly from trusted artisans and traditional manufacturers. Our agarbattis use natural essential oils, and our kumkum is free from lead and harmful chemicals." },
    { q: "What is your return policy?", a: "We offer a hassle-free 7-day return policy for unused products in their original packaging. For broken or defective items, we provide immediate replacements." },
    { q: "Is Cash on Delivery available?", a: "Yes, COD is available for all orders within India above ₹299 and below ₹5000." },
    { q: "How can I track my order?", a: "Once dispatched, you will receive a tracking link via email and SMS. You can also track it from your 'My Orders' section if you have an account." },
  ];

  contentArea.innerHTML = `
    <div class="bg-muted py-16 border-b">
      <div class="container px-4 text-center">
        <h1 class="font-serif font-bold" style="font-size:3rem; margin-bottom:1rem;">Contact Us</h1>
        <p class="text-muted-foreground text-lg" style="max-width:42rem; margin:0 auto;">Have questions about our products, your order, or bulk purchases? We're here to assist you with devotion.</p>
      </div>
    </div>

    <div class="container px-4 py-16">
      <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">
        
        <!-- Info Cards -->
        <div style="display:flex; flex-direction:column; gap:1.5rem;">
          <div class="bg-card border rounded-xl p-6 shadow-sm" style="display:flex; gap:1rem;">
            <div class="bg-muted text-primary rounded-full flex items-center justify-center shrink-0" style="width:3rem; height:3rem;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-1">Phone & WhatsApp</h3>
              <p class="text-muted-foreground text-sm mb-2">Mon-Sat, 9:00 AM to 6:00 PM (IST)</p>
              <p class="font-medium text-primary text-lg">0120 120 120</p>
            </div>
          </div>
          <div class="bg-card border rounded-xl p-6 shadow-sm" style="display:flex; gap:1rem;">
            <div class="bg-muted text-secondary rounded-full flex items-center justify-center shrink-0" style="width:3rem; height:3rem;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-1">Email Us</h3>
              <p class="text-muted-foreground text-sm mb-2">We'll respond within 24 hours.</p>
              <p class="font-medium">DivineCart@gmail.com</p>
            </div>
          </div>
          <div class="bg-card border rounded-xl p-6 shadow-sm" style="display:flex; gap:1rem;">
            <div style="background:#dbeafe; color:#2563eb; width:3rem; height:3rem; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-1">Head Office</h3>
              <p class="text-muted-foreground text-sm leading-relaxed">
                108 Devotion Street,<br>
                Spiritual Park, Sector 62,<br>
                New Delhi 110001, India
              </p>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="bg-card border rounded-xl p-8 shadow-sm lg-col-span-2">
          <h2 class="font-serif font-bold text-2xl mb-6 flex gap-2 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Send a Message
          </h2>
          <form onsubmit="event.preventDefault(); const btn = this.querySelector('button'); btn.textContent='Sending...'; btn.disabled=true; setTimeout(()=>{btn.textContent='Send Message'; btn.disabled=false; showToast('Message sent successfully! We will get back to you soon.'); this.reset();},1500);">
            <div class="grid grid-2 sm-grid-1 gap-6" style="margin-bottom:1.5rem;">
              <div class="form-group"><label class="form-label">Your Name</label><input type="text" class="input" placeholder="John Doe" required></div>
              <div class="form-group"><label class="form-label">Email Address</label><input type="email" class="input" placeholder="john@example.com" required></div>
              <div class="form-group"><label class="form-label">Phone Number</label><input type="tel" class="input" placeholder="Your contact number"></div>
              <div class="form-group"><label class="form-label">Subject</label><input type="text" class="input" placeholder="Order inquiry, bulk purchase, etc." required></div>
            </div>
            <div class="form-group" style="margin-bottom:1.5rem;">
              <label class="form-label">Message</label>
              <textarea class="input" placeholder="How can we help you?" style="min-height:150px; resize:none;" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
          </form>
        </div>

      </div>
    </div>

    <div class="bg-muted py-20 border-t">
      <div class="container px-4">
        <div class="grid grid-2 sm-grid-1 gap-12 items-start">
          <div>
            <h2 class="font-serif font-bold text-3xl mb-8">Frequently Asked Questions</h2>
            <div class="bg-card border rounded-xl px-6">
              ${faqs.map((f, i) => `
                <div class="accordion-item" onclick="this.classList.toggle('active')">
                  <div class="accordion-header" style="cursor:pointer;">
                    ${f.q}
                    <svg class="accordion-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                  <div class="accordion-content">${f.a}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="bg-card border rounded-xl overflow-hidden shadow-sm relative" style="height:500px; display:flex; align-items:center; justify-content:center;">
            <div style="position:absolute; inset:0; background:#e5e7eb;"></div>
            <img src="https://picsum.photos/seed/map/800/600" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.5; filter:grayscale(1);">
            <div class="bg-white border rounded-xl shadow-md p-6 text-center relative z-10" style="max-width:300px;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary mx-auto mb-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <h3 class="font-bold text-lg">DivineCart HQ</h3>
              <p class="text-muted-foreground text-sm mt-2">New Delhi, India</p>
              <p class="text-muted-foreground" style="font-size:0.75rem; margin-top:0.25rem;">(Interactive map unavailable in mockup)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderBlog() {
  const featured = BLOG_POSTS[0];
  const regular = BLOG_POSTS.slice(1);

  contentArea.innerHTML = `
    <div class="bg-muted py-12 border-b">
      <div class="container px-4 text-center" style="max-width:48rem;">
        <h1 class="font-serif font-bold" style="font-size:3rem; margin-bottom:1rem;">Spiritual Insights</h1>
        <p class="text-muted-foreground text-lg">Explore our articles on Hindu festivals, daily puja guides, temple traditions, and the significance of spiritual practices.</p>
      </div>
    </div>

    <div class="container px-4 py-16">
      ${featured ? `
        <a href="#/blog/${featured.slug}" class="bg-card border rounded-xl overflow-hidden shadow-sm block group" style="margin-bottom:4rem; transition:box-shadow 0.3s;" onmouseover="this.classList.add('shadow-md')" onmouseout="this.classList.remove('shadow-md')">
          <div class="grid grid-2 sm-grid-1">
            <div style="position:relative; aspect-ratio:4/3; overflow:hidden;">
              <img src="${featured.image}" class="w-full h-full object-cover transition-transform group-hover-scale" style="transition:transform 0.7s;">
              <div style="position:absolute; top:1rem; left:1rem; background:hsl(var(--primary)); color:white; font-size:0.75rem; font-weight:700; padding:0.25rem 0.75rem; border-radius:9999px;">${featured.category}</div>
            </div>
            <div style="padding:2rem 3rem; display:flex; flex-direction:column; justify-content:center;">
              <div style="display:flex; gap:1rem; color:hsl(var(--muted-foreground)); font-size:0.875rem; margin-bottom:1rem;">
                <span class="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg> ${featured.date}</span>
                <span class="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${featured.readTime}</span>
              </div>
              <h2 class="font-serif font-bold transition-colors group-hover-text-primary" style="font-size:2.25rem; margin-bottom:1rem; line-height:1.2;">${featured.title}</h2>
              <p class="text-muted-foreground text-lg mb-8" style="display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">${featured.excerpt}</p>
              <div class="text-primary font-bold" style="text-transform:uppercase; letter-spacing:0.05em; font-size:0.875rem; display:flex; align-items:center; gap:0.5rem; margin-top:auto;">
                Read Article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </a>
      ` : ''}

      <div class="grid grid-3 sm-grid-1 md-grid-2 gap-8">
        ${regular.map(p => `
          <a href="#/blog/${p.slug}" class="bg-card border rounded-xl overflow-hidden shadow-sm group flex flex-col" style="transition:box-shadow 0.3s;" onmouseover="this.classList.add('shadow-md')" onmouseout="this.classList.remove('shadow-md')">
            <div style="position:relative; aspect-ratio:16/10; overflow:hidden;">
              <img src="${p.image}" class="w-full h-full object-cover transition-transform group-hover-scale" style="transition:transform 0.5s;">
              <div style="position:absolute; top:0.75rem; left:0.75rem; background:hsl(var(--secondary)); color:white; font-size:0.75rem; font-weight:700; padding:0.25rem 0.5rem; border-radius:0.25rem;">${p.category}</div>
            </div>
            <div style="padding:1.5rem; display:flex; flex-direction:column; flex:1;">
              <div style="display:flex; justify-content:space-between; color:hsl(var(--muted-foreground)); font-size:0.75rem; margin-bottom:0.75rem;">
                <span class="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg> ${p.date}</span>
                <span class="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${p.readTime}</span>
              </div>
              <h3 class="font-serif font-bold transition-colors group-hover-text-primary" style="font-size:1.25rem; margin-bottom:0.75rem; line-height:1.2;">${p.title}</h3>
              <p class="text-muted-foreground text-sm mb-6" style="flex:1; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">${p.excerpt}</p>
              <div class="text-primary font-bold text-sm mt-auto flex items-center gap-2">
                Read More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
  const st = document.createElement('style');
  st.innerHTML = `.group-hover-text-primary { transition: color 0.2s; } .group:hover .group-hover-text-primary { color: hsl(var(--primary)); } .group:hover .group-hover-scale { transform: scale(1.05) !important; }`;
  contentArea.appendChild(st);
}

function renderBlogPost(slug) {
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if(!post) return renderNotFound();

  const related = BLOG_POSTS.filter(p => p.id !== post.id).slice(0,3);

  contentArea.innerHTML = `
    <div style="position:relative; height:40vh; min-height:400px; width:100%; background:hsl(var(--muted));">
      <div style="position:absolute; inset:0; background:rgba(0,0,0,0.6); z-index:10;"></div>
      <img src="${post.image}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
      <div class="container relative" style="z-index:20; height:100%; display:flex; align-items:center; justify-content:center;">
        <div style="max-width:48rem; text-align:center; color:white;">
          <div style="display:inline-block; background:hsl(var(--primary)); color:white; font-size:0.75rem; font-weight:700; padding:0.25rem 0.75rem; border-radius:9999px; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:1.5rem;">${post.category}</div>
          <h1 class="font-serif font-bold" style="font-size:3rem; margin-bottom:1.5rem; text-shadow:0 2px 4px rgba(0,0,0,0.5); line-height:1.2;">${post.title}</h1>
          <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:1.5rem; font-size:0.875rem; opacity:0.9;">
            <span class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${post.author}</span>
            <span class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg> ${post.date}</span>
            <span class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${post.readTime}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 py-16 flex gap-12" style="flex-wrap:wrap;">
      <article style="flex:1; min-width:300px; max-width:48rem; margin:0 auto;">
        <a href="#/blog" class="text-primary font-bold flex items-center gap-2" style="font-size:0.875rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:2rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg> Back to all articles
        </a>
        
        <div class="prose prose-orange">
          <p class="text-muted-foreground italic" style="font-size:1.25rem; line-height:1.6; margin-bottom:2rem;">${post.excerpt}</p>
          ${post.content.split('\n\n').map(para => `<p style="margin-bottom:1.5rem; line-height:1.8;">${para}</p>`).join('')}
        </div>

        <div style="margin-top:3rem; padding:1.5rem 0; border-top:1px solid hsl(var(--border)); border-bottom:1px solid hsl(var(--border)); display:flex; justify-content:space-between; align-items:center;">
          <span class="font-serif font-bold text-lg">Share this article:</span>
          <div style="display:flex; gap:1rem;">
            <button class="bg-muted hover-bg-primary rounded-full transition-colors" style="width:2.5rem; height:2.5rem; display:flex; align-items:center; justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></button>
            <button class="bg-muted hover-bg-primary rounded-full transition-colors" style="width:2.5rem; height:2.5rem; display:flex; align-items:center; justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></button>
          </div>
        </div>
      </article>

      <aside style="width:100%; max-width:20rem; flex-shrink:0;">
        <div class="bg-muted border rounded-xl p-6 text-center" style="margin-bottom:2.5rem;">
          <h3 class="font-serif font-bold text-xl mb-4">Subscribe to our Newsletter</h3>
          <p class="text-muted-foreground text-sm mb-4">Get the latest spiritual articles and product updates directly in your inbox.</p>
          <input type="email" class="input" placeholder="Your email address" style="margin-bottom:0.75rem; background:white;">
          <button class="btn btn-primary w-full" onclick="showToast('Subscribed!', 'success')">Subscribe</button>
        </div>

        <div>
          <h3 class="font-serif font-bold text-xl mb-6 border-b pb-2">Related Articles</h3>
          <div style="display:flex; flex-direction:column; gap:1.5rem;">
            ${related.map(r => `
              <a href="#/blog/${r.slug}" class="group flex gap-4 items-center">
                <div style="width:5rem; height:5rem; border-radius:var(--radius); overflow:hidden; flex-shrink:0;">
                  <img src="${r.image}" class="w-full h-full object-cover transition-transform group-hover-scale" style="transition:transform 0.3s;">
                </div>
                <div>
                  <h4 class="font-serif font-bold text-sm mb-1 line-clamp-2 transition-colors group-hover-text-primary" style="display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${r.title}</h4>
                  <span class="text-muted-foreground" style="font-size:0.75rem;">${r.date}</span>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </aside>
    </div>
  `;
  const st = document.createElement('style');
  st.innerHTML = `.hover-bg-primary:hover { background: hsl(var(--primary)) !important; color: white !important; } .group-hover-text-primary { transition: color 0.2s; } .group:hover .group-hover-text-primary { color: hsl(var(--primary)); } .group:hover .group-hover-scale { transform: scale(1.1) !important; }`;
  contentArea.appendChild(st);
}

function renderCart() {
  if(cart.length === 0) {
    contentArea.innerHTML = `
      <div class="container px-4 py-20 text-center" style="min-height:60vh; display:flex; flex-direction:column; align-items:center; justify-content:center;">
        <div class="bg-muted text-muted-foreground rounded-full flex items-center justify-center" style="width:6rem; height:6rem; margin-bottom:1.5rem;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </div>
        <h2 class="font-serif font-bold text-3xl mb-4">Your cart is empty</h2>
        <p class="text-muted-foreground mb-8" style="max-width:28rem;">Looks like you haven't added any spiritual items to your cart yet. Explore our collections to find what you need.</p>
        <a href="#/shop" class="btn btn-primary btn-lg">Start Shopping</a>
      </div>
    `;
    return;
  }

  const subtotal = cart.reduce((s,i) => s + (i.product.price * i.quantity), 0);
  const totalItems = cart.reduce((s,i) => s + i.quantity, 0);
  const shipping = subtotal > 499 ? 0 : 50;
  let discount = window.appliedCoupon === 'DIVINE10' ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + shipping - discount;

  contentArea.innerHTML = `
    <div class="bg-muted py-8 border-b">
      <div class="container px-4">
        <h1 class="font-serif font-bold text-3xl">Shopping Cart</h1>
        <p class="text-muted-foreground mt-2">${totalItems} items in your cart</p>
      </div>
    </div>

    <div class="container px-4 py-12 flex gap-10" style="flex-wrap:wrap;">
      
      <div style="flex:1; min-width:300px;">
        <div style="display:flex; flex-direction:column; gap:1.5rem;">
          ${cart.map(item => `
            <div class="bg-card border rounded-xl p-4 flex gap-4 relative">
              <a href="#/product/${item.product.id}" style="flex-shrink:0;">
                <div class="bg-muted rounded-md overflow-hidden" style="width:6rem; height:6rem;">
                  <img src="${item.product.images[0]}" class="w-full h-full object-cover">
                </div>
              </a>
              <div style="flex:1; display:flex; flex-direction:column;">
                <a href="#/product/${item.product.id}" class="hover-text-primary transition-colors font-serif font-bold text-lg mb-1" style="padding-right:2rem; line-height:1.2;">${item.product.name}</a>
                <div class="text-muted-foreground text-sm mb-4">Unit Price: ₹${item.product.price}</div>
                <div style="margin-top:auto; display:flex; align-items:center; justify-content:space-between;">
                  <div class="qty-selector" style="transform:scale(0.9); transform-origin:left center;">
                    <button class="qty-btn" onclick="updateCartQty('${item.product.id}', ${item.quantity - 1})">-</button>
                    <input type="number" class="qty-input" value="${item.quantity}" readonly>
                    <button class="qty-btn" onclick="updateCartQty('${item.product.id}', ${item.quantity + 1})">+</button>
                  </div>
                  <span class="font-bold text-primary">₹${item.product.price * item.quantity}</span>
                </div>
              </div>
              <button onclick="removeFromCart('${item.product.id}')" style="position:absolute; top:1rem; right:1rem; color:hsl(var(--muted-foreground)); padding:0.5rem;" onmouseover="this.style.color='hsl(var(--destructive))'" onmouseout="this.style.color='hsl(var(--muted-foreground))'" title="Remove item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="width:100%; max-width:24rem; flex-shrink:0;">
        <div class="bg-card border rounded-xl p-6" style="position:sticky; top:7rem;">
          <h3 class="font-serif font-bold text-xl border-b pb-4 mb-6">Order Summary</h3>
          
          <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.875rem; margin-bottom:1.5rem;">
            <div style="display:flex; justify-content:space-between;">
              <span class="text-muted-foreground">Subtotal (${totalItems} items)</span>
              <span class="font-medium">₹${subtotal}</span>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span class="text-muted-foreground">Shipping</span>
              ${shipping === 0 ? '<span class="font-medium text-green-600">Free</span>' : `<span class="font-medium">₹${shipping}</span>`}
            </div>
            ${shipping > 0 ? `
              <div style="background:hsla(var(--primary), 0.1); color:hsl(var(--primary)); text-align:center; padding:0.5rem; border-radius:var(--radius); font-size:0.75rem;">
                Add ₹${500 - subtotal} more for free shipping
              </div>
            ` : ''}
            ${discount > 0 ? `
              <div style="display:flex; justify-content:space-between; color:hsl(var(--primary));">
                <span>Coupon (DIVINE10)</span>
                <span class="font-medium">-₹${discount}</span>
              </div>
            ` : ''}
          </div>

          <form onsubmit="event.preventDefault(); window.appliedCoupon=document.getElementById('coupon').value; router();" style="display:flex; gap:0.5rem; margin-bottom:1.5rem;">
            <input type="text" id="coupon" class="input" placeholder="Coupon Code" value="${window.appliedCoupon||''}">
            <button type="submit" class="btn btn-outline">Apply</button>
          </form>

          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid hsl(var(--border)); padding-top:1rem; margin-bottom:1.5rem;">
            <span class="font-bold text-lg">Total</span>
            <span class="font-bold text-2xl text-primary">₹${total}</span>
          </div>

          <a href="#/checkout" class="btn btn-primary btn-lg w-full mb-3">Proceed to Checkout <svg style="margin-left:0.5rem;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
          <a href="#/shop" class="btn btn-outline w-full" style="height:3rem;">Continue Shopping</a>
        </div>
      </div>

    </div>
  `;
}

function renderCheckout() {
  if(cart.length === 0) {
    window.location.hash = '#/cart';
    return;
  }
  
  const subtotal = cart.reduce((s,i) => s + (i.product.price * i.quantity), 0);
  const totalItems = cart.reduce((s,i) => s + i.quantity, 0);
  const shipping = subtotal > 499 ? 0 : 50;
  let discount = window.appliedCoupon === 'DIVINE10' ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + shipping - discount;

  contentArea.innerHTML = `
    <div class="bg-muted py-6 border-b">
      <div class="container px-4 text-center">
        <h1 class="font-serif font-bold text-2xl flex items-center justify-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> Secure Checkout
        </h1>
      </div>
    </div>

    <div class="container px-4 py-10">
      <form onsubmit="event.preventDefault(); processCheckout(this);" class="flex gap-10" style="flex-wrap:wrap;">
        
        <div style="flex:1; min-width:300px; display:flex; flex-direction:column; gap:2.5rem;">
          
          <section class="bg-card border rounded-xl p-6">
            <h2 class="font-serif font-bold text-xl border-b pb-2 mb-6">1. Contact & Shipping Information</h2>
            <div class="grid grid-2 sm-grid-1 gap-4">
              <div class="form-group"><label class="form-label">First Name</label><input type="text" class="input" required></div>
              <div class="form-group"><label class="form-label">Last Name</label><input type="text" class="input" required></div>
              <div class="form-group"><label class="form-label">Email Address</label><input type="email" class="input" required></div>
              <div class="form-group"><label class="form-label">Phone Number</label><input type="tel" class="input" required></div>
              <div class="form-group" style="grid-column: 1/-1;"><label class="form-label">Address</label><input type="text" class="input" required></div>
              <div class="form-group"><label class="form-label">City</label><input type="text" class="input" required></div>
              <div class="form-group"><label class="form-label">State</label><input type="text" class="input" required></div>
              <div class="form-group"><label class="form-label">Pincode</label><input type="text" class="input" required></div>
              
              <div style="grid-column: 1/-1; display:flex; align-items:center; gap:0.5rem; margin-top:0.5rem;">
                <input type="checkbox" id="same-billing" checked>
                <label for="same-billing" style="font-size:0.875rem; cursor:pointer;">Billing address is same as shipping</label>
              </div>
            </div>
          </section>

          <section class="bg-card border rounded-xl p-6">
            <h2 class="font-serif font-bold text-xl border-b pb-2 mb-6">2. Payment Method</h2>
            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              
              <label class="border rounded-md p-3" style="display:flex; align-items:center; gap:0.75rem; cursor:pointer;" onclick="document.querySelectorAll('.pay-option').forEach(el=>el.style.background=''); this.style.background='hsl(var(--muted))'">
                <input type="radio" name="payment" value="upi" checked>
                <span style="font-weight:500; flex:1;">UPI (GPay, PhonePe, Paytm)</span>
                <span style="font-size:0.75rem; font-weight:700; color:hsl(var(--primary));">UPI</span>
              </label>
              
              <label class="border rounded-md p-3 pay-option" style="display:flex; align-items:center; gap:0.75rem; cursor:pointer;" onclick="document.querySelectorAll('.pay-option').forEach(el=>el.style.background=''); this.style.background='hsl(var(--muted))'">
                <input type="radio" name="payment" value="card">
                <span style="font-weight:500; flex:1;">Credit / Debit Card</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-muted-foreground"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </label>

              <label class="border rounded-md p-3 pay-option" style="display:flex; align-items:center; gap:0.75rem; cursor:pointer;" onclick="document.querySelectorAll('.pay-option').forEach(el=>el.style.background=''); this.style.background='hsl(var(--muted))'">
                <input type="radio" name="payment" value="netbanking">
                <span style="font-weight:500; flex:1;">Net Banking</span>
              </label>

              <label class="border rounded-md p-3 pay-option" style="display:flex; align-items:center; gap:0.75rem; cursor:pointer;" onclick="document.querySelectorAll('.pay-option').forEach(el=>el.style.background=''); this.style.background='hsl(var(--muted))'">
                <input type="radio" name="payment" value="cod">
                <span style="font-weight:500; flex:1;">Cash on Delivery</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-muted-foreground"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
              </label>

            </div>
          </section>

        </div>

        <!-- Sidebar -->
        <div style="width:100%; max-width:24rem; flex-shrink:0;">
          <div class="bg-card border rounded-xl p-6" style="position:sticky; top:7rem;">
            <h3 class="font-serif font-bold text-xl border-b pb-4 mb-6">Order Summary</h3>
            
            <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem; max-height:40vh; overflow-y:auto; padding-right:0.5rem;">
              ${cart.map(item => `
                <div style="display:flex; gap:0.75rem; font-size:0.875rem;">
                  <div class="border rounded bg-muted" style="width:4rem; height:4rem; flex-shrink:0; position:relative;">
                    <img src="${item.product.images[0]}" class="w-full h-full object-cover rounded">
                    <span style="position:absolute; top:-0.5rem; right:-0.5rem; background:hsl(var(--primary)); color:white; font-size:0.625rem; font-weight:700; width:1.25rem; height:1.25rem; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white;">${item.quantity}</span>
                  </div>
                  <div style="flex:1;">
                    <p class="font-medium" style="display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${item.product.name}</p>
                    <p class="text-muted-foreground">₹${item.product.price} x ${item.quantity}</p>
                  </div>
                  <div class="font-bold">₹${item.product.price * item.quantity}</div>
                </div>
              `).join('')}
            </div>

            <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.875rem; border-top:1px solid hsl(var(--border)); padding-top:1rem; margin-bottom:1.5rem;">
              <div style="display:flex; justify-content:space-between;">
                <span class="text-muted-foreground">Subtotal</span>
                <span class="font-medium">₹${subtotal}</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span class="text-muted-foreground">Shipping</span>
                ${shipping === 0 ? '<span class="font-medium text-green-600">Free</span>' : `<span class="font-medium">₹${shipping}</span>`}
              </div>
              ${discount > 0 ? `
                <div style="display:flex; justify-content:space-between; color:hsl(var(--primary));">
                  <span>Coupon</span>
                  <span class="font-medium">-₹${discount}</span>
                </div>
              ` : ''}
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid hsl(var(--border)); padding-top:1rem; margin-bottom:1.5rem;">
              <span class="font-bold text-lg">Total</span>
              <span class="font-bold text-2xl text-primary">₹${total}</span>
            </div>

            <button type="submit" id="checkout-btn" class="btn btn-primary btn-lg w-full mb-4">Pay ₹${total}</button>
            <p class="text-center text-muted-foreground flex items-center justify-center gap-1" style="font-size:0.75rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> 100% Safe & Secure Payments
            </p>

          </div>
        </div>

      </form>
    </div>
  `;

  window.processCheckout = function(form) {
    const btn = document.getElementById('checkout-btn');
    btn.innerHTML = 'Processing Securely...';
    btn.disabled = true;
    setTimeout(() => {
      clearCart();
      window.appliedCoupon = null;
      window.location.hash = '#/order-confirmation';
      showToast('Order placed successfully!');
    }, 2000);
  }
}

function renderWishlist() {
  if(wishlist.length === 0) {
    contentArea.innerHTML = `
      <div class="container px-4 py-20 text-center" style="min-height:60vh; display:flex; flex-direction:column; align-items:center; justify-content:center;">
        <div class="bg-muted text-muted-foreground rounded-full flex items-center justify-center" style="width:6rem; height:6rem; margin-bottom:1.5rem;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="m2 2 20 20"/></svg>
        </div>
        <h2 class="font-serif font-bold text-3xl mb-4">Your wishlist is empty</h2>
        <p class="text-muted-foreground mb-8" style="max-width:28rem;">Save your favorite spiritual items here and buy them whenever you're ready.</p>
        <a href="#/shop" class="btn btn-primary btn-lg">Explore Products</a>
      </div>
    `;
    return;
  }

  contentArea.innerHTML = `
    <div class="bg-muted py-8 border-b">
      <div class="container px-4">
        <h1 class="font-serif font-bold text-3xl">My Wishlist</h1>
        <p class="text-muted-foreground mt-2">${wishlist.length} items saved</p>
      </div>
    </div>
    <div class="container px-4 py-12">
      <div class="grid grid-4 lg-grid-3 md-grid-2 sm-grid-1 gap-6">
        ${wishlist.map(p => `
          <div class="bg-card border rounded-xl overflow-hidden group shadow-sm">
            <div style="position:relative; aspect-ratio:1/1; background:hsl(var(--muted));">
              <img src="${p.images[0]}" class="w-full h-full object-cover">
              <button onclick="toggleWishlist('${p.id}')" style="position:absolute; top:0.75rem; right:0.75rem; padding:0.5rem; background:rgba(255,255,255,0.9); border-radius:50%; color:hsl(var(--muted-foreground)); transition:all 0.2s;" onmouseover="this.style.color='hsl(var(--destructive))'; this.style.background='white';" onmouseout="this.style.color='hsl(var(--muted-foreground))'; this.style.background='rgba(255,255,255,0.9)';">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
              </button>
              ${!p.inStock ? `
                <div style="position:absolute; inset:0; background:rgba(0,0,0,0.4); display:flex; items-center; justify-content:center;">
                  <span style="background:white; padding:0.5rem 1rem; font-weight:700; font-size:0.875rem; border-radius:var(--radius);">Out of Stock</span>
                </div>
              ` : ''}
            </div>
            <div class="p-4">
              <a href="#/product/${p.id}"><h3 class="font-serif font-bold text-lg mb-2 hover-text-primary" style="display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden;">${p.name}</h3></a>
              <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1rem;">
                <span class="font-bold text-lg text-primary">₹${p.price}</span>
                ${p.mrp > p.price ? `<span class="text-sm text-muted-foreground" style="text-decoration:line-through;">₹${p.mrp}</span>` : ''}
              </div>
              <button class="btn btn-primary w-full" onclick="addToCart('${p.id}'); toggleWishlist('${p.id}');" ${!p.inStock ? 'disabled' : ''}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg> Move to Cart
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderLogin() {
  contentArea.innerHTML = `
    <div style="min-height:80vh; display:flex; align-items:center; justify-content:center; padding:3rem 1rem; background:hsla(var(--muted), 0.3);">
      <div class="bg-card border rounded-2xl shadow-md overflow-hidden" style="width:100%; max-width:28rem;">
        
        <div style="display:flex; border-bottom:1px solid hsl(var(--border));">
          <button id="tab-login" class="font-serif font-bold text-lg py-4" style="flex:1; background:transparent; color:hsl(var(--primary)); border-bottom:2px solid hsl(var(--primary));" onclick="switchAuthTab('login')">Sign In</button>
          <button id="tab-register" class="font-serif font-bold text-lg py-4 text-muted-foreground" style="flex:1; background:transparent; border-bottom:2px solid transparent;" onclick="switchAuthTab('register')">Register</button>
        </div>

        <div style="padding:2rem;">
          
          <!-- Login Form -->
          <div id="form-login" style="display:block;">
            <div style="text-align:center; margin-bottom:1.5rem;">
              <h2 class="font-serif font-bold text-2xl">Welcome Back</h2>
              <p class="text-muted-foreground text-sm mt-1">Sign in to access your orders and wishlist.</p>
            </div>
            <form onsubmit="event.preventDefault(); showToast('Logged in successfully!'); window.location.hash='#/';">
              <div class="form-group"><label class="form-label">Email</label><input type="email" class="input" required></div>
              <div class="form-group">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <label class="form-label" style="margin:0;">Password</label>
                  <span class="text-primary" style="font-size:0.75rem; cursor:pointer;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Forgot password?</span>
                </div>
                <input type="password" class="input" style="margin-top:0.5rem;" required>
              </div>
              <button type="submit" class="btn btn-primary btn-lg w-full" style="margin-top:1.5rem;">Sign In</button>
            </form>
          </div>

          <!-- Register Form -->
          <div id="form-register" style="display:none;">
            <div style="text-align:center; margin-bottom:1.5rem;">
              <h2 class="font-serif font-bold text-2xl">Create Account</h2>
              <p class="text-muted-foreground text-sm mt-1">Join our spiritual community today.</p>
            </div>
            <form onsubmit="event.preventDefault(); showToast('Account created successfully!'); window.location.hash='#/';">
              <div class="form-group"><label class="form-label">Full Name</label><input type="text" class="input" required></div>
              <div class="form-group"><label class="form-label">Email</label><input type="email" class="input" required></div>
              <div class="form-group"><label class="form-label">Phone Number</label><input type="tel" class="input"></div>
              <div class="form-group"><label class="form-label">Password</label><input type="password" class="input" required></div>
              <button type="submit" class="btn btn-primary btn-lg w-full" style="margin-top:1.5rem;">Create Account</button>
            </form>
          </div>

          <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid hsl(var(--border)); text-align:center; font-size:0.875rem; color:hsl(var(--muted-foreground));">
            Or continue as a <a href="#/checkout" class="text-primary font-bold hover-underline" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Guest Checkout</a>
          </div>

        </div>
      </div>
    </div>
  `;

  window.switchAuthTab = function(tab) {
    document.getElementById('tab-login').style.color = tab==='login' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))';
    document.getElementById('tab-login').style.borderBottomColor = tab==='login' ? 'hsl(var(--primary))' : 'transparent';
    document.getElementById('form-login').style.display = tab==='login' ? 'block' : 'none';

    document.getElementById('tab-register').style.color = tab==='register' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))';
    document.getElementById('tab-register').style.borderBottomColor = tab==='register' ? 'hsl(var(--primary))' : 'transparent';
    document.getElementById('form-register').style.display = tab==='register' ? 'block' : 'none';
  }
}

function renderOrderConfirmation() {
  const orderNumber = `ORD-${Math.floor(Math.random() * 900000) + 100000}`;
  const date = new Date();
  date.setDate(date.getDate() + 3);
  const dateString = date.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });

  contentArea.innerHTML = `
    <div style="min-height:70vh; display:flex; align-items:center; justify-content:center; padding:5rem 1rem;">
      <div class="bg-card border rounded-2xl p-8 text-center shadow-lg" style="width:100%; max-width:28rem;">
        
        <div style="background:#dcfce7; color:#16a34a; width:5rem; height:5rem; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        
        <h1 class="font-serif font-bold text-3xl mb-2">Order Confirmed!</h1>
        <p class="text-muted-foreground mb-8">Thank you for your devotion. Your order has been placed successfully.</p>
        
        <div class="bg-muted rounded-xl p-6 text-left mb-8">
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid hsl(var(--border)); padding-bottom:1rem; margin-bottom:1rem;">
            <span class="text-muted-foreground">Order Number</span>
            <span class="font-bold">${orderNumber}</span>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="text-muted-foreground flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" x2="7.5" y1="9.4" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg> Est. Delivery
            </span>
            <span class="font-bold text-primary">${dateString}</span>
          </div>
        </div>
        
        <p class="text-muted-foreground text-sm mb-8">We've sent a confirmation email to your registered address with the order details and tracking link.</p>

        <a href="#/shop" class="btn btn-primary btn-lg w-full mb-4">Continue Shopping <svg style="margin-left:0.5rem;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
        <a href="#/" class="btn btn-outline w-full" style="height:3rem;">Return to Home</a>
      </div>
    </div>
  `;
}

function renderNotFound() {
  contentArea.innerHTML = `
    <div class="container py-20 text-center" style="min-height:60vh; display:flex; flex-direction:column; align-items:center; justify-content:center;">
      <h2 class="font-serif font-bold text-4xl mb-4 text-primary">404</h2>
      <h3 class="font-serif text-2xl mb-4">Page not found</h3>
      <p class="text-muted-foreground mb-8">The path you are looking for does not exist.</p>
      <a href="#/" class="btn btn-primary">Return to Home</a>
    </div>
  `;
}

// ============================================================
// 3. ROUTER
// ============================================================
function router() {
  scrollToTop();
  const hash = window.location.hash || '#/';
  const url = new URL(hash.slice(1), window.location.origin);
  const path = url.pathname;
  const params = url.searchParams;

  if(path === '/' || path === '') renderHome();
  else if(path === '/shop') renderShop(params);
  else if(path.startsWith('/product/')) renderProduct(path.split('/')[2]);
  else if(path.startsWith('/category/')) renderCategory(path.split('/')[2]);
  else if(path === '/about') renderAbout();
  else if(path === '/contact') renderContact();
  else if(path === '/blog') renderBlog();
  else if(path.startsWith('/blog/')) renderBlogPost(path.split('/')[2]);
  else if(path === '/cart') renderCart();
  else if(path === '/checkout') renderCheckout();
  else if(path === '/wishlist') renderWishlist();
  else if(path === '/login') renderLogin();
  else if(path === '/order-confirmation') renderOrderConfirmation();
  else renderNotFound();
}

window.addEventListener('hashchange', router);

// ============================================================
// 6. INIT
// ============================================================
function init() {
  updateHeaderBadges();
  
  // Populate categories in header and footer
  const headerCatDropdown = document.getElementById('desktop-category-dropdown');
  const footerCats = document.getElementById('footer-categories');
  const mobileCatList = document.getElementById('mobile-category-list');
  
  CATEGORIES.forEach(c => {
    headerCatDropdown.innerHTML += `<a href="#/category/${c.slug}">${c.name}</a>`;
    footerCats.innerHTML += `<li><a href="#/category/${c.slug}">${c.name}</a></li>`;
    mobileCatList.innerHTML += `<a href="#/category/${c.slug}" onclick="closeMobileMenu()" style="display:flex; justify-content:space-between; align-items:center; padding: 0.5rem 1rem;">${c.name} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-muted-foreground"><path d="m9 18 6-6-6-6"/></svg></a>`;
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu events
  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('active');
  });

  // Search forms
  document.getElementById('desktop-search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const val = document.getElementById('desktop-search-input').value;
    if(val) window.location.hash = `#/shop?search=${encodeURIComponent(val)}`;
  });
  document.getElementById('mobile-search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const val = document.getElementById('mobile-search-input').value;
    if(val) {
      closeMobileMenu();
      window.location.hash = `#/shop?search=${encodeURIComponent(val)}`;
    }
  });

  // Header sticky logic
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (window.scrollY > 0) {
      header.style.boxShadow = '0 1px 2px 0 rgba(139, 90, 43, 0.05)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Close modals on clicking overlay or pressing Escape
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-overlay') || e.target.classList.contains('mobile-menu-overlay')) {
      closeModal();
      closeMobileMenu();
    }
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      closeModal();
      closeMobileMenu();
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  init();
  router();
});
