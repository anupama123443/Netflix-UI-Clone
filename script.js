// Movie data
const movies = {
    trending: [
        { title: "Blockbuster Action", rating: "8.5" },
        { title: "Drama Series", rating: "8.2" },
        { title: "Comedy Night", rating: "7.9" },
        { title: "Thriller Mystery", rating: "8.7" },
        { title: "Romance Story", rating: "8.0" },
    ],
    popular: [
        { title: "Breaking Series", rating: "9.0" },
        { title: "Crown Jewel", rating: "8.8" },
        { title: "Stranger Calls", rating: "8.6" },
        { title: "The Witcher", rating: "8.3" },
        { title: "Dark Forest", rating: "8.4" },
        { title: "Glass Onion", rating: "8.1" },
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    setupCardInteractions();
    setupScrollBehavior();
    setupFAQInteractions();
});

// Setup FAQ interactions
function setupFAQInteractions() {
    const faqCards = document.querySelectorAll('.faq-card');
    
    faqCards.forEach(card => {
        card.addEventListener('click', function() {
            // Close other cards
            faqCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });
            // Toggle current card
            this.classList.toggle('active');
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Get Started button
    const getStartedBtn = document.querySelector('.get-started');
    getStartedBtn.addEventListener('click', function() {
        const emailInput = document.querySelector('.email-address');
        if (emailInput.value) {
            alert(`Welcome! Email registered: ${emailInput.value}`);
            emailInput.value = '';
        } else {
            alert('Please enter an email address');
        }
    });

    // Email input - Allow Enter key
    const emailInput = document.querySelector('.email-address');
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            getStartedBtn.click();
        }
    });

    // Sign In button
    const signInBtn = document.querySelector('.sign-in');
    signInBtn.addEventListener('click', function() {
        alert('Sign In functionality would open here');
    });

    // Filter dropdowns
    const countryFilter = document.getElementById('countryFilter');
    const typeFilter = document.getElementById('typeFilter');

    countryFilter.addEventListener('change', function() {
        console.log('Selected country:', this.value);
        showNotification(`Showing content for: ${this.value || 'India'}`);
    });

    typeFilter.addEventListener('change', function() {
        console.log('Selected type:', this.value);
        showNotification(`Showing: ${this.value || 'Movies'}`);
    });

    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('.category-content').textContent;
            showNotification(`Loading ${category} content...`);
        });
    });
}

// Setup card interactions
function setupCardInteractions() {
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        // Play button
        const playBtn = card.querySelector('.play-btn');
        if (playBtn) {
            playBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const title = card.querySelector('.movie-title').textContent;
                showNotification(`Playing: ${title}`);
            });
        }

        // Add button
        const addBtn = card.querySelector('.add-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const title = card.querySelector('.movie-title').textContent;
                this.textContent = '✓';
                setTimeout(() => {
                    this.textContent = '✚';
                }, 1500);
                showNotification(`${title} added to your list`);
            });
        }

        // Card click
        card.addEventListener('click', function() {
            const title = this.querySelector('.movie-title').textContent;
            showMovieDetails(title);
        });
    });
}

// Scroll behavior for movie cards
function setupScrollBehavior() {
    const trendingContainer = document.getElementById('trendingContainer');
    
    if (trendingContainer) {
        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                trendingContainer.scrollBy({ left: -220, behavior: 'smooth' });
            } else if (e.key === 'ArrowRight') {
                trendingContainer.scrollBy({ left: 220, behavior: 'smooth' });
            }
        });
    }
}

// Show notification toast
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #E50914;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Show movie details modal
function showMovieDetails(title) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background-color: #1a1a1a;
        padding: 30px;
        border-radius: 10px;
        max-width: 500px;
        color: white;
        position: relative;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
    `;
    closeBtn.addEventListener('click', () => modal.remove());

    const title_el = document.createElement('h2');
    title_el.textContent = title;
    title_el.style.marginBottom = '15px';

    const details = document.createElement('p');
    details.innerHTML = `
        <strong>Rating:</strong> 8.5/10<br>
        <strong>Year:</strong> 2023<br>
        <strong>Duration:</strong> 2h 15m<br>
        <br>
        <strong>Description:</strong> An amazing story that will keep you on the edge of your seat. 
        Perfect for entertainment lovers.
    `;
    details.style.lineHeight = '1.8';

    const watchBtn = document.createElement('button');
    watchBtn.textContent = '▶ Watch Now';
    watchBtn.style.cssText = `
        background-color: #E50914;
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 20px;
        width: 100%;
        font-size: 1rem;
    `;
    watchBtn.addEventListener('click', () => {
        showNotification(`Now playing: ${title}`);
        modal.remove();
    });

    content.appendChild(closeBtn);
    content.appendChild(title_el);
    content.appendChild(details);
    content.appendChild(watchBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Add CSS animations
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Search functionality
function searchMovies(query) {
    console.log('Searching for:', query);
    showNotification(`Searching for: ${query}`);
}

// Add to favorites
function addToFavorites(movieTitle) {
    showNotification(`${movieTitle} added to favorites`);
}

// Rating system
function rateMovie(movieTitle, rating) {
    showNotification(`You rated ${movieTitle}: ${rating} stars`);
}

// Export functions for use in HTML
window.searchMovies = searchMovies;
window.addToFavorites = addToFavorites;
window.rateMovie = rateMovie;
