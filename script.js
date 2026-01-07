// --- 1. DEFAULT DATA ---
const DEFAULT_CONFIG = {
    gymName: "b52 Fitness Elites",
    primaryColor: "#3b82f6", // Blue-500
    secondaryColor: "#0f172a", // Slate-900
    accentColor: "#22c55e", // Green-500
    currency: "$",
    adminPassword: "123",
};

// --- 2. STATE MANAGEMENT ---
let state = {
    isLoading: true,
    isAdmin: false,
    activeCategory: "All",
    activeDepartment: "Bar",
    searchTerm: "",
    activeTab: "items", // for admin dashboard
    editingItem: null,  // stores item object if editing
    viewMode: "grid",
    
    // Config: Defaults to internal, then loads from data.json
    config: { ...DEFAULT_CONFIG },
    
    // DATA: Always loads from data.json (No Local Storage History)
    categories: [],
    items: []
};

// Save state helper
function saveState() {
    // No local storage saving. Changes exist in memory until Exported.
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

                    <!-- View Toggle -->
                    <button 
                        onclick="toggleViewMode()"
                        class="p-2 rounded-full transition-colors bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
                        title="${state.viewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}"
                    >
                        <i data-lucide="${state.viewMode === 'grid' ? 'list' : 'grid'}" class="w-5 h-5"></i>
                    </button>

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

function renderItemCard(item) {
    return `
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
                ${item.isFeatured ? `
                <div class="absolute top-2 right-2 z-10">
                    <span class="bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <i data-lucide="star" class="w-3 h-3 fill-black"></i> Featured
                    </span>
                </div>` : ''}
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
    `;
}

function renderItemRow(item) {
    return `
        <div class="group bg-white/5 border border-white/5 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-row h-32 sm:h-40 fade-in w-full">
            <div class="relative w-28 sm:w-40 shrink-0 overflow-hidden">
                <img 
                    src="${item.image || 'https://via.placeholder.com/400x300?text=No+Image'}" 
                    alt="${item.name}" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onerror="this.src='https://via.placeholder.com/400x300?text=Image+Error'"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent opacity-60"></div>
                ${item.isFeatured ? `
                <div class="absolute top-2 left-2 z-10">
                    <span class="bg-yellow-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                        <i data-lucide="star" class="w-3 h-3 fill-black"></i>
                    </span>
                </div>` : ''}
            </div>

            <div class="p-3 sm:p-4 flex-1 flex flex-col justify-between min-w-0">
                <div class="flex justify-between items-start gap-2 sm:gap-4">
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1">
                            <h3 class="text-base sm:text-lg font-bold text-white transition-colors hover:text-[${state.config.primaryColor}] truncate">
                                ${item.name}
                            </h3>
                            <span 
                                class="px-2 py-0.5 text-[10px] font-bold rounded text-black uppercase tracking-wider shrink-0"
                                style="background-color: ${state.config.accentColor}"
                            >
                                ${item.category}
                            </span>
                        </div>
                        <p class="text-gray-400 text-xs sm:text-sm line-clamp-2">
                            ${item.description}
                        </p>
                    </div>
                    <span class="text-lg sm:text-xl font-bold whitespace-nowrap text-right" style="color: ${state.config.primaryColor}">
                        ${state.config.currency}${Number(item.price).toFixed(2)}
                    </span>
                </div>

                <div class="flex flex-wrap gap-2 mt-2">
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
    `;
}

function renderUserView() {
    const departments = ["Bar", "Kitchen", "Supplements"];
    
    // Helper to resolve department (handling legacy data)
    const getDept = (i) => i.department || (i.category === 'Protein Shakes' ? 'Supplements' : 'Bar');

    // Filter Items
    const filtered = state.items.filter(item => {
        const itemDept = getDept(item);
        const matchesDept = itemDept === state.activeDepartment;
        const matchesCategory = state.activeCategory === "All" || item.category === state.activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(state.searchTerm.toLowerCase()) || 
                            item.description.toLowerCase().includes(state.searchTerm.toLowerCase());
        return matchesDept && matchesCategory && matchesSearch;
    });

    // Get categories relevant to current department
    const deptCategories = [...new Set(state.items.filter(i => getDept(i) === state.activeDepartment).map(i => i.category))];
    const categoriesToShow = deptCategories.length > 0 ? deptCategories : [];

    // Generate Categories HTML
    const categoriesHTML = ['All', ...categoriesToShow].map(cat => `
        <button
            onclick="setCategory('${cat}')"
            class="px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border ${state.activeCategory === cat ? 'text-white border-transparent shadow-lg' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}"
            style="${state.activeCategory === cat ? `background-color: ${state.config.primaryColor}; box-shadow: 0 0 15px ${state.config.primaryColor}40` : ''}"
        >
            ${cat}
        </button>
    `).join('');

    const isGrid = state.viewMode === 'grid';
    const containerClass = isGrid 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
        : "flex flex-col gap-4 max-w-4xl mx-auto";

    // Generate Items HTML
    const itemsHTML = filtered.map(item => isGrid ? renderItemCard(item) : renderItemRow(item)).join('');

    return `
        <div class="mb-8 fade-in">
            <h1 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2">
                Fuel Your Workout
            </h1>
            <p class="text-gray-400 max-w-2xl">
                Premium nutrition for elite performance. Browse our selection of supplements, meals, and gear.
            </p>
        </div>

        <!-- Departments -->
        <div class="flex gap-6 mb-6 border-b border-white/10 pb-1">
            ${departments.map(dept => `
                <button 
                    onclick="setDepartment('${dept}')"
                    class="text-lg font-bold pb-3 px-2 transition-colors relative ${state.activeDepartment === dept ? 'text-white' : 'text-gray-500 hover:text-gray-300'}"
                >
                    ${dept}
                    ${state.activeDepartment === dept ? `<div class="absolute bottom-0 left-0 w-full h-0.5" style="background-color: ${state.config.primaryColor}"></div>` : ''}
                </button>
            `).join('')}
        </div>

        <div class="flex overflow-x-auto pb-6 gap-3 no-scrollbar mb-4">
            ${categoriesHTML}
        </div>

        ${state.activeCategory === 'All' && !state.searchTerm && state.items.some(i => i.isFeatured) ? `
            <div class="mb-8 fade-in">
                <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <i data-lucide="star" class="text-yellow-400 fill-yellow-400"></i> Featured
                </h2>
                <div class="${containerClass}">
                    ${state.items.filter(i => i.isFeatured).map(item => isGrid ? renderItemCard(item) : renderItemRow(item)).join('')}
                </div>
            </div>
            <div class="w-full h-px bg-white/10 mb-8"></div>
        ` : ''}

        <div class="${containerClass}">
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
        const formItem = state.editingItem || { name: '', description: '', price: '', category: state.categories[0] || '', image: '', tags: [], calories: '', department: 'Bar' };
        
        // Infer department for legacy items being edited
        if (!formItem.department && formItem.category) {
            formItem.department = (formItem.category === 'Protein Shakes') ? 'Supplements' : 'Bar';
        }

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
                        <label class="block text-xs uppercase text-gray-500 font-bold mb-1">Department</label>
                        <select name="department" class="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none text-gray-300">
                            ${['Bar', 'Kitchen', 'Supplements'].map(d => `<option value="${d}" ${formItem.department === d ? 'selected' : ''}>${d}</option>`).join('')}
                        </select>
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
                    <div class="flex items-center gap-2 pt-2">
                        <input type="checkbox" id="isFeatured" name="isFeatured" ${formItem.isFeatured ? 'checked' : ''} class="w-4 h-4 rounded bg-black/20 border-white/10 text-blue-600 focus:ring-blue-500">
                        <label for="isFeatured" class="text-sm font-bold text-gray-300 select-none cursor-pointer">Highlight as Featured Item</label>
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
                    ${state.categories.map((cat, index) => `
                        <span class="flex items-center gap-1 bg-black/40 pl-3 pr-1 py-1 rounded-full text-sm border border-white/5">
                            ${index > 0 ? `<button type="button" onclick="moveCategory(${index}, -1)" class="text-gray-500 hover:text-white"><i data-lucide="chevron-left" class="w-3 h-3"></i></button>` : ''}
                            <span class="mx-1">${cat}</span>
                            ${index < state.categories.length - 1 ? `<button type="button" onclick="moveCategory(${index}, 1)" class="text-gray-500 hover:text-white"><i data-lucide="chevron-right" class="w-3 h-3"></i></button>` : ''}
                            <div class="w-px h-3 bg-white/10 mx-1"></div>
                            <button type="button" onclick="deleteCategory('${cat}')" class="text-red-400 hover:text-red-300 p-1"><i data-lucide="x" class="w-3 h-3"></i></button>
                        </span>
                    `).join('')}
                </div>
            </div>

            <!-- Data Management -->
            <div class="bg-white/5 p-6 rounded-2xl border border-white/10 md:col-span-2">
                <h3 class="text-xl font-bold mb-4">Publish Changes</h3>
                <p class="text-gray-400 text-sm mb-4">
                    <span class="text-red-400 font-bold">IMPORTANT:</span> Changes are currently in memory only. 
                    <br>To save your work, you MUST click <b>Export Data</b> and replace your <b>data.json</b> file.
                    <br>If you refresh without exporting, changes will be lost.
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
        // Re-sync with database when leaving admin mode to ensure we see live data
        syncDatabase(true); 
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

window.toggleViewMode = () => {
    state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid';
    render();
};

window.handleSearch = (val) => {
    state.searchTerm = val;
    render();
    // Focus hack
    const input = document.getElementById('searchInput');
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
};

window.setDepartment = (dept) => {
    state.activeDepartment = dept;
    state.activeCategory = "All";
    render();
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
        department: formData.get('department'),
        image: formData.get('image'),
        description: formData.get('description'),
        tags: formData.get('tags').split(',').map(t => t.trim()).filter(Boolean),
        calories: formData.get('calories'),
        isFeatured: formData.get('isFeatured') === 'on'
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

window.moveCategory = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex >= 0 && newIndex < state.categories.length) {
        // Swap
        [state.categories[index], state.categories[newIndex]] = [state.categories[newIndex], state.categories[index]];
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
    const data = {
        items: state.items,
        categories: state.categories,
        config: state.config
    };
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'data.json'); // Default name data.json
    linkElement.click();
};

window.importData = (input) => {
    if (!input.files.length) return;
    const fileReader = new FileReader();
    fileReader.readAsText(input.files[0], "UTF-8");
    fileReader.onload = e => {
        try {
            const parsedData = JSON.parse(e.target.result);
            
            // Handle new format { items: [], categories: [] }
            if (parsedData.items && Array.isArray(parsedData.items)) {
                state.items = parsedData.items;
                if (parsedData.categories) state.categories = parsedData.categories;
                if (parsedData.config) state.config = parsedData.config;
                saveState();
                alert("Menu and categories successfully imported!");
            } else if(Array.isArray(parsedData)) {
                state.items = parsedData;
                saveState();
                alert("Menu items imported! (Note: Categories were not in this file)");
            } else {
                alert("Invalid JSON format.");
            }
        } catch (err) {
            alert("Error reading file.");
        }
    };
};

// --- 7. INITIALIZATION ---
async function syncDatabase(force = false) {
    // If user is editing a specific item, DO NOT overwrite to prevent data loss. Otherwise, sync live.
    if (state.editingItem && !force) return;

    try {
        // Fetch data.json with a timestamp to bypass cache
        const response = await fetch('data.json?t=' + Date.now());
        if (response.ok) {
            const serverData = await response.json();
            
            let newItems = [];
            let newCategories = [];
            let newConfig = { ...DEFAULT_CONFIG };

            // Handle both Array (legacy) and Object (new) formats
            if (Array.isArray(serverData)) {
                newItems = serverData;
            } else if (serverData.items) {
                newItems = serverData.items;
                newCategories = serverData.categories || [];
                if (serverData.config) newConfig = serverData.config;
            }
            
            // Smart Fix: If no categories found, extract from items
            if (newCategories.length === 0 && newItems.length > 0) {
                newCategories = [...new Set(newItems.map(item => item.category))].filter(Boolean);
            }
            
            // Only update if data actually changed to prevent flickering
            const itemsChanged = JSON.stringify(newItems) !== JSON.stringify(state.items);
            const catsChanged = JSON.stringify(newCategories) !== JSON.stringify(state.categories);
            const configChanged = JSON.stringify(newConfig) !== JSON.stringify(state.config);

            if (itemsChanged || catsChanged || configChanged) {
                state.items = newItems;
                state.categories = newCategories;
                state.config = newConfig;
                
                // We do NOT save to localStorage here. 
                // The file is the source of truth.
                
                if (!state.editingItem) {
                    render();
                }
                console.log("Database synced");
            }
        }
    } catch (e) {
        console.log("Running in offline/local mode or file not found");
    }
}

async function init() {
    // Initial load
    await syncDatabase(true);
    state.isLoading = false;
    render();

    // Poll for updates every 5 seconds
    setInterval(syncDatabase, 2000);
}

init();
