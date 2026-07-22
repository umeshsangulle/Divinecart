/* =========================================
   DIVINEKART
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. SELECT ELEMENTS
========================================= */

const searchToggle =
    document.querySelector(".search-toggle");

const searchOverlay =
    document.querySelector(".search-overlay");

const closeSearch =
    document.querySelector(".close-search");

const searchInput =
    document.querySelector("#searchInput");

const searchButton =
    document.querySelector("#searchButton");

const mobileMenuButton =
    document.querySelector(".mobile-menu-button");

const mobileNav =
    document.querySelector(".mobile-nav");

const cartCount =
    document.querySelector(".cart-count");

const wishlistCount =
    document.querySelector(".wishlist-count");

const cartToast =
    document.querySelector(".cart-toast");


/* =========================================
   2. CART DATA
========================================= */

let cartItems = 0;


/* =========================================
   3. WISHLIST DATA
========================================= */

let wishlistItems = 0;


/* =========================================
   4. OPEN SEARCH
========================================= */

if (searchToggle) {

    searchToggle.addEventListener(
        "click",
        () => {

            searchOverlay.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

            setTimeout(
                () => {

                    searchInput.focus();

                },
                200
            );

        }
    );

}


/* =========================================
   5. CLOSE SEARCH
========================================= */

if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        closeSearchOverlay
    );

}


function closeSearchOverlay() {

    searchOverlay.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


/* =========================================
   6. CLOSE SEARCH WHEN CLICKING OUTSIDE
========================================= */

if (searchOverlay) {

    searchOverlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                searchOverlay
            ) {

                closeSearchOverlay();

            }

        }
    );

}


/* =========================================
   7. SEARCH FUNCTION
========================================= */

if (searchButton) {

    searchButton.addEventListener(
        "click",
        performSearch
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key ===
                "Enter"
            ) {

                performSearch();

            }

        }
    );

}


function performSearch() {

    const searchValue =
        searchInput.value.trim();


    if (searchValue === "") {

        alert(
            "Please enter something to search."
        );

        return;

    }


    alert(
        `You searched for: ${searchValue}`
    );

}


/* =========================================
   8. SEARCH SUGGESTIONS
========================================= */

const suggestionButtons =
    document.querySelectorAll(
        ".search-suggestions button"
    );


suggestionButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                searchInput.value =
                    button.textContent;

                searchInput.focus();

            }
        );

    }
);


/* =========================================
   9. MOBILE MENU
========================================= */

if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            mobileNav.classList.toggle(
                "active"
            );

        }
    );

}


/* =========================================
   10. CLOSE MOBILE MENU
========================================= */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-nav a"
    );


mobileLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove(
                    "active"
                );

            }
        );

    }
);


/* =========================================
   11. ADD TO CART
========================================= */

const addCartButtons =
    document.querySelectorAll(
        ".add-cart"
    );


addCartButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const productName =
                    button.dataset.product;

                const productPrice =
                    button.dataset.price;


                cartItems++;


                cartCount.textContent =
                    cartItems;


                showCartToast(
                    `${productName} added to cart`
                );


                button.innerHTML =
                    `
                    Added
                    <i class="fa-solid fa-check"></i>
                    `;


                button.style.background =
                    "var(--terracotta)";

                button.style.color =
                    "white";


                setTimeout(
                    () => {

                        button.innerHTML =
                            `
                            Add
                            <i class="fa-solid fa-plus"></i>
                            `;

                        button.style.background =
                            "";

                        button.style.color =
                            "";

                    },
                    1500
                );

            }
        );

    }
);


/* =========================================
   12. CART TOAST
========================================= */

function showCartToast(
    message
) {

    const toastText =
        cartToast.querySelector(
            "span"
        );


    toastText.textContent =
        message;


    cartToast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            cartToast.classList.remove(
                "show"
            );

        },
        2500
    );

}


/* =========================================
   13. WISHLIST
========================================= */

const wishlistButtons =
    document.querySelectorAll(
        ".wishlist-button"
    );


wishlistButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const icon =
                    button.querySelector(
                        "i"
                    );


                const isActive =
                    button.classList.contains(
                        "active"
                    );


                if (!isActive) {

                    button.classList.add(
                        "active"
                    );

                    icon.classList.remove(
                        "fa-regular"
                    );

                    icon.classList.add(
                        "fa-solid"
                    );


                    wishlistItems++;


                } else {

                    button.classList.remove(
                        "active"
                    );

                    icon.classList.remove(
                        "fa-solid"
                    );

                    icon.classList.add(
                        "fa-regular"
                    );


                    wishlistItems--;

                }


                wishlistCount.textContent =
                    wishlistItems;

            }
        );

    }
);


/* =========================================
   14. NEWSLETTER
========================================= */

const newsletterForm =
    document.querySelector(
        ".newsletter-form"
    );


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const emailInput =
                newsletterForm.querySelector(
                    "input"
                );


            if (
                emailInput.value.trim()
                !== ""
            ) {

                alert(
                    "Thank you for subscribing to DivineKart!"
                );


                emailInput.value =
                    "";

            }

        }
    );

}


/* =========================================
   15. QUICK VIEW
========================================= */

const quickViewButtons =
    document.querySelectorAll(
        ".quick-view"
    );


quickViewButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                alert(
                    "Product Quick View will be connected to the Product Details page."
                );

            }
        );

    }
);


/* =========================================
   16. CART BUTTON
========================================= */

const cartButton =
    document.querySelector(
        ".cart-button"
    );


if (cartButton) {

    cartButton.addEventListener(
        "click",
        () => {

            alert(
                `Your cart currently has ${cartItems} item(s).`
            );

        }
    );

}


/* =========================================
   17. WISHLIST HEADER
========================================= */

const wishlistHeader =
    document.querySelector(
        ".wishlist-header"
    );


if (wishlistHeader) {

    wishlistHeader.addEventListener(
        "click",
        () => {

            alert(
                `Your wishlist currently has ${wishlistItems} item(s).`
            );

        }
    );

}


/* =========================================
   18. ACCOUNT BUTTON
========================================= */

const accountButton =
    document.querySelector(
        ".header-actions .icon-button:nth-child(3)"
    );


if (accountButton) {

    accountButton.addEventListener(
        "click",
        () => {

            alert(
                "The Account page will be connected later."
            );

        }
    );

}


/* =========================================
   19. ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key ===
            "Escape"
        ) {

            closeSearchOverlay();

            mobileNav.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================
   20. CONSOLE MESSAGE
========================================= */

console.log(
    "DivineKart frontend loaded successfully ✦"
);