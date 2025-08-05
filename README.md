# Eldho & Christeena's Wedding Website

A beautiful, responsive wedding website with a countdown timer to August 30th, 2025. Features a modern black and white design with elegant animations and a photo gallery.

## Features

- ✨ **Responsive Design** - Works perfectly on all devices
- ⏰ **Live Countdown Timer** - Counts down to August 30th, 2025
- 📸 **Photo Gallery** - Ready for your wedding photos
- 🎨 **Elegant Black & White Theme** - Modern and sophisticated
- 📱 **Mobile-Friendly** - Optimized for smartphones and tablets
- 🎭 **Smooth Animations** - Beautiful transitions and effects
- 🧭 **Smooth Navigation** - Easy-to-use navigation menu

## How to Use

1. **Open the Website**: Simply open `index.html` in your web browser
2. **View the Countdown**: The timer automatically counts down to August 30th, 2025
3. **Navigate**: Use the navigation menu to explore different sections

## Customization Guide

### Adding Your Photos

To add your photos to the gallery:

1. **Replace Placeholder Images**: 
   - Replace the placeholder divs in the gallery section with actual images
   - Example:
   ```html
   <div class="gallery-item">
       <img src="path/to/your/photo.jpg" alt="Your photo description">
   </div>
   ```

2. **Image Optimization**:
   - Use JPG format for photos
   - Recommended size: 600x600 pixels or larger
   - Keep file sizes under 500KB for faster loading

### Updating Wedding Details

Edit the details section in `index.html`:

```html
<div class="detail-card">
    <div class="detail-icon">
        <i class="fas fa-calendar-alt"></i>
    </div>
    <h3>Date & Time</h3>
    <p>August 30th, 2025</p>
    <p>6:00 PM</p> <!-- Add your time here -->
</div>
```

### Changing the Wedding Date

To change the countdown date, edit the JavaScript in `script.js`:

```javascript
const weddingDate = new Date('August 30, 2025 00:00:00').getTime();
```

### Customizing Colors

The website uses a black and white theme. To customize colors, edit `styles.css`:

- **Primary Black**: `#000`
- **Secondary Gray**: `#666`
- **Background Light**: `#f8f9fa`
- **Accent Color**: `#ff6b6b` (for hearts)

### Adding More Sections

You can easily add new sections by following the existing pattern:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">Your Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

## File Structure

```
wedding-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress photos before uploading
2. **Use WebP Format**: For better compression (with fallback)
3. **Host Images**: Consider using a CDN for better performance
4. **Minimize Files**: Compress CSS and JS for production

## Deployment

To deploy your website:

1. **GitHub Pages**: Upload to GitHub and enable Pages
2. **Netlify**: Drag and drop your folder to Netlify
3. **Vercel**: Connect your GitHub repository
4. **Traditional Hosting**: Upload files to your web server

## Support

If you need help customizing the website:

1. Check this README for common customizations
2. Edit the HTML, CSS, and JavaScript files as needed
3. Test changes in your browser before deploying

## Credits

- **Fonts**: Google Fonts (Playfair Display, Montserrat)
- **Icons**: Font Awesome
- **Design**: Custom black and white wedding theme

---

**Made with ❤️ for Eldho & Christeena's special day**

*August 30th, 2025* 