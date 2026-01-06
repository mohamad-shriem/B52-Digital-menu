// --- 1. DEFAULT DATA ---
const DEFAULT_CONFIG = {
    gymName: "b52 Fitness Elites",
    primaryColor: "#3b82f6", // Blue-500
    secondaryColor: "#0f172a", // Slate-900
    accentColor: "#22c55e", // Green-500
    currency: "$",
    adminPassword: "123",
};

const DEFAULT_CATEGORIES = ["Pre-Workout", "Protein Shakes", "Healthy Meals", "Recovery", "Merch"];

// --- PASTE YOUR EXPORTED JSON DATA HERE TO MAKE IT PERMANENT ---
const DEFAULT_ITEMS = [
    {
        "id": 1,
        "name": "Espresso",
        "description": "Coffee blend",
        "price": 1.67,
        "category": "Hot Drinks",
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
        "tags": ["Strong", "Sugar Free", "Keto"],
        "calories": "9 kcal"
    },
    {
        "id": 2,
        "name": "Double espresso",
        "description": "Coffee blend",
        "price": 3.33,
        "category": "Hot Drinks",
        "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600",
        "tags": ["Strong", "Sugar Free", "Keto"],
        "calories": "18 kcal"
    },
    {
        "id": 3,
        "name": "Tea selection",
        "description": "Flavoured premium tea",
        "price": 2.00,
        "category": "Hot Drinks",
        "image": "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=600",
        "tags": ["Herbal", "Sugar Free", "Relaxing"],
        "calories": "2 kcal"
    },
    {
        "id": 4,
        "name": "Ginger honey",
        "description": "Ginger - honey - mint leaves - lemon slice",
        "price": 2.50,
        "category": "Hot Drinks",
        "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600",
        "tags": ["Immunity", "Healthy", "Caffeine Free"],
        "calories": "45 kcal"
    },
    {
        "id": 5,
        "name": "Cappuccino",
        "description": "Double espresso with zero fat milk and extra milk foam",
        "price": 4.44,
        "category": "Hot Drinks",
        "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600",
        "tags": ["Dairy", "Low Fat", "Classic"],
        "calories": "80 kcal"
    },
    {
        "id": 6,
        "name": "Nescafe",
        "description": "Instant coffee with zero fat Or Coffee mate Light",
        "price": 3.33,
        "category": "Hot Drinks",
        "image": "https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&q=80&w=600",
        "tags": ["Quick", "Dairy", "Light"],
        "calories": "60 kcal"
    },
    {
        "id": 7,
        "name": "Latte classic",
        "description": "Double espresso with milk and milk foam",
        "price": 4.44,
        "category": "Hot Drinks",
        "image": "https://images.unsplash.com/photo-1593443320739-77f74952dabd?auto=format&fit=crop&q=80&w=600",
        "tags": ["Dairy", "Creamy", "Popular"],
        "calories": "120 kcal"
    },
    {
        "id": 8,
        "name": "Americano",
        "description": "Double espresso and hot water",
        "price": 3.33,
        "category": "Hot Drinks",
        "image": "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=600",
        "tags": ["Sugar Free", "Strong", "Keto"],
        "calories": "15 kcal"
    },
    {
        "id": 9,
        "name": "Spanish latte",
        "description": "Double espresso with milk and milk foam and condensed milk",
        "price": 5.00,
        "category": "Hot Drinks",
        "image": "https://images.unsplash.com/photo-1626006847113-5735c03f4435?auto=format&fit=crop&q=80&w=600",
        "tags": ["Sweet", "Dairy", "Rich"],
        "calories": "210 kcal"
    },
    {
        "id": 10,
        "name": "Latte flavored",
        "description": "Double espresso with milk and milk foam zero sugar flavour",
        "price": 5.00,
        "category": "Hot Drinks",
        "image": "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=600",
        "tags": ["Dairy", "Zero Sugar", "Flavored"],
        "calories": "130 kcal"
    },
    {
        "id": 11,
        "name": "Iced Latte",
        "description": "Double espresso + milk + Ice",
        "price": 4.50,
        "category": "Cold Drinks",
        "image": "https://images.unsplash.com/photo-1517701604599-bb29b5c5090c?auto=format&fit=crop&q=80&w=600",
        "tags": ["Cold", "Dairy", "Refreshing"],
        "calories": "110 kcal"
    },
    {
        "id": 12,
        "name": "Iced Latte flavored",
        "description": "Double espresso + milk + Ice and zero sugar flavour",
        "price": 5.00,
        "category": "Cold Drinks",
        "image": "https://images.unsplash.com/photo-1642648439702-863a35489f66?auto=format&fit=crop&q=80&w=600",
        "tags": ["Cold", "Dairy", "Sugar Free"],
        "calories": "120 kcal"
    },
    {
        "id": 13,
        "name": "Iced Americano",
        "description": "Double espresso + water + ice",
        "price": 3.50,
        "category": "Cold Drinks",
        "image": "https://images.unsplash.com/photo-1525096172420-1a1362024707?auto=format&fit=crop&q=80&w=600",
        "tags": ["Cold", "Sugar Free", "Low Calorie"],
        "calories": "15 kcal"
    },
    {
        "id": 14,
        "name": "Iced Spanish latte",
        "description": "Double espresso + milk + ice + condensed milk",
        "price": 5.00,
        "category": "Cold Drinks",
        "image": "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=600",
        "tags": ["Cold", "Sweet", "Dairy"],
        "calories": "220 kcal"
    },
    {
        "id": 15,
        "name": "Classic Mojito",
        "description": "Mint leaves - lemon slices and juice - syrup sweetener zero sugar - ice - Sparkling water",
        "price": 4.44,
        "category": "Mojitos",
        "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
        "tags": ["Sugar Free", "Vegan", "Refreshing"],
        "calories": "40 kcal"
    },
    {
        "id": 16,
        "name": "Passion Fruit Mojito",
        "description": "Mint leaves - lemon slices and juice - syrup sweetener zero sugar - ice - Sparkling water - Passion fruit fresh",
        "price": 5.00,
        "category": "Mojitos",
        "image": "https://images.unsplash.com/photo-1536935338788-843bb6303668?auto=format&fit=crop&q=80&w=600",
        "tags": ["Fruity", "Vegan", "Sugar Free"],
        "calories": "65 kcal"
    },
    {
        "id": 17,
        "name": "Strawberry Mojito",
        "description": "Mint leaves - lemon slices and juice - syrup sweetener zero sugar - ice - Sparkling water - strawberry fresh",
        "price": 5.00,
        "category": "Mojitos",
        "image": "https://images.unsplash.com/photo-1601614902181-2292025624eb?auto=format&fit=crop&q=80&w=600",
        "tags": ["Fruity", "Vegan", "Sugar Free"],
        "calories": "60 kcal"
    },
    {
        "id": 18,
        "name": "Mixed berries Mojito",
        "description": "Mint leaves - lemon slices and juice - syrup sweetener zero sugar - ice - Sparkling water - mixed berries",
        "price": 6.11,
        "category": "Mojitos",
        "image": "https://images.unsplash.com/photo-1517093157502-3e284a29a071?auto=format&fit=crop&q=80&w=600",
        "tags": ["Antioxidants", "Vegan", "Sugar Free"],
        "calories": "70 kcal"
    },
    {
        "id": 19,
        "name": "Orange",
        "description": "Fresh orange",
        "price": 3.33,
        "category": "Fresh Juice",
        "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600",
        "tags": ["Vitamin C", "Vegan", "Natural"],
        "calories": "110 kcal"
    },
    {
        "id": 20,
        "name": "Mango",
        "description": "Fresh mango",
        "price": 4.00,
        "category": "Fresh Juice",
        "image": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80&w=600",
        "tags": ["Tropical", "Vegan", "Sweet"],
        "calories": "130 kcal"
    },
    {
        "id": 21,
        "name": "Carrots",
        "description": "Fresh carrots",
        "price": 3.33,
        "category": "Fresh Juice",
        "image": "https://images.unsplash.com/photo-1625937329935-29c8744570b7?auto=format&fit=crop&q=80&w=600",
        "tags": ["Detox", "Vegan", "Healthy"],
        "calories": "95 kcal"
    },
    {
        "id": 22,
        "name": "Carrots and orange",
        "description": "Fresh carrots and orange",
        "price": 3.50,
        "category": "Fresh Juice",
        "image": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=600",
        "tags": ["Immunity", "Vegan", "Vitamin C"],
        "calories": "100 kcal"
    },
    {
        "id": 23,
        "name": "Apples",
        "description": "Fresh apples",
        "price": 4.50,
        "category": "Fresh Juice",
        "image": "https://images.unsplash.com/photo-1611153722709-a78526569202?auto=format&fit=crop&q=80&w=600",
        "tags": ["Natural", "Vegan", "Refreshing"],
        "calories": "115 kcal"
    },
    {
        "id": 24,
        "name": "Apples and beetroot",
        "description": "Apples and Beetroot",
        "price": 4.50,
        "category": "Fresh Juice",
        "image": "https://images.unsplash.com/photo-1621919866141-841c6f39d899?auto=format&fit=crop&q=80&w=600",
        "tags": ["Detox", "Vegan", "Superfood"],
        "calories": "110 kcal"
    },
    {
        "id": 25,
        "name": "Banana milk",
        "description": "Banana and zero fat milk and honey",
        "price": 4.00,
        "category": "Fresh Juice",
        "image": "https://images.unsplash.com/photo-1577805947697-b984381e95e3?auto=format&fit=crop&q=80&w=600",
        "tags": ["Dairy", "Energy", "Sweet"],
        "calories": "180 kcal"
    },
    {
        "id": 26,
        "name": "Golden Gain",
        "description": "Banana + Milk + date",
        "price": 5.00,
        "category": "Fresh Juice",
        "image": "https://images.unsplash.com/photo-1594489569733-469b82142752?auto=format&fit=crop&q=80&w=600",
        "tags": ["Energy", "Post-Workout", "Natural Sweetener"],
        "calories": "250 kcal"
    },
    {
        "id": 27,
        "name": "Avocado",
        "description": "Avocados with nuts and honey",
        "price": 7.00,
        "category": "Fresh Juice",
        "image": "https://images.unsplash.com/photo-1634509727464-9f20c4c45b71?auto=format&fit=crop&q=80&w=600",
        "tags": ["Healthy Fats", "Rich", "Filling"],
        "calories": "320 kcal"
    },
    {
        "id": 28,
        "name": "Passion orange",
        "description": "Fresh orange combined with passion",
        "price": 4.50,
        "category": "Fresh Juice",
        "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600",
        "tags": ["Tropical", "Vitamin C", "Zesty"],
        "calories": "120 kcal"
    },
    {
        "id": 29,
        "name": "Water Large",
        "description": "Pure mineral water",
        "price": 1.00,
        "category": "Water",
        "image": "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&q=80&w=600",
        "tags": ["Hydration", "Zero Calorie"],
        "calories": "0 kcal"
    },
    {
        "id": 30,
        "name": "Water Small",
        "description": "Pure mineral water",
        "price": 0.50,
        "category": "Water",
        "image": "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&q=80&w=600",
        "tags": ["Hydration", "Zero Calorie"],
        "calories": "0 kcal"
    },
    {
        "id": 31,
        "name": "Sparkling Water",
        "description": "Carbonated mineral water",
        "price": 1.22,
        "category": "Water",
        "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600",
        "tags": ["Fizzy", "Zero Calorie", "Refreshing"],
        "calories": "0 kcal"
    },
    {
        "id": 32,
        "name": "Protein shake",
        "description": "Raw ISO Protein shake",
        "price": 5.00,
        "category": "Protein Shakes",
        "image": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=600",
        "tags": ["High Protein", "Muscle Recovery", "Gym"],
        "calories": "150 kcal"
    }
];

// --- FIREBASE CONFIGURATION ---
// 1. Go to console.firebase.google.com
// 2. Create a new project
// 3. Go to Project Settings > General > "Your apps" > Web (</>)
// 4. Copy the "firebaseConfig" object and paste it here:
const firebaseConfig = {
  apiKey: "AIzaSyD9IkrIInFpj3EvgaA8xc6TRXsZVLLOHuI",
  authDomain: "b52-digital-menu.firebaseapp.com",
  projectId: "b52-digital-menu",
  storageBucket: "b52-digital-menu.firebasestorage.app",
  messagingSenderId: "578412787584",
  appId: "1:578412787584:web:08585f18715884e0bd3365"
};


// Initialize Firebase
let db;
try {
    if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        console.log("Firebase Connected");
    }
} catch (error) {
    console.error("Firebase Error:", error);
}

// --- 2. STATE MANAGEMENT ---
let state = {
    isLoading: !!db,
    isAdmin: false,
    activeCategory: "All",
    searchTerm: "",
    activeTab: "items", // for admin dashboard
    editingItem: null,  // stores item object if editing
    
    // Persistent Data
    config: JSON.parse(localStorage.getItem('b52_config')) || DEFAULT_CONFIG,
    categories: JSON.parse(localStorage.getItem('b52_categories')) || DEFAULT_CATEGORIES,
    items: JSON.parse(localStorage.getItem('b52_items')) || DEFAULT_ITEMS
};

// Save state helper
function saveState() {
    localStorage.setItem('b52_config', JSON.stringify(state.config));
    localStorage.setItem('b52_categories', JSON.stringify(state.categories));
    localStorage.setItem('b52_items', JSON.stringify(state.items));
    
    // Save to Cloud (Firebase) if connected
    if (db && state.isAdmin) {
        db.collection('gym_data').doc('menu').set({
            items: state.items,
            categories: state.categories,
            config: state.config
        }).then(() => console.log("Saved to Cloud"));
    }
    render();
}

// --- 3. HELPER FUNCTIONS ---

const getTagIconName = (tag) => {
    const t = tag.toLowerCase();
    if (t.includes('protein')) return 'dumbbell';
    if (t.includes('vegan') || t.includes('natural')) return 'leaf';
    if (t.includes('energy') || t.includes('caffeine')) return 'zap';
    if (t.includes('hydration')) return 'droplet';
    return 'flame';
};

// --- 4. RENDER FUNCTIONS ---

function renderNavbar() {
    return `
    <nav class="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center gap-2 cursor-pointer select-none" onclick="handleLogoClick()" title="Tap 5 times for Admin">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center transform -skew-x-12" style="background-color: ${state.config.primaryColor}">
                        <i data-lucide="dumbbell" class="text-white w-6 h-6 skew-x-12"></i>
                    </div>
                    <span class="font-bold text-xl tracking-wider uppercase hidden sm:block">${state.config.gymName}</span>
                </div>

                <div class="flex items-center gap-4">
                    <!-- Search -->
                    <div class="relative group">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i data-lucide="search" class="h-4 w-4 text-gray-400"></i>
                        </div>
                        <input
                            type="text"
                            id="searchInput"
                            value="${state.searchTerm}"
                            placeholder="Search menu..."
                            class="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 w-32 sm:w-64 transition-all"
                            style="--tw-ring-color: ${state.config.primaryColor}"
                            oninput="handleSearch(this.value)"
                        />
                    </div>

                    <!-- Admin Toggle -->
                    ${state.isAdmin ? `
                    <button 
                        onclick="toggleAdmin()"
                        class="p-2 rounded-full transition-colors bg-red-500/20 text-red-400 hover:bg-red-500/30"
                        title="Exit Admin Mode"
                    >
                        <i data-lucide="log-out" class="w-5 h-5"></i>
                    </button>
                    ` : ''}
                </div>
            </div>
        </div>
    </nav>
    `;
}

function renderUserView() {
    // Filter Items
    const filtered = state.items.filter(item => {
        const matchesCategory = state.activeCategory === "All" || item.category === state.activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(state.searchTerm.toLowerCase()) || 
                            item.description.toLowerCase().includes(state.searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Generate Categories HTML
    const categoriesHTML = ['All', ...state.categories].map(cat => `
        <button
            onclick="setCategory('${cat}')"
            class="px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border ${state.activeCategory === cat ? 'text-white border-transparent shadow-lg' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}"
            style="${state.activeCategory === cat ? `background-color: ${state.config.primaryColor}; box-shadow: 0 0 15px ${state.config.primaryColor}40` : ''}"
        >
            ${cat}
        </button>
    `).join('');

    // Generate Items HTML
    const itemsHTML = filtered.map(item => `
        <div class="group bg-white/5 border border-white/5 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full fade-in">
            <div class="relative h-48 overflow-hidden">
                <img 
                    src="${item.image || 'https://via.placeholder.com/400x300?text=No+Image'}" 
                    alt="${item.name}" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onerror="this.src='https://via.placeholder.com/400x300?text=Image+Error'"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                <div class="absolute bottom-3 left-3">
                    <span 
                        class="px-2 py-1 text-xs font-bold rounded text-black uppercase tracking-wider"
                        style="background-color: ${state.config.accentColor}"
                    >
                        ${item.category}
                    </span>
                </div>
            </div>

            <div class="p-5 flex-1 flex flex-col">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-white transition-colors hover:text-[${state.config.primaryColor}]">
                        ${item.name}
                    </h3>
                    <span class="text-xl font-bold whitespace-nowrap" style="color: ${state.config.primaryColor}">
                        ${state.config.currency}${Number(item.price).toFixed(2)}
                    </span>
                </div>
                
                <p class="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                    ${item.description}
                </p>

                <div class="flex flex-wrap gap-2 mb-4">
                    ${item.tags ? item.tags.map(tag => `
                        <span class="flex items-center text-[10px] uppercase font-bold px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                            <i data-lucide="${getTagIconName(tag)}" class="w-3 h-3 mr-1"></i>
                            ${tag}
                        </span>
                    `).join('') : ''}
                    ${item.calories ? `
                        <span class="flex items-center text-[10px] uppercase font-bold px-2 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            <i data-lucide="flame" class="w-3 h-3 mr-1"></i>
                            ${item.calories}
                        </span>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="mb-8 fade-in">
            <h1 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2">
                Fuel Your Workout
            </h1>
            <p class="text-gray-400 max-w-2xl">
                Premium nutrition for elite performance. Browse our selection of supplements, meals, and gear.
            </p>
        </div>

        <div class="flex overflow-x-auto pb-6 gap-3 no-scrollbar mb-4">
            ${categoriesHTML}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            ${filtered.length > 0 ? itemsHTML : `
                <div class="col-span-full py-20 text-center text-gray-500">
                    <i data-lucide="dumbbell" class="w-16 h-16 mx-auto mb-4 opacity-20"></i>
                    <p class="text-xl">No items found matching your criteria.</p>
                </div>
            `}
        </div>
    `;
}

function renderAdminDashboard() {
    // Render Items Tab
    if (state.activeTab === 'items') {
        const isEditing = state.editingItem !== null;
        const formItem = state.editingItem || { name: '', description: '', price: '', category: state.categories[0] || '', image: '', tags: [], calories: '' };
        const tagsString = Array.isArray(formItem.tags) ? formItem.tags.join(', ') : formItem.tags;

        // Form HTML
        const formHTML = `
            <div class="lg:col-span-1 bg-white/5 p-6 rounded-2xl border border-white/10 h-fit sticky top-24 fade-in">
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="${isEditing ? 'edit-2' : 'plus'}" class="w-5 h-5 ${isEditing ? 'text-blue-400' : 'text-green-400'}"></i>
                    ${isEditing ? 'Edit Item' : 'Add New Item'}
                </h3>
                <form onsubmit="handleItemSubmit(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Item Name</label>
                        <input required type="text" name="name" value="${formItem.name}" class="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none text-white">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Price</label>
                            <input required type="number" step="0.01" name="price" value="${formItem.price}" class="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none text-white">
                        </div>
                        <div>
                            <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Category</label>
                            <select name="category" class="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none text-gray-300">
                                ${state.categories.map(c => `<option value="${c}" ${formItem.category === c ? 'selected' : ''}>${c}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Image URL</label>
                        <input type="text" name="image" placeholder="https://..." value="${formItem.image}" class="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none text-white">
                        <p class="text-[10px] text-gray-500 mt-1">Paste a link from Unsplash or your image host.</p>
                    </div>
                    <div>
                        <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Description</label>
                        <textarea rows="3" name="description" class="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none text-white">${formItem.description}</textarea>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Health Tags</label>
                            <input type="text" name="tags" placeholder="Protein, Vegan, GF" value="${tagsString}" class="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none text-white">
                        </div>
                        <div>
                            <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Calorie Label</label>
                            <input type="text" name="calories" placeholder="e.g. 350 kcal" value="${formItem.calories || ''}" class="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none text-white">
                        </div>
                    </div>
                    <div class="pt-2 flex gap-2">
                        <button type="submit" class="flex-1 py-2 rounded-lg font-bold text-black transition-colors" style="background-color: ${state.config.primaryColor}">
                            ${isEditing ? 'Update Item' : 'Add Item'}
                        </button>
                        ${isEditing ? `<button type="button" onclick="cancelEdit()" class="px-4 py-2 rounded-lg font-bold bg-white/10 text-white hover:bg-white/20 transition-colors">Cancel</button>` : ''}
                    </div>
                </form>
            </div>
        `;

        // List HTML
        const listHTML = `
            <div class="lg:col-span-2 space-y-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-400 text-sm">Found ${state.items.length} items</span>
                </div>
                ${state.items.map(item => `
                    <div class="bg-white/5 p-4 rounded-xl flex items-center gap-4 group border border-transparent hover:border-white/10 transition-all">
                        <img src="${item.image || 'https://via.placeholder.com/100'}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover bg-black/20">
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2">
                                <h4 class="font-bold truncate">${item.name}</h4>
                                <span class="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-400">${item.category}</span>
                            </div>
                            <p class="text-sm text-gray-500 truncate">${item.description}</p>
                            <div class="mt-1 font-mono text-sm" style="color: ${state.config.primaryColor}">${state.config.currency}${Number(item.price).toFixed(2)}</div>
                        </div>
                        <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onclick="startEdit(${item.id})" class="p-2 rounded bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                                <i data-lucide="edit-2" class="w-4 h-4"></i>
                            </button>
                            <button onclick="deleteItem(${item.id})" class="p-2 rounded bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors">
                                <i data-lucide="trash-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        return `<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 fade-in">${formHTML}${listHTML}</div>`;
    } 
    // Render Styles/Data Tab
    else {
        return `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
            <!-- Branding -->
            <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 class="text-xl font-bold mb-4">Branding & Colors</h3>
                <div class="space-y-4">
                    <div>
                        <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Gym Name</label>
                        <input type="text" value="${state.config.gymName}" onchange="updateConfig('gymName', this.value)" class="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white">
                    </div>
                    <div>
                        <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Admin Password</label>
                        <input type="text" value="${state.config.adminPassword || 'admin'}" onchange="updateConfig('adminPassword', this.value)" class="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white">
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <div>
                            <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Primary</label>
                            <input type="color" class="w-full h-10 rounded cursor-pointer" value="${state.config.primaryColor}" onchange="updateConfig('primaryColor', this.value)">
                        </div>
                        <div>
                            <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Background</label>
                            <input type="color" class="w-full h-10 rounded cursor-pointer" value="${state.config.secondaryColor}" onchange="updateConfig('secondaryColor', this.value)">
                        </div>
                        <div>
                            <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Accent</label>
                            <input type="color" class="w-full h-10 rounded cursor-pointer" value="${state.config.accentColor}" onchange="updateConfig('accentColor', this.value)">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Categories -->
            <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 class="text-xl font-bold mb-4">Manage Categories</h3>
                <form onsubmit="addCategory(event)" class="flex gap-2 mb-4">
                    <input type="text" name="newCat" placeholder="New Category..." class="flex-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white">
                    <button type="submit" class="bg-white/10 hover:bg-white/20 text-white px-4 rounded-lg">Add</button>
                </form>
                <div class="flex flex-wrap gap-2">
                    ${state.categories.map(cat => `
                        <span class="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full text-sm border border-white/5">
                            ${cat}
                            <button onclick="deleteCategory('${cat}')" class="text-red-400 hover:text-red-300"><i data-lucide="x" class="w-3 h-3"></i></button>
                        </span>
                    `).join('')}
                </div>
            </div>

            <!-- Data Management -->
            <div class="bg-white/5 p-6 rounded-2xl border border-white/10 md:col-span-2">
                <h3 class="text-xl font-bold mb-4">Data Management (Excel Replacement)</h3>
                <p class="text-gray-400 text-sm mb-4">
                    Manage your "database" locally. Export to JSON for backup or Import to restore.
                </p>
                <div class="flex gap-4">
                    <button onclick="exportData()" class="flex items-center gap-2 px-6 py-3 rounded-lg font-bold bg-green-600 hover:bg-green-700 text-white transition-colors">
                        <i data-lucide="download" class="w-5 h-5"></i>
                        Export Data (JSON)
                    </button>
                    <label class="flex items-center gap-2 px-6 py-3 rounded-lg font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer">
                        <i data-lucide="upload" class="w-5 h-5"></i>
                        Import Data (JSON)
                        <input type="file" class="hidden" accept=".json" onchange="importData(this)">
                    </label>
                </div>
            </div>
        </div>
        `;
    }
}

// --- 5. MAIN RENDER LOOP ---
function render() {
    // Update Body Background
    document.getElementById('body-bg').style.backgroundColor = state.config.secondaryColor;

    const app = document.getElementById('app');

    if (state.isLoading) {
        app.innerHTML = `
            <div class="min-h-[60vh] flex flex-col items-center justify-center fade-in">
                <i data-lucide="dumbbell" class="w-20 h-20 animate-spin" style="color: ${state.config.primaryColor}"></i>
                <p class="mt-6 text-xl font-bold text-gray-500 animate-pulse">LOADING MENU...</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    let content = '';
    
    content += renderNavbar();

    content += `<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`;
    
    if (state.isAdmin) {
        content += `
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <h2 class="text-3xl font-bold flex items-center gap-3">
                    <i data-lucide="settings" class="w-8 h-8 text-gray-400"></i>
                    Admin Dashboard
                </h2>
                <div class="flex gap-2">
                    <button onclick="setAdminTab('items')" class="px-4 py-2 rounded-lg font-medium transition-colors ${state.activeTab === 'items' ? 'bg-white text-black' : 'bg-white/5 hover:bg-white/10'}">Menu Items</button>
                    <button onclick="setAdminTab('style')" class="px-4 py-2 rounded-lg font-medium transition-colors ${state.activeTab === 'style' ? 'bg-white text-black' : 'bg-white/5 hover:bg-white/10'}">Styles & Data</button>
                </div>
            </div>
        `;
        content += renderAdminDashboard();
    } else {
        content += renderUserView();
    }
    
    content += `</main>`;
    
    app.innerHTML = content;
    
    // Re-init icons
    lucide.createIcons();
    
    // Keep focus on search if active
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.value = state.searchTerm;
        if(document.activeElement.id === 'searchInput') searchInput.focus();
    }
}

// --- 6. EVENT HANDLERS ---

let logoClickCount = 0;
let logoClickTimeout;

window.handleLogoClick = () => {
    logoClickCount++;
    clearTimeout(logoClickTimeout);
    logoClickTimeout = setTimeout(() => {
        logoClickCount = 0;
    }, 2000); // Reset if not clicked 5 times within 2 seconds

    if (logoClickCount >= 5) {
        logoClickCount = 0;
        toggleAdmin();
    }
};

window.toggleAdmin = () => {
    if (state.isAdmin) {
        state.isAdmin = false;
        render();
    } else {
        const password = prompt("Enter Admin Password:");
        if (password === (state.config.adminPassword || "admin")) {
            state.isAdmin = true;
            render();
        } else if (password !== null) {
            alert("Incorrect password");
        }
    }
};

window.handleSearch = (val) => {
    state.searchTerm = val;
    render();
    // Focus hack
    const input = document.getElementById('searchInput');
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
};

window.setCategory = (cat) => {
    state.activeCategory = cat;
    render();
};

window.setAdminTab = (tab) => {
    state.activeTab = tab;
    render();
};

// Item CRUD
window.handleItemSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
        id: state.editingItem ? state.editingItem.id : Date.now(),
        name: formData.get('name'),
        price: parseFloat(formData.get('price')),
        category: formData.get('category'),
        image: formData.get('image'),
        description: formData.get('description'),
        tags: formData.get('tags').split(',').map(t => t.trim()).filter(Boolean),
        calories: formData.get('calories')
    };

    if (state.editingItem) {
        state.items = state.items.map(item => item.id === newItem.id ? newItem : item);
        state.editingItem = null;
    } else {
        state.items.push(newItem);
    }
    saveState();
};

window.startEdit = (id) => {
    state.editingItem = state.items.find(i => i.id === id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    render();
};

window.cancelEdit = () => {
    state.editingItem = null;
    render();
};

window.deleteItem = (id) => {
    if(confirm("Are you sure you want to delete this item?")) {
        state.items = state.items.filter(i => i.id !== id);
        saveState();
    }
};

// Config & Categories
window.updateConfig = (key, val) => {
    state.config[key] = val;
    saveState();
};

window.addCategory = (e) => {
    e.preventDefault();
    const val = e.target.newCat.value.trim();
    if(val && !state.categories.includes(val)) {
        state.categories.push(val);
        saveState();
    }
};

window.deleteCategory = (cat) => {
    if(confirm(`Delete category "${cat}"?`)) {
        state.categories = state.categories.filter(c => c !== cat);
        saveState();
    }
};

// Import/Export
window.exportData = () => {
    const dataStr = JSON.stringify(state.items, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'b52_menu_data.json');
    linkElement.click();
};

window.importData = (input) => {
    const fileReader = new FileReader();
    fileReader.readAsText(input.files[0], "UTF-8");
    fileReader.onload = e => {
        try {
            const parsedData = JSON.parse(e.target.result);
            if(Array.isArray(parsedData)) {
                state.items = parsedData;
                saveState();
                alert("Menu successfully imported!");
            } else {
                alert("Invalid JSON format. Expected an array of items.");
            }
        } catch (err) {
            alert("Error reading file.");
        }
    };
};

// --- 7. REAL-TIME SYNC ---
if (db) {
    // Listen for changes from the database
    db.collection('gym_data').doc('menu').onSnapshot((doc) => {
        state.isLoading = false;
        if (doc.exists) {
            const data = doc.data();
            state.items = data.items || state.items;
            state.categories = data.categories || state.categories;
            state.config = data.config || state.config;
        }
        render();
    }, (error) => {
        console.error("Error fetching data:", error);
        state.isLoading = false;
        render();
    });
}

// Initial Render
render();
