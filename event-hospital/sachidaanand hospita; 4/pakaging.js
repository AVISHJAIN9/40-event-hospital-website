// 1. DATA: Define the health packages and optional add-ons
const products = [
    { id: 1, type: 'package', name: "Basic Health Checkup", front_desc: "Essential annual screening of key vitals, liver, and kidney function.", price: 99.99, tests: ["Blood Glucose (F)", "Complete Blood Count (CBC)", "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Lipid Profile"] },
    { id: 2, type: 'package', name: "Advanced Cardiac Package", front_desc: "Detailed health assessment focused on heart and circulation.", price: 199.50, tests: ["ECG (Electrocardiogram)", "Echo (Echocardiogram)", "Homocysteine", "hs-CRP (Inflammation)", "Cholesterol Panel (detailed)"] },
    { id: 3, type: 'package', name: "Vitamin D & B12 Panel", front_desc: "Crucial for bone health, energy, and nerve function.", price: 75.00, tests: ["25-OH Vitamin D", "Vitamin B12", "Serum Calcium"] },
    { id: 4, type: 'package', name: "Full Body Screening (Comprehensive)", front_desc: "The most comprehensive check for all major organs and systems.", price: 349.00, tests: ["Thyroid Profile (T3, T4, TSH)", "Iron Studies", "Urine Routine & Microscopy", "70+ Parameters", "Physician Consultation"] },
    { id: 5, type: 'package', name: "Diabetic Management Panel", front_desc: "Monitor and manage diabetes and related metabolic health effectively.", price: 110.00, tests: ["HbA1c (3-month average)", "Glucose (Fasting & PP)", "C-Peptide", "Microalbuminuria"] },
    { id: 6, type: 'package', name: "Senior Citizen Wellness (60+)", front_desc: "Specialized tests focusing on bone density, hormone balance, and chronic diseases for seniors.", price: 240.00, tests: ["Bone Mineral Density (Voucher)", "PSA / Hormone Panel", "ESR (Sedimentation Rate)", "Basic Eye Checkup (Voucher)", "55+ Parameters"] },
    { id: 7, type: 'package', name: "Child Health Package (5-15 yrs)", front_desc: "Routine wellness and growth checks for children and adolescents.", price: 145.00, tests: ["Pediatric Complete Blood Count", "Stool/Urine R/M", "Growth Hormones (Screen)", "Dietician Consultation (1 session)"] },
    { id: 8, type: 'package', name: "Executive Profile (Premium)", front_desc: "A luxury full-day health assessment with personalized, in-depth diagnostics and VIP service.", price: 550.00, tests: ["Tumour Markers", "Hepatitis B/C Screening", "90+ Advanced Parameters", "VIP Lounge Access"] }
];

const ADDONS_LIST = [
    { id: 101, type: 'addon', name: "Cervical Cancer Screen (HPV)", price: 85.00 },
    { id: 102, type: 'addon', name: "Full Body Vitamin Profile", price: 120.00 },
    { id: 103, type: 'addon', name: "Tumour Markers (PSA/CA-125)", price: 95.00 },
    { id: 104, type: 'addon', name: "Genetic Risk Analysis", price: 250.00 },
    { id: 105, type: 'addon', name: "Dietician Consult (Premium)", price: 40.00 }
];

// 2. STATE: Initialize the carts
let cart = []; // Stores all cart items (packages and add-ons)

// Utility function to find a product by ID and type
function findProduct(id, type) {
    if (type === 'package') {
        return products.find(p => p.id === id);
    } else if (type === 'addon') {
        return ADDONS_LIST.find(a => a.id === id);
    }
    return null;
}

// 3. CORE FUNCTION: Render the product cards on the page
function renderProducts(productList = products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; 

    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.id = `product-${product.id}`;
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-front">
                    <h3>${product.name}</h3>
                    <p>${product.front_desc}</p>
                    <div class="price">$${product.price.toFixed(2)}</div>
                    <button class="flip-btn" onclick="flipCard(${product.id}, event)"><i class="fas fa-sync-alt"></i> View Details</button>
                </div>
                <div class="card-face card-back">
                    <h3>Package Includes:</h3>
                    <ul>
                        ${product.tests.map(test => `<li><i class="fas fa-check-circle" style="color: ${test.includes('Voucher') ? 'var(--color-warning)' : 'var(--color-secondary)'}; margin-right: 5px;"></i>${test}</li>`).join('')}
                    </ul>

                    <div class="addon-list-container">
                        <h4>Optional Add-ons:</h4>
                        <ul class="addon-list">
                            ${ADDONS_LIST.map(addon => `
                                <li id="addon-${addon.id}">
                                    <span>${addon.name}</span>
                                    <span class="addon-price">+$${addon.price.toFixed(2)}</span>
                                    <button class="addon-btn" onclick="event.stopPropagation(); addItemToCart(${addon.id}, 'addon');">Add</button>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addItemToCart(${product.id}, 'package');">Add Package to Cart</button>
                    <button class="flip-btn back-flip" onclick="flipCard(${product.id}, event)"><i class="fas fa-arrow-left"></i> Back</button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(card);
    });

    if (productList.length === 0) {
        productsContainer.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #555; font-size: 1.2em;">
            No packages or tests found matching your search. Try a different keyword!
        </p>`;
    }
}

// Function to handle card flip
function flipCard(productId, event) {
    event.stopPropagation();
    const card = document.getElementById(`product-${productId}`);
    card.classList.toggle('flipped');
}


// 4. CART FUNCTIONALITY: Add item (package or add-on) to cart
function addItemToCart(id, type) {
    const itemData = findProduct(id, type);
    const uniqueId = `${type}-${id}`;
    
    if (itemData) {
        const existingItem = cart.find(item => item.uniqueId === uniqueId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ 
                ...itemData, 
                uniqueId: uniqueId,
                quantity: 1 
            });
        }
        
        updateCartDisplay();
        toggleCartSidebar(true); // Open sidebar on add
    }
}

// 5. CART FUNCTIONALITY: CRUD for Cart Sidebar

function updateItemQuantity(uniqueId, change) {
    const item = cart.find(i => i.uniqueId === uniqueId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeItem(uniqueId);
        }
        updateCartDisplay();
    }
}

function removeItem(uniqueId) {
    cart = cart.filter(i => i.uniqueId !== uniqueId);
    updateCartDisplay();
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty. Add a package or an add-on!</p>';
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        
        const subtotal = item.price * item.quantity;
        const typeLabel = item.type === 'addon' ? 'Add-on' : 'Package';

        itemElement.innerHTML = `
            <div class="cart-item-details">
                <strong>${item.name}</strong>
                <span>${typeLabel} - $${item.price.toFixed(2)} each</span>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateItemQuantity('${item.uniqueId}', -1)">-</button>
                <span class="item-quantity">${item.quantity}</span>
                <button class="qty-btn" onclick="updateItemQuantity('${item.uniqueId}', 1)">+</button>
                <button class="remove-btn" onclick="removeItem('${item.uniqueId}')"><i class="fas fa-trash"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}


// 6. CART FUNCTIONALITY: Update total and count display
function updateCartDisplay() {
    renderCartItems(); // Re-render the list in the sidebar
    
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    const grandTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    document.getElementById('cartCount').textContent = totalCount;
    document.getElementById('cartCountBadge').textContent = totalCount;
    document.getElementById('cartTotal').textContent = `$${grandTotal.toFixed(2)}`;
}

// 7. SIDEBAR FUNCTIONALITY (Toggle)
function toggleCartSidebar(open = false) {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');

    if (open === true || !sidebar.classList.contains('open')) {
        sidebar.classList.add('open');
        overlay.classList.add('open');
    } else {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    }
}

// 8. SEARCH FUNCTIONALITY: Filter products
function filterProducts(filterValue) {
    const filter = filterValue.toUpperCase().trim();
    
    const filteredList = products.filter(product => 
        product.name.toUpperCase().includes(filter) || 
        product.front_desc.toUpperCase().includes(filter) ||
        product.tests.join(' ').toUpperCase().includes(filter)
    );
    
    renderProducts(filteredList);
}

// 9. CHECKOUT (Example Action)
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out!");
        return;
    }
    
    let orderSummary = "--- Your Order ---\n";
    let totalPackages = 0;
    let totalAddons = 0;

    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        orderSummary += `${item.quantity} x ${item.name} (${item.type === 'addon' ? 'Add-on' : 'Package'}) - $${itemTotal}\n`;
        if (item.type === 'package') {
            totalPackages += item.price * item.quantity;
        } else {
            totalAddons += item.price * item.quantity;
        }
    });

    const finalTotal = document.getElementById('cartTotal').textContent;
    alert(`✅ Order Placed! \n\n${orderSummary}\n\nGrand Total: ${finalTotal}. \nProceeding to secure payment...`);
    
    // Reset the cart and display
    cart = []; 
    updateCartDisplay();
    toggleCartSidebar(false);
}


// 10. SCROLL EFFECTS (Parallax and Scroll-to-Top)

function handleScroll() {
    const heroImage = document.getElementById('heroImage');
    const scrollTop = window.scrollY;
    
    // Simple Parallax/Zoom effect on hero image (Vanilla JS)
    heroImage.style.transform = `scale(${1 + scrollTop / 1500})`;

    // Show/Hide Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initial setup on page load
window.onload = () => {
    renderProducts();
    updateCartDisplay();
    document.getElementById('scrollToPackages').addEventListener('click', () => {
        document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
    });
    window.addEventListener('scroll', handleScroll);
};