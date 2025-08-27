 
        
        let currentSlide = 0;
        let isRotating = false;
        let autoSlideInterval;
        let currentPage = 0;
        const itemsPerPage = 6;
        let displayedShoes = [];
        let cart = [];
        let filteredShoes = [];
        
        
        const heroShoes = [
            {
                id: 1,
                name: "Nike Air Max 270",
                brand: "Nike",
                price: 150,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop&crop=center",
                colors: ["Black", "White", "Blue"]
            },
            {
                id: 2,
                name: "Adidas Ultraboost 22",
                brand: "Adidas", 
                price: 190,
                image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop&crop=center",
                colors: ["White", "Black", "Grey"]
            },
            {
                id: 3,
                name: "Jordan 1 Retro High",
                brand: "Jordan",
                price: 170,
                image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=400&fit=crop&crop=center",
                colors: ["Red", "Black", "White"]
            },
            {
                id: 4,
                name: "New Balance 990v5",
                brand: "New Balance",
                price: 185,
                image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=400&fit=crop&crop=center",
                colors: ["Grey", "Navy", "Black"]
            }
        ];

        
        const shoeDatabase = [
            {
                id: 1,
                name: "Nike Air Max 270",
                brand: "Nike",
                price: 150,
                originalPrice: 180,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
                category: "Running",
                colors: ["Black", "White", "Blue"],
                rating: 4.8,
                reviews: 1250,
                description: "The Nike Air Max 270 delivers visible cushioning under every step"
            },
            {
                id: 2,
                name: "Adidas Ultraboost 22",
                brand: "Adidas",
                price: 190,
                originalPrice: 220,
                image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&crop=center",
                category: "Running",
                colors: ["White", "Black", "Grey"],
                rating: 4.9,
                reviews: 890,
                description: "Experience endless energy return with responsive Boost cushioning"
            },
            {
                id: 3,
                name: "Jordan 1 Retro High",
                brand: "Jordan",
                price: 170,
                originalPrice: 170,
                image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop&crop=center",
                category: "Lifestyle",
                colors: ["Red", "Black", "White"],
                rating: 4.7,
                reviews: 2100,
                description: "The iconic silhouette that started it all, now in premium leather"
            },
            {
                id: 4,
                name: "Converse Chuck Taylor",
                brand: "Converse",
                price: 65,
                originalPrice: 75,
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center",
                category: "Casual",
                colors: ["Black", "White", "Red"],
                rating: 4.5,
                reviews: 3200,
                description: "Timeless canvas sneaker that never goes out of style"
            },
            {
                id: 5,
                name: "Vans Old Skool",
                brand: "Vans",
                price: 60,
                originalPrice: 70,
                image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop&crop=center",
                category: "Skate",
                colors: ["Black", "White", "Navy"],
                rating: 4.6,
                reviews: 1800,
                description: "The classic side-stripe shoe with durable canvas and suede uppers"
            },
            {
                id: 6,
                name: "New Balance 990v5",
                brand: "New Balance",
                price: 185,
                originalPrice: 200,
                image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop&crop=center",
                category: "Running",
                colors: ["Grey", "Navy", "Black"],
                rating: 4.8,
                reviews: 650,
                description: "Made in USA with premium materials and superior comfort"
            },
            {
                id: 7,
                name: "Puma RS-X",
                brand: "Puma",
                price: 110,
                originalPrice: 130,
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center",
                category: "Lifestyle",
                colors: ["White", "Black", "Multi"],
                rating: 4.4,
                reviews: 420,
                description: "Chunky sneaker with bold design and comfortable cushioning"
            },
            {
                id: 8,
                name: "Reebok Classic Leather",
                brand: "Reebok",
                price: 75,
                originalPrice: 85,
                image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=300&fit=crop&crop=center",
                category: "Casual",
                colors: ["White", "Black", "Brown"],
                rating: 4.3,
                reviews: 890,
                description: "Soft garment leather upper with comfortable die-cut EVA midsole"
            },
            {
                id: 9,
                name: "ASICS Gel-Kayano 29",
                brand: "ASICS",
                price: 160,
                originalPrice: 180,
                image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop&crop=center",
                category: "Running",
                colors: ["Blue", "Black", "White"],
                rating: 4.7,
                reviews: 340,
                description: "Stability running shoe with advanced gel cushioning technology"
            },
            {
                id: 10,
                name: "Nike Air Force 1",
                brand: "Nike",
                price: 90,
                originalPrice: 100,
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center",
                category: "Lifestyle",
                colors: ["White", "Black", "Red"],
                rating: 4.6,
                reviews: 2800,
                description: "The classic basketball shoe that became a street style icon"
            },
            {
                id: 11,
                name: "Adidas Stan Smith",
                brand: "Adidas",
                price: 80,
                originalPrice: 90,
                image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=300&fit=crop&crop=center",
                category: "Casual",
                colors: ["White", "Green", "Navy"],
                rating: 4.4,
                reviews: 1900,
                description: "Minimalist tennis shoe with clean lines and premium leather"
            },
            {
                id: 12,
                name: "Jordan 4 Retro",
                brand: "Jordan",
                price: 200,
                originalPrice: 220,
                image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop&crop=center",
                category: "Lifestyle",
                colors: ["Black", "White", "Grey"],
                rating: 4.8,
                reviews: 1500,
                description: "Iconic basketball silhouette with premium materials and comfort"
            }
        ];

    
        function showPage(pageName) {
            
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            
            document.getElementById(pageName + '-page').classList.add('active');
            
            
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            
            document.querySelectorAll('.nav-item').forEach(item => {
                if (item.textContent.toLowerCase() === pageName || 
                    (pageName === 'home' && item.textContent.toLowerCase() === 'home')) {
                    item.classList.add('active');
                }
            });
            
            
            document.getElementById('mobile-menu').classList.remove('open');
            
            
            if (pageName === 'collection') {
                initCollectionPage();
            } else if (pageName === 'home') {
                
                if (!document.querySelector('#hero-shoe-slider .slide-item')) {
                    initHeroSlider();
                }
            }
            
    
            window.scrollTo(0, 0);
        }

        
        function initHeroSlider() {
            const slider = document.getElementById('hero-shoe-slider');
            const indicators = document.getElementById('slide-indicators');
            
            if (!slider || !indicators) return;
            
            
            slider.innerHTML = '';
            indicators.innerHTML = '';
            
            
            heroShoes.forEach((shoe, index) => {
                const slide = document.createElement('div');
                slide.className = 'slide-item';
                slide.innerHTML = `
                    <div class="shoe-3d floating" style="animation-delay: ${index * 0.2}s">
                        <img src="${shoe.image}" alt="${shoe.name}" class="w-full h-96 object-contain" loading="lazy">
                    </div>
                `;
                slider.appendChild(slide);
                
        
                const indicator = document.createElement('div');
                indicator.className = `slide-indicator ${index === 0 ? 'active' : ''}`;
                indicator.addEventListener('click', () => goToSlide(index));
                indicators.appendChild(indicator);
            });
            
            updateSlideInfo();
            startAutoSlide();
        }
        
    
        function updateSlider() {
            const slider = document.getElementById('hero-shoe-slider');
            if (!slider) return;
            
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            
            document.querySelectorAll('.slide-indicator').forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
            
            updateSlideInfo();
        }
        
        
        function updateSlideInfo() {
            const currentShoe = heroShoes[currentSlide];
            const nameEl = document.getElementById('current-shoe-name');
            const priceEl = document.getElementById('current-shoe-price');
            const colorsEl = document.getElementById('current-shoe-colors');
            
            if (nameEl) nameEl.textContent = currentShoe.name;
            if (priceEl) priceEl.textContent = `$${currentShoe.price}`;
            
            
            if (colorsEl) {
                colorsEl.innerHTML = currentShoe.colors.map(color => 
                    `<div class="color-swatch" style="background-color: ${getColorHex(color)}" title="${color}"></div>`
                ).join('');
            }
        }
        
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % heroShoes.length;
            updateSlider();
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + heroShoes.length) % heroShoes.length;
            updateSlider();
        }
        
        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }
        
        
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 4000);
        }
        
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }
        
    
        function toggle3D() {
            const shoes = document.querySelectorAll('.shoe-3d');
            isRotating = !isRotating;
            
            shoes.forEach(shoe => {
                if (isRotating) {
                    shoe.classList.add('rotating');
                    stopAutoSlide();
                } else {
                    shoe.classList.remove('rotating');
                    startAutoSlide();
                }
            });
            
            const button = document.getElementById('toggle-3d');
            if (button) {
                button.querySelector('span span').textContent = isRotating ? 'Stop 3D' : '3D View';
            }
        }

        
        function getColorHex(colorName) {
            const colors = {
                'Black': '#000000',
                'White': '#FFFFFF',
                'Red': '#EF4444',
                'Blue': '#3B82F6',
                'Navy': '#1E3A8A',
                'Grey': '#6B7280',
                'Gray': '#6B7280',
                'Brown': '#A3A3A3',
                'Green': '#10B981',
                'Multi': 'linear-gradient(45deg, #EF4444, #3B82F6, #10B981)'
            };
            return colors[colorName] || '#6B7280';
        }

        
        function createShoeCard(shoe) {
            const discount = Math.round(((shoe.originalPrice - shoe.price) / shoe.originalPrice) * 100);
            const hasDiscount = shoe.price < shoe.originalPrice;
            
            return `
                <div class="shoe-card bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border border-gray-100">
                    <div class="relative mb-6 overflow-hidden rounded-2xl bg-gray-50">
                        <img src="${shoe.image}" alt="${shoe.name}" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" loading="lazy">
                        ${hasDiscount ? `<div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">-${discount}%</div>` : ''}
                        <div class="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                            ⭐ ${shoe.rating}
                        </div>
                        <button class="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="toggleWishlist(${shoe.id})">
                            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">${shoe.brand}</span>
                            <span class="text-sm text-gray-400">${shoe.category}</span>
                        </div>
                        
                        <h3 class="text-xl font-bold text-gray-900 leading-tight">${shoe.name}</h3>
                        
                        <p class="text-gray-600 text-sm leading-relaxed">${shoe.description}</p>
                        
                        <div class="flex items-center space-x-2">
                            ${shoe.colors.slice(0, 3).map(color => `
                                <div class="w-6 h-6 rounded-full border-2 border-gray-200" style="background-color: ${getColorHex(color)}" title="${color}"></div>
                            `).join('')}
                            ${shoe.colors.length > 3 ? `<span class="text-sm text-gray-500">+${shoe.colors.length - 3}</span>` : ''}
                        </div>
                        
                        <div class="flex items-center justify-between pt-4">
                            <div class="flex items-center space-x-2">
                                <span class="text-2xl font-bold text-gray-900">$${shoe.price}</span>
                                ${hasDiscount ? `<span class="text-lg text-gray-400 line-through">$${shoe.originalPrice}</span>` : ''}
                            </div>
                            <div class="text-sm text-gray-500">
                                ${shoe.reviews} reviews
                            </div>
                        </div>
                        
                        <button class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg" onclick="addToCart(${shoe.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
        }

        
        function loadShoes() {
            const loading = document.getElementById('loading');
            const grid = document.getElementById('products-grid');
            const loadMoreBtn = document.getElementById('load-more');
            
            if (!loading || !grid) return;
            
            
            setTimeout(() => {
                const startIndex = currentPage * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const shoesToShow = shoeDatabase.slice(startIndex, endIndex);
                
                if (currentPage === 0) {
                    displayedShoes = shoesToShow;
                    grid.innerHTML = shoesToShow.map(shoe => createShoeCard(shoe)).join('');
                    loading.classList.add('hidden');
                    grid.classList.remove('hidden');
                } else {
                    displayedShoes = [...displayedShoes, ...shoesToShow];
                    grid.innerHTML += shoesToShow.map(shoe => createShoeCard(shoe)).join('');
                }
                
                currentPage++;
                
                
                if (loadMoreBtn) {
                    if (endIndex >= shoeDatabase.length) {
                        loadMoreBtn.classList.add('hidden');
                    } else {
                        loadMoreBtn.classList.remove('hidden');
                    }
                }
                
            }, currentPage === 0 ? 1500 : 800);
        }

        
        function initCollectionPage() {
            filteredShoes = [...shoeDatabase];
            renderCollectionGrid();
            setupFilters();
        }

    
        function renderCollectionGrid() {
            const grid = document.getElementById('collection-grid');
            const noResults = document.getElementById('no-results');
            
            if (!grid) return;
            
            if (filteredShoes.length === 0) {
                grid.innerHTML = '';
                if (noResults) noResults.classList.remove('hidden');
            } else {
                grid.innerHTML = filteredShoes.map(shoe => createShoeCard(shoe)).join('');
                if (noResults) noResults.classList.add('hidden');
            }
        }

        
        function setupFilters() {

            document.querySelectorAll('.filter-button').forEach(button => {
                button.addEventListener('click', function() {
                
                    document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    
                    applyFilters();
                });
            });
            
            
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.addEventListener('input', applyFilters);
            }
            
        
            const priceRange = document.getElementById('price-range');
            const priceValue = document.getElementById('price-value');
            if (priceRange && priceValue) {
                priceRange.addEventListener('input', function() {
                    priceValue.textContent = this.value;
                    applyFilters();
                });
            }
        }

        
        function applyFilters() {
            const activeFilter = document.querySelector('.filter-button.active')?.dataset.filter || 'all';
            const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
            const maxPrice = parseInt(document.getElementById('price-range')?.value) || 300;
            
            filteredShoes = shoeDatabase.filter(shoe => {
    
                let matchesFilter = true;
                if (activeFilter !== 'all') {
                    matchesFilter = shoe.brand.toLowerCase() === activeFilter || 
                                   shoe.category.toLowerCase() === activeFilter;
                }
                
                
                const matchesSearch = shoe.name.toLowerCase().includes(searchTerm) ||
                                     shoe.brand.toLowerCase().includes(searchTerm) ||
                                     shoe.description.toLowerCase().includes(searchTerm);
                
        
                const matchesPrice = shoe.price <= maxPrice;
                
                return matchesFilter && matchesSearch && matchesPrice;
            });
            
            renderCollectionGrid();
        }

        
        function addToCart(shoeId) {
            const shoe = shoeDatabase.find(s => s.id === shoeId);
            if (!shoe) return;
            
            const existingItem = cart.find(item => item.id === shoeId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...shoe, quantity: 1 });
            }
            
            updateCartUI();
        
            const button = event.target;
            const originalText = button.innerHTML;
            button.innerHTML = 'Added! ✓';
            button.classList.remove('from-purple-600', 'to-pink-600', 'hover:from-purple-700', 'hover:to-pink-700');
            button.classList.add('from-green-600', 'to-green-600', 'hover:from-green-700', 'hover:to-green-700');
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('from-green-600', 'to-green-600', 'hover:from-green-700', 'hover:to-green-700');
                button.classList.add('from-purple-600', 'to-pink-600', 'hover:from-purple-700', 'hover:to-pink-700');
            }, 2000);
        }

        function removeFromCart(shoeId) {
            cart = cart.filter(item => item.id !== shoeId);
            updateCartUI();
        }

        function updateQuantity(shoeId, newQuantity) {
            if (newQuantity <= 0) {
                removeFromCart(shoeId);
                return;
            }
            
            const item = cart.find(item => item.id === shoeId);
            if (item) {
                item.quantity = newQuantity;
                updateCartUI();
            }
        }

        function updateCartUI() {
            const cartCount = document.getElementById('cart-count');
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            const cartFooter = document.getElementById('cart-footer');
            
            // Update cart count
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            if (cartCount) {
                cartCount.textContent = totalItems;
            }
            
            // Update cart items
            if (cartItems) {
                if (cart.length === 0) {
                    cartItems.innerHTML = `
                        <div class="text-center text-gray-500 py-8">
                            <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>
                            </svg>
                            <p>Your cart is empty</p>
                        </div>
                    `;
                    if (cartFooter) cartFooter.classList.add('hidden');
                } else {
                    cartItems.innerHTML = cart.map(item => `
                        <div class="flex items-center space-x-4 p-4 border-b border-gray-200">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                            <div class="flex-1">
                                <h3 class="font-semibold text-gray-900">${item.name}</h3>
                                <p class="text-sm text-gray-500">${item.brand}</p>
                                <p class="text-lg font-bold text-purple-600">$${item.price}</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                                    </svg>
                                </button>
                                <span class="w-8 text-center font-semibold">${item.quantity}</span>
                                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                    </svg>
                                </button>
                            </div>
                            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                            </button>
                        </div>
                    `).join('');
                    if (cartFooter) cartFooter.classList.remove('hidden');
                }
            }
            
            // Update total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (cartTotal) {
                cartTotal.textContent = `$${total}`;
            }
        }

        function toggleCart() {
            const cartSidebar = document.getElementById('cart-sidebar');
            const cartOverlay = document.getElementById('cart-overlay');
            
            if (cartSidebar && cartOverlay) {
                cartSidebar.classList.toggle('open');
                cartOverlay.classList.toggle('hidden');
            }
        }

        function closeCart() {
            const cartSidebar = document.getElementById('cart-sidebar');
            const cartOverlay = document.getElementById('cart-overlay');
            
            if (cartSidebar && cartOverlay) {
                cartSidebar.classList.remove('open');
                cartOverlay.classList.add('hidden');
            }
        }

        
        function toggleWishlist(shoeId) {
            const button = event.target.closest('button');
            const svg = button.querySelector('svg');
            
            if (svg.getAttribute('fill') === 'currentColor') {
                svg.setAttribute('fill', 'none');
                svg.classList.remove('text-red-500');
                svg.classList.add('text-gray-600');
            } else {
                svg.setAttribute('fill', 'currentColor');
                svg.classList.remove('text-gray-600');
                svg.classList.add('text-red-500');
            }
        }


        function handleContactForm(event) {
            event.preventDefault();
            
            const form = event.target;
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
           
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
           
            setTimeout(() => {
                submitButton.textContent = 'Message Sent! ✓';
                submitButton.classList.remove('from-purple-600', 'to-pink-600');
                submitButton.classList.add('from-green-600', 'to-green-600');
                
                
                form.reset();
                
            
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.classList.remove('from-green-600', 'to-green-600');
                    submitButton.classList.add('from-purple-600', 'to-pink-600');
                }, 3000);
            }, 1500);
        }

        
        function handleNewsletterSubscription() {
            const email = document.querySelector('footer input[type="email"]').value;
            const button = document.querySelector('footer button');
            
            if (email) {
                button.innerHTML = 'Subscribed! ✓';
                button.classList.add('bg-green-600');
                document.querySelector('footer input[type="email"]').value = '';
                
                setTimeout(() => {
                    button.innerHTML = 'Subscribe';
                    button.classList.remove('bg-green-600');
                }, 3000);
            }
        }


        let chatOpen = false;
        let chatMessages = [];
        
        const chatResponses = {
            greetings: [
                "Hello! 👋 How can I help you find the perfect shoes today?",
                "Hi there! 😊 I'm here to help you with anything shoe-related!",
                "Welcome to SoleVibe! 🎉 What can I assist you with?"
            ],
            running: [
                "Great choice! 🏃‍♂️ Our running shoes feature advanced cushioning and support. Check out the Nike Air Max 270 or Adidas Ultraboost 22 - both are customer favorites!",
                "For running, I recommend shoes with good shock absorption. The ASICS Gel-Kayano 29 and New Balance 990v5 are excellent options!"
            ],
            trending: [
                "🔥 Right now, the Nike Air Max 270 React is our #1 trending shoe! It's got amazing comfort and style. The Jordan 1 Retro High is also super popular!",
                "The hottest trends include chunky sneakers and retro styles. Check out our trending section for the latest!"
            ],
            sizing: [
                "📏 For the best fit, I recommend measuring your feet in the evening when they're slightly swollen. Most of our shoes run true to size, but I can help with specific brands!",
                "Our size guide shows measurements in both US and EU sizes. Nike tends to run slightly small, while Adidas runs true to size. Need help with a specific shoe?"
            ],
            price: [
                "💰 Our shoes range from $60 to $220. We often have sales and discounts - check out our featured collection for great deals!",
                "Looking for budget-friendly options? The Converse Chuck Taylor ($65) and Vans Old Skool ($60) are great value picks!"
            ],
            help: [
                "I can help you with:\n• Finding shoes by style or brand\n• Size recommendations\n• Current deals and trending items\n• Product information\n• Order support",
                "Need assistance? I'm here to help with shoe recommendations, sizing, pricing, or any questions about our products!"
            ],
            default: [
                "That's a great question! 🤔 Let me help you find what you're looking for. Could you tell me more about what type of shoes you need?",
                "I'd love to help! Are you looking for running shoes, casual wear, or something specific? I can recommend the perfect pair!",
                "Interesting! 😊 I can help you find shoes, check sizes, or answer questions about our products. What would you like to know?"
            ]
        };
        
        function toggleChat() {
            const chatWindow = document.getElementById('chat-window');
            const chatIcon = document.getElementById('chat-icon');
            const closeIcon = document.getElementById('close-icon');
            const notification = document.getElementById('chat-notification');
            
            chatOpen = !chatOpen;
            
            if (chatOpen) {
                chatWindow.classList.remove('hidden');
                chatWindow.style.opacity = '0';
                chatWindow.style.transform = 'translateY(20px)';
                
                
                setTimeout(() => {
                    chatWindow.style.opacity = '1';
                    chatWindow.style.transform = 'translateY(0)';
                }, 10);
                
                chatIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                notification.classList.add('hidden');
                
               
                setTimeout(() => {
                    const input = document.getElementById('chat-input');
                    input.focus();
                    
                    if (chatMessages.length === 0) {
                        addMessage("Hi! 👋 I'm your SoleVibe assistant. I can help you find the perfect shoes, check sizes, or answer any questions!");
                    }
                }, 300);
            } else {
                chatWindow.style.opacity = '0';
                chatWindow.style.transform = 'translateY(20px)';
                
            
                setTimeout(() => {
                    chatWindow.classList.add('hidden');
                }, 300);
                
                chatIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        }
       
        document.addEventListener('click', function(event) {
            const chatWindow = document.getElementById('chat-window');
            const chatToggle = document.getElementById('chat-toggle');
            
            if (chatOpen && !chatWindow.contains(event.target) && !chatToggle.contains(event.target)) {
                toggleChat();
            }
        });
        
        function addMessage(message, isUser = false) {
            const messagesContainer = document.getElementById('chat-messages');
            const messageDiv = document.createElement('div');
            
            if (isUser) {
                messageDiv.className = 'flex justify-end';
                messageDiv.innerHTML = `
                    <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl rounded-tr-md p-3 max-w-xs shadow-sm">
                        <p>${message}</p>
                    </div>
                `;
            } else {
                messageDiv.className = 'flex items-start space-x-2';
                messageDiv.innerHTML = `
                    <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                        </svg>
                    </div>
                    <div class="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm max-w-xs">
                        <p class="text-gray-800">${message}</p>
                    </div>
                `;
            }
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        function showTypingIndicator() {
            const indicator = document.getElementById('typing-indicator');
            indicator.classList.remove('hidden');
            
            const messagesContainer = document.getElementById('chat-messages');
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        function hideTypingIndicator() {
            const indicator = document.getElementById('typing-indicator');
            indicator.classList.add('hidden');
        }
        
        function getBotResponse(userMessage) {
            const message = userMessage.toLowerCase();
            
            if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
                return getRandomResponse('greetings');
            } else if (message.includes('running') || message.includes('run') || message.includes('jog')) {
                return getRandomResponse('running');
            } else if (message.includes('trending') || message.includes('popular') || message.includes('hot')) {
                return getRandomResponse('trending');
            } else if (message.includes('size') || message.includes('fit') || message.includes('sizing')) {
                return getRandomResponse('sizing');
            } else if (message.includes('price') || message.includes('cost') || message.includes('cheap') || message.includes('expensive')) {
                return getRandomResponse('price');
            } else if (message.includes('help') || message.includes('assist') || message.includes('support')) {
                return getRandomResponse('help');
            } else if (message.includes('nike')) {
                return "Nike is one of our top brands! 👟 The Air Max 270 and Air Force 1 are customer favorites. Would you like to see our Nike collection?";
            } else if (message.includes('adidas')) {
                return "Adidas makes amazing shoes! ⚡ The Ultraboost 22 and Stan Smith are incredibly popular. Want to check them out?";
            } else if (message.includes('jordan')) {
                return "Jordan shoes are iconic! 🏀 The Jordan 1 Retro High is a classic. Perfect for both style and comfort!";
            } else if (message.includes('thank')) {
                return "You're very welcome! 😊 Is there anything else I can help you with today?";
            } else if (message.includes('bye') || message.includes('goodbye')) {
                return "Thanks for chatting! 👋 Feel free to reach out anytime you need help finding the perfect shoes!";
            } else {
                return getRandomResponse('default');
            }
        }
        
        function getRandomResponse(category) {
            const responses = chatResponses[category];
            return responses[Math.floor(Math.random() * responses.length)];
        }
        
        function sendMessage(message) {
            if (!message.trim()) return;
         
            addMessage(message, true);
            
            
            document.getElementById('chat-input').value = '';
            
            
            showTypingIndicator();
            
            
            setTimeout(() => {
                hideTypingIndicator();
                const response = getBotResponse(message);
                addMessage(response);
            }, 1000 + Math.random() * 1000);
        }
        
        function handleQuickAction(message) {
            sendMessage(message);
        }
        
       
        function showChatNotification() {
            setTimeout(() => {
                if (!chatOpen) {
                    const notification = document.getElementById('chat-notification');
                    notification.classList.remove('hidden');
                }
            }, 5000);
        }

        document.addEventListener('DOMContentLoaded', function() {
        
            initHeroSlider();
            
            
            const prevBtn = document.getElementById('prev-slide');
            const nextBtn = document.getElementById('next-slide');
            const toggle3DBtn = document.getElementById('toggle-3d');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    stopAutoSlide();
                    prevSlide();
                    setTimeout(startAutoSlide, 5000);
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    stopAutoSlide();
                    nextSlide();
                    setTimeout(startAutoSlide, 5000);
                });
            }
            
            if (toggle3DBtn) {
                toggle3DBtn.addEventListener('click', toggle3D);
            }
            
            
            const sliderContainer = document.querySelector('.hero-shoe-container');
            if (sliderContainer) {
                sliderContainer.addEventListener('mouseenter', stopAutoSlide);
                sliderContainer.addEventListener('mouseleave', () => {
                    if (!isRotating) startAutoSlide();
                });
            }
            
           
            loadShoes();
            
           
            const loadMoreBtn = document.getElementById('load-more');
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', loadShoes);
            }
            
    
            const cartToggle = document.getElementById('cart-toggle');
            const closeCartBtn = document.getElementById('close-cart');
            const cartOverlay = document.getElementById('cart-overlay');
            
            if (cartToggle) cartToggle.addEventListener('click', toggleCart);
            if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
            if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
            
            
            const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuToggle && mobileMenu) {
                mobileMenuToggle.addEventListener('click', () => {
                    mobileMenu.classList.toggle('open');
                });
            }
            
        
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', handleContactForm);
            }
            
        
            const newsletterBtn = document.querySelector('footer button');
            if (newsletterBtn) {
                newsletterBtn.addEventListener('click', handleNewsletterSubscription);
            }
            
    
            updateCartUI();
            
            
            const chatToggle = document.getElementById('chat-toggle');
            const chatInput = document.getElementById('chat-input');
            const sendButton = document.getElementById('send-message');
            const quickActionBtns = document.querySelectorAll('.quick-action-btn');
            
            if (chatToggle) {
                chatToggle.addEventListener('click', toggleChat);
            }
            
            if (chatInput) {
              
                chatInput.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        const message = this.value.trim();
                        if (message) {
                            sendMessage(message);
                        }
                    }
                });

                
                chatInput.addEventListener('input', function() {
                    this.style.height = 'auto';
                    this.style.height = (this.scrollHeight) + 'px';
                });

                
                chatInput.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                        toggleChat();
                    }
                });
            }
            
            if (sendButton) {
                sendButton.addEventListener('click', function() {
                    const message = document.getElementById('chat-input').value;
                    sendMessage(message);
                });
            }
            
            quickActionBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const message = this.dataset.message;
                    handleQuickAction(message);
                });
            });
            
            
            showChatNotification();
        });
