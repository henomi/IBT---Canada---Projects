let menus = [];


async function getMenus() {
    try {
    const response = await fetch('./data/menus.json');
     menus = await response.json();
    displayMenu(menus);

    } catch (error) {
        console.error('Error fetching menus:', error);
    }
}





function savecart(){
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartDisplay();
}

cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(menuId) {
    const menuItem = menus.find(menu => menu.id === menuId);

    if (!menuItem) return;

    const existingItem = cart.find(item => item.id === menuId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...menuItem, quantity: 1 });
    }
    savecart();
    
    
};


const container = document.querySelector('.menu');
function displayMenu(menus) {
menus.forEach(menu => {
    container.innerHTML += `
    <div class="card">
                <img src="${menu.image}" alt="${menu.name}" class="card-img">
                <h3>${menu.name}</h3>
                <p>${menu.description ? menu.description.substring(0, 30) + '...' : 'No description available.'}</p>
                <p class="price">Price: ${menu.price} ETB</p>
                <button class="cart-button" onclick="addToCart(${menu.id})">Add to Cart</button>
            </div>`;});}





function filterMenu() {
    const searchInputForm = document.getElementById("search-input");
    return menus.filter(menu => menu.name.trim().toLowerCase().includes(searchInputForm.value.toLowerCase()));


}

function displayMenu(filteredMenus) {
    const menuContainer = document.querySelector('.menu');
    menuContainer.innerHTML = '';
    filteredMenus.forEach(menu => {
        menuContainer.innerHTML += `
        <div class="card">
                <img src="${menu.image}" alt="${menu.name}" class="card-img">
                <h3>${menu.name}</h3>
                <p>${menu.description ? menu.description.substring(0, 30) + '...' : 'No description available.'}</p>
                <p class="price">Price: ${menu.price} ETB</p>
                <button class="cart-button" onclick="addToCart(${menu.id})">Add to Cart</button>
            </div>`;});
            
}

const searchFormInput = document.getElementById("search-form");
searchFormInput.addEventListener("input", () => {
    displayMenu(filterMenu());
});


searchFormInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
    }

});

function displayCart() {
    const cartItem = document.getElementById('cart-items');
    cartItem.innerHTML = '';
    cart.forEach(menu => {
        cartItem.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-details">
                    <div class="cart-item-info">
                        <img src="${menu.image}" alt="${menu.name}" class="cart-item-img">
                    </div>
                    <div>
                        <h4>${menu.name}</h4>
                        <p>Price: ${menu.price} ETB</p>
                    </div>
                    
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-button" onclick="decreaseQuantity(${menu.id})">-</button>
                                <span class="quantity">${menu.quantity}</span>
                            <button class="quantity-button" onclick="increaseQuantity(${menu.id})">+</button>
                        </div>
                    <button class="remove-button" onclick="removeFromCart(${menu.id})">Remove</button> 
                </div>
            </div>`;});

            // calculate total price
            const total = totalPrice();
            document.getElementById('total-price').textContent = `Total Price: ${total} ETB`;

}

const cartButton = document.getElementById('cart-button');
cartButton.addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'flex';
    savecart();
});

function updateCartDisplay(){
    const cartCount = document.getElementById('cart-count');
    const totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
    cartCount.textContent = totalQuantity;
}

function removeFromCart(menuId) {
    cart = cart.filter(menu => menu.id !== menuId);
    localStorage.setItem('cart', JSON.stringify(cart));
    savecart();
}
const cartModal = document.getElementById('cart-modal');
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

function increaseQuantity(menuId) {
    const menuItem = cart.find(menu => menu.id === menuId);
    if (menuItem) {
        menuItem.quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        
    }
    savecart();
}

function decreaseQuantity(menuId) {
    const menuItem = cart.find(menu => menu.id === menuId);
    if (menuItem) {
        menuItem.quantity--;
        if (menuItem.quantity <= 0) {
            removeFromCart(menuId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            
        }
    }
    savecart();
}


function totalPrice (){{
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);}
    
}

    


const detailMenuModal = document.getElementById('detail-menu-modal');
function showMenuDetails(menuId) {
    const menuItem = menus.find(menu => menu.id === menuId);
    if (menuItem) {
        document.getElementById('detail-menu-name').textContent = menuItem.name;
        document.getElementById('detail-menu-description').textContent = menuItem.description;
        document.getElementById('detail-menu-price').textContent = `${menuItem.price} ETB`;
        document.getElementById('detail-menu-image').src = menuItem.image;
        detailMenuModal.style.display = 'flex';
    }
}

addEventListener('click', (e) => {
    if (e.target.classList.contains('card-img')) {
        const menuId = parseInt(e.target.closest('.card').querySelector('.cart-button').getAttribute('onclick').match(/\d+/)[0]);
        showMenuDetails(menuId);
    }
});

const closeMenu = document.getElementById('detail-menu-modal');
closeMenu.addEventListener('click', (e) => {
    if (e.target === closeMenu) {
        detailMenuModal.style.display = 'none';
    }
});

const checkoutModal = document.getElementById('checkout-modal');
function checkOut() {
    checkoutModal.style.display = 'flex';}

    addEventListener('click', (e) => {
        if (e.target.classList.contains('checkout-button')) {
            const cartModal = document.getElementById('cart-modal');
            cartModal.style.display = 'none';
            checkOut();
        }
    });

const checkoutInfo = document.getElementById('checkout-info');
checkoutInfo.innerHTML = `
<div class="checkout-info">
    <form action="" id="checkout-form">
        <div class="checkout-info-form">
            
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" placeholder="Enter your address">
        </div>
        <button class="submit-button">Submit</button>
    </form>
</div>`;

addEventListener('click', (e) => {
    if (e.target.classList.contains('submit-button')) {
        const successModal = document.getElementById('success-modal');
        successModal.style.display = 'flex';
        const checkoutModal = document.getElementById('checkout-modal');
        checkoutModal.style.display = 'none';
    }});

addEventListener('click', (e) => {
    if (e.target.classList.contains('continue-button')) {
        const cartModal = document.getElementById('success-modal');
        cartModal.style.display = 'none';
        
    }
});


getMenus();
savecart();