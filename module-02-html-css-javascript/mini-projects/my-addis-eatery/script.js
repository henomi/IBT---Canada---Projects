const menus = [
    {
        id: 1,
        name: "Doro Wat",
        price: 240,
        image: "./assets/doro-wat.jpg",
        spicy: true,
        category: "main",
        description: "Doro Wat is a traditional Ethiopian chicken stew made with chicken, onions, garlic, ginger, and a blend of spices. It is typically served with injera, a type of Ethiopian flatbread."
    },
    {
        id: 2,
        name: "Shiro",
        price: 120,
        image: "./assets/shiro.jpg",
        spicy: false,
        category: "fast-food",
        description: "Shiro is a popular Ethiopian dish made from ground chickpeas or lentils, cooked with spices and served as a thick stew. It is often enjoyed with injera or bread."    
    },
    {
        id: 3,
        name: "Kitfo",
        price: 320,
        image: "./assets/kitfo.jpg",
        spicy: true,
        category: "main",
        description: "Kitfo is a traditional Ethiopian dish made from finely chopped beef, seasoned with spices and served with injera."
    },
    {
        id: 4,
        name: "firfir",
        price: 180,
        image: "./assets/firfr.jpg",
        spicy: true,
        category: "fast-food",
        description: "Firfir is a traditional Ethiopian dish made from a blend of spices and served as a thick stew."
    },
    {
        id: 5,
        name: "Tibs",
        price: 280,
        image: "./assets/tibs.jpg",
        spicy: false,
        category: "main",
        description: "Tibs is a traditional Ethiopian dish made from seasoned meat, typically beef or lamb, and served with injera."
    },
    {
        id: 6,
        name: "Gored Gored",
        price: 300,
        image: "./assets/gored-gored.jpg",
        spicy: true,
        category: "main",
        description: "Gored Gored is a traditional Ethiopian dish made from a blend of spices and served as a thick stew."
    },
    {
        id: 7,
        name: "Dulet",
        price: 200,
        image: "./assets/dulet.jpg",
        spicy: false,
        category: "main",
        description: "Dulet is a traditional Ethiopian dish made from a blend of spices and served as a thick stew."
    },
    {
        id: 8,
        name: "Chechebsa be kibe",
        price: 150,
        image: "./assets/chechebsa.jpg",
        spicy: true,
        category: "main",
        description: "Chechebsa be kibe is a traditional Ethiopian dish made from a blend of spices and served as a thick stew."
    },
    {
        id: 9,
        name: "beyaynetu",
        price: 350,
        image: "./assets/beyaynet.jpg",
        spicy: true,
        category: "main && fast-food",
        description: "Beyaynetu is a traditional Ethiopian dish made from a blend of spices and served as a thick stew."
    },
    {
        id: 10,
        name: "Injera",
        price: 100,
        image: "./assets/injera.jpg",
        spicy: false,
        category: "extra",
        description: "Injera is a traditional Ethiopian flatbread made from teff flour and served with various stews."
    }
];

function savecart(){
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartDisplay();

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

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-count');
    cartItems.innerHTML = cart.map(item = `<div class="cart-item"> <h3>${item.name}</h3> <p>Price: ${item.price} ETB</p> <div class="quantity-controls"> <button class="quantity-button">-</button> <span class="quantity">${item.quantity}</span> <button class="quantity-button">+</button> </div> <button class="remove-button">Remove</button> </div>`).join('');
};

const container = document.querySelector('.menu');

menus.forEach(menu => {
    container.innerHTML += `
    <div class="card">
                <img src="${menu.image}" alt="${menu.name}" class="card-img">
                <h3>${menu.name}</h3>
                <p>${menu.description ? menu.description.substring(0, 30) + '...' : 'No description available.'}</p>
                <p class="price">Price: ${menu.price} ETB</p>
                <button class="cart-button" onclick="addToCart(${menu.id})">Add to Cart</button>
            </div>`;});


function filterMenu(category) {
    const filteredMenus = category === 'all' ? menus : menus.filter(menu => menu.category === category);
    container.innerHTML = '';
    filteredMenus.forEach(menu => {
        container.innerHTML += `
        <div class="card">
                    <img src="${menu.image}" alt="${menu.name}" class="card-img">
                    <h3>${menu.name}</h3>
                    <p>${menu.description}</p>
                    <p class="price">Price: ${menu.price} ETB</p>
                    <button class="cart-button" onclick="addToCart(${menu.id})">Add to Cart</button>
                </div>`;});
}

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
}

const cartButton = document.getElementById('cart-button');
cartButton.addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'flex';
    displayCart();
});

function removeFromCart(menuId) {
    cart = cart.filter(menu => menu.id !== menuId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    displayCart();
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
        updateCartDisplay();
        displayCart();
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
            updateCartDisplay();
            displayCart();
        }
    }
    savecart();
}


function totalPrice (){
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    
}
const total = totalPrice();
    document.getElementById('total-price').textContent = `Total Price: ${total} ETB`;
    // savecart();


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

