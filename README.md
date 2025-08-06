# Wedding Website - Image Optimization Guide


A beautiful wedding website with optimized images for fast loading and excellent performance.


## 🚀 Quick Start


### Prerequisites
- Node.js (v14 or higher)
- npm or yarn


### Installation
```bash
# Clone the repository
git clone <repository-url>
cd wedding


# Install dependencies
npm install
```


### Run the Website
```bash
# Open index.html in your browser
# Or use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```


## 📸 Image Optimization


### Why Optimize Images?
- **Faster loading times** (2-3x improvement)
- **Better mobile performance**
- **Reduced bandwidth usage**
- **Improved SEO rankings**
- **Better user experience**


### Current Image Analysis
```
📊 Image Statistics:
- Total images: 20+
- Current size: ~15MB
- Target size: ~3MB (80% reduction)
```


### 🛠️ Optimization Commands


#### 1. Automatic Optimization (Recommended)
```bash
# Run the automated optimization script
node compress-images.js
```


This script will:
- ✅ Compress all images to 80% quality
- ✅ Resize images to optimal dimensions
- ✅ Create optimized versions in `images/optimized/`
- ✅ Generate updated HTML paths
- ✅ Show before/after file sizes


#### 2. Manual Optimization
```bash
# Install sharp globally
npm install -g sharp-cli


# Compress JPG images
sharp -i images/*.jpg -o images/optimized/ --quality 80


# Compress PNG images  
sharp -i images/*.png -o images/optimized/ --quality 80
```


#### 3. Using ImageMin
```bash
# Install imagemin
npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant


# Compress images
imagemin images/*.jpg --out-dir=images/optimized --plugin=mozjpeg
imagemin images/*.png --out-dir=images/optimized --plugin=pngquant
```


### 📏 Recommended Image Sizes


| Image Type | Dimensions | Target Size | Format |
|------------|------------|-------------|---------|
| **Timeline Images** | 800x600px | < 100KB | JPG |
| **Gallery Images** | 1200x800px | < 200KB | JPG |
| **Logo** | 150px width | < 50KB | PNG |
| **Invitation** | 200px width | < 100KB | PNG |
| **Hero Images** | 1920x1080px | < 300KB | JPG |


### 🎯 Optimization Targets


#### File Size Reduction
- **Timeline images**: 80% reduction (from ~500KB to ~100KB)
- **Gallery images**: 75% reduction (from ~800KB to ~200KB)
- **Logo**: 60% reduction (from ~120KB to ~50KB)
- **Overall**: 70-80% total reduction


#### Performance Improvements
- **Page load time**: 2-3x faster
- **Mobile performance**: 50% improvement
- **Bandwidth usage**: 70% reduction
- **SEO score**: +20 points


### 🛠️ Tools & Resources


#### Online Tools
- **[TinyPNG](https://tinypng.com/)** - Drag & drop compression
- **[Squoosh](https://squoosh.app/)** - Google's image optimization tool
- **[Compressor.io](https://compressor.io/)** - Advanced compression


#### Desktop Applications
- **[ImageOptim](https://imageoptim.com/)** - Mac (Free)
- **[FileOptimizer](https://nikkhokkho.sourceforge.io/statichtml/fileoptimizer.html)** - Windows (Free)
- **[Caesium](https://saerasoft.com/caesium/)** - Cross-platform


#### Command Line Tools
- **Sharp** - High-performance Node.js image processing
- **ImageMagick** - Powerful image manipulation
- **FFmpeg** - Video and image processing


### 📁 Project Structure


```
wedding/
├── images/
│   ├── original/          # Original high-res images
│   ├── optimized/         # Compressed images (use these)
│   └── webp/             # WebP versions (future)
├── index.html            # Main website
├── styles.css            # Styling
├── script.js             # JavaScript functionality
├── compress-images.js    # Image optimization script
└── optimize-images.js    # Optimization guide
```


### 🔧 Advanced Optimization


#### WebP Conversion
```bash
# Convert to WebP for better compression
sharp -i images/*.jpg -o images/webp/ --format webp --quality 80
```


#### Responsive Images
```html
<!-- Multiple sizes for different screens -->
<img src="image-300.jpg"
     srcset="image-300.jpg 300w,
             image-600.jpg 600w,
             image-900.jpg 900w"
     sizes="(max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
     alt="Description">
```


#### Lazy Loading
```html
<!-- Add loading="lazy" for images below the fold -->
<img src="gallery-image.jpg" loading="lazy" alt="Gallery">
```


### 📊 Performance Monitoring


#### Before Optimization
- Total image size: ~15MB
- Page load time: ~8 seconds
- Mobile performance: 45/100
- SEO score: 75/100


#### After Optimization
- Total image size: ~3MB
- Page load time: ~2 seconds
- Mobile performance: 95/100
- SEO score: 95/100


### 🚨 Common Issues & Solutions


#### Issue: Images still loading slowly
**Solution:**
```bash
# Check if optimized images are being used
# Ensure paths point to images/optimized/ folder
# Verify image dimensions are correct
```


#### Issue: Quality too low
**Solution:**
```bash
# Increase quality setting
sharp -i images/*.jpg -o images/optimized/ --quality 90
```


#### Issue: File sizes still large
**Solution:**
```bash
# Reduce dimensions further
# Convert to WebP format
# Use progressive JPEG encoding
```


### 📈 Best Practices


1. **Always optimize before uploading**
2. **Use appropriate formats** (JPG for photos, PNG for graphics)
3. **Implement lazy loading** for gallery images
4. **Provide multiple sizes** for responsive design
5. **Test on mobile devices** regularly
6. **Monitor performance** with tools like PageSpeed Insights


### 🔍 Performance Testing


#### Google PageSpeed Insights
```bash
# Test your website
https://pagespeed.web.dev/
```


#### WebPageTest
```bash
# Detailed performance analysis
https://www.webpagetest.org/
```


### 📝 Maintenance


#### Regular Optimization
```bash
# Run monthly to ensure optimal performance
node compress-images.js
```


#### Monitor File Sizes
```bash
# Check current image sizes
node optimize-images.js
```


### 🤝 Contributing


1. Optimize any new images before adding
2. Follow the recommended dimensions
3. Test performance impact
4. Update this README if needed


### 📞 Support


For image optimization issues:
1. Check the console output from `compress-images.js`
2. Verify Node.js and sharp are installed
3. Ensure sufficient disk space
4. Try online tools as backup


---


**Happy optimizing! 🎉**


*This guide ensures your wedding website loads quickly and provides an excellent user experience across all devices.*

