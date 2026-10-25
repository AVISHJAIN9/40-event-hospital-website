// 1. DATA: Define the health packages and lab tests
const products = [
    { id: 1, name: "Basic Health Checkup", description: "Includes Blood Glucose, CBC, Lipid Profile. Essential annual screening.", price: 99.99 },
    { id: 2, name: "Advanced Cardiac Package", description: "Detailed Cholesterol panel, ECG, Homocysteine. Focus on heart health.", price: 199.50 },
    { id: 3, name: "Vitamin D Test", description: "Measures 25-hydroxy Vitamin D levels. Crucial for bone and immune health.", price: 45.00 },
    { id: 4, name: "Full Body Screening", description: "Complete package covering liver, kidney, thyroid, and vital organs.", price: 299.00 },
    { id: 5, name: "Thyroid Profile (T3, T4, TSH)", description: "Checks functioning of the thyroid gland.", price: 65.75 }
];

// 2. STATE: Initialize the cart
let cart = [];

// 3. CORE FUNCTION: Render the product cards on the page
function renderProducts(productList = products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear previous items

    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.id = `product-${product.id}`;
        
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price.toFixed(2)}</div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(card);
    });
}

// 4. CART FUNCTIONALITY: Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Find if the item is already in the cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity
        } else {
            cart.push({ ...product, quantity: 1 }); // Add new item
        }

        updateCartSummary();
        console.log(`${product.name} added to cart!`);
    }
}

// 5. CART FUNCTIONALITY: Update total and count display
function updateCartSummary() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    document.getElementById('cartCount').textContent = cartCount;
    document.getElementById('cartTotal').textContent = `$${cartTotal.toFixed(2)}`;
}

// 6. SEARCH FUNCTIONALITY: Filter products based on search input
function filterProducts(filterValue) {
    const filter = filterValue.toUpperCase().trim();
    
    // Filter the products array
    const filteredList = products.filter(product => 
        product.name.toUpperCase().includes(filter) || 
        product.description.toUpperCase().includes(filter)
    );
    
    // Re-render the products with the filtered list
    renderProducts(filteredList);
}

// 7. CHECKOUT (Example Action)
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out!");
        return;
    }
    const finalTotal = document.getElementById('cartTotal').textContent;
    alert(`Thank you for your order! Your total is ${finalTotal}. Proceeding to payment...`);
    
    // Reset the cart and display
    cart = []; 
    updateCartSummary();
    renderProducts(); 
}


// Initial call to display all products when the page loads
window.onload = () => {
    renderProducts();
    updateCartSummary();
};