// Mobile Menu
const mobileMenuButton = document.getElementById("mobileMenuButton");
const navLinks = document.getElementById("navLinks");

// Search
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const categorySelect = document.getElementById("categorySelect");

// Products
const productCards = document.querySelectorAll(".product-card");
const noResultsMessage = document.getElementById("noResultsMessage");

// Cart
const cartCount = document.getElementById("cartCount");
const addCartButtons = document.querySelectorAll(".add-cart-button");

// Wishlist
const wishlistButtons = document.querySelectorAll(".wishlist-button");

// Toast
const toast = document.getElementById("toast");

let cartItems = 0;

// --------------------
// Mobile Menu
// --------------------

if (mobileMenuButton) {
  mobileMenuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// --------------------
// Product Search
// --------------------

function filterProducts() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const selectedCategory = categorySelect.value;

  let visibleProducts = 0;

  productCards.forEach((card) => {
    const productName = card.dataset.name.toLowerCase();
    const productCategory = card.dataset.category;

    const matchName = productName.includes(searchValue);

    const matchCategory =
      selectedCategory === "all" ||
      selectedCategory === productCategory;

    if (matchName && matchCategory) {
      card.style.display = "block";
      visibleProducts++;
    } else {
      card.style.display = "none";
    }
  });

  if (visibleProducts === 0) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }
}

if (searchButton) {
  searchButton.addEventListener("click", filterProducts);
}

if (searchInput) {
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      filterProducts();
    }
  });
}

if (categorySelect) {
  categorySelect.addEventListener("change", filterProducts);
}

// --------------------
// Add to Cart
// --------------------

addCartButtons.forEach((button) => {

  button.addEventListener("click", () => {

    cartItems++;

    cartCount.textContent = cartItems;

    const productName = button.dataset.product;

    showToast('${productName} added to cart');

  });

});

// --------------------
// Wishlist
// --------------------

wishlistButtons.forEach((button) => {

  button.addEventListener("click", () => {

    button.classList.toggle("active");

    const icon = button.querySelector("i");

    if (button.classList.contains("active")) {

      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");

      showToast("Added to Wishlist");

    } else {

      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");

      showToast("Removed from Wishlist");

    }

  });

});

// --------------------
// Toast Function
// --------------------

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2000);

}

// --------------------
// Close Mobile Menu
// --------------------

document.querySelectorAll("#navLinks a").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("show");

  });

});