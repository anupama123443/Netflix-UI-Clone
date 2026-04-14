# Netflix UI Clone 🎬

A fully functional Netflix-inspired UI clone built with HTML, CSS, and JavaScript. This project replicates the Netflix landing page and includes interactive features.

## 📋 Features Completed

### 1. **Header & Navigation**
- Responsive navbar with Netflix logo
- Sign In button
- Language selector (English dropdown)
- Professional styling with hover effects

### 2. **Hero Section**
- Eye-catching main banner
- Call-to-action section with email subscription
- Animated text and buttons
- Gradient overlay on background

### 3. **Trending Section**
- Scrollable movie cards (horizontal scroll)
- Filtering options (Country: India/Global, Type: Movies/TV Shows)
- Interactive movie cards with:
  - Play button
  - Add to list button (+)
  - Movie titles

### 4. **Categories Section**
- Browse by 6 categories (Action, Comedy, Drama, Horror, Romance, Sci-Fi)
- Gradient colored category cards
- Hover effects with animation
- Clickable category navigation

### 5. **Popular Shows Section**
- Grid layout with 6 popular content items
- Same interactive card features as trending section
- Responsive design

### 6. **Footer**
- Links organized by category (Company, Help, Legal, Social)
- Professional footer styling
- Copyright information

### 7. **JavaScript Features**
- ✅ Email subscription form with validation
- ✅ Play button functionality
- ✅ Add to list functionality
- ✅ Movie details modal popup
- ✅ Notifications/toast messages
- ✅ Filter dropdown interactions
- ✅ Keyboard navigation (Arrow keys for scrolling)
- ✅ Category clickable navigation
- ✅ Sign In button interaction

### 8. **Responsive Design**
- ✅ Mobile responsive (320px+)
- ✅ Tablet responsive (768px+)
- ✅ Desktop optimized (1200px+)
- ✅ Flexible grid and flexbox layouts

## 📁 Project Structure

```
Netflix-UI-Clone/
├── index.html      # Main HTML file with all sections
├── style.css       # Complete CSS styling with animations
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🎮 How to Use

### 1. **Open the Website**
Simply open `index.html` in your web browser.

### 2. **Hero Section**
- Enter an email address and click "Get Started >" to see a notification
- Click "Sign In" button to simulate login

### 3. **Trending Section**
- Scroll horizontally through movie cards
- Use arrow keys (← →) to navigate
- Click the play button (▶) on a card to play
- Click the plus button (+) to add to your list
- Click on a card to see movie details

### 4. **Filters**
- Select "Global" to change country (shows notification)
- Select "TV Shows" to filter by type

### 5. **Categories**
- Click any category card to navigate
- Each category shows loading notification

### 6. **Popular Shows**
- Same interactions as trending section

## 🎨 Customization

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --netflix-red: #E50914;
    --dark-bg: #141414;
    --light-text: #ffffff;
}
```

### Add Real Images
Replace placeholder images:
```html
<img src="https://via.placeholder.com/200x300?text=Movie+1" alt="Movie">
```
With your own image URLs.

### Modify Movie Data
Edit the `movies` object in `script.js`:
```javascript
const movies = {
    trending: [
        { title: "Your Movie", rating: "8.5" },
        // Add more movies
    ]
};
```

## 🔧 Interactive Elements

| Feature | Action |
|---------|--------|
| Play Button | Shows "Playing: [Movie Name]" notification |
| Add Button | Adds to list and shows checkmark temporarily |
| Movie Card Click | Opens detailed movie modal |
| Category Card Click | Shows category loading notification |
| Filter Dropdown | Shows selected filter notification |
| Email Form | Validates and subscribes email |

## 🎯 What You've Learned

1. ✅ HTML semantic structure
2. ✅ CSS Grid & Flexbox layouts
3. ✅ Responsive design principles
4. ✅ CSS animations & transitions
5. ✅ JavaScript event handling
6. ✅ DOM manipulation
7. ✅ Modal/popup creation
8. ✅ Form validation

## 🚀 Future Enhancements

- Add backend integration for real movie data
- Implement authentication system
- Add user watchlist functionality
- Integrate streaming video
- Add search functionality
- Create admin dashboard
- Add user profiles and recommendations
- Implement dark/light theme toggle

## 📱 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

## 📝 License

This is a learning project. Feel free to modify and use for educational purposes.

---

**Created by:** Your Name  
**Last Updated:** April 2024
