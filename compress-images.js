const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Image Compression Script for Wedding Website');
console.log('==============================================');
console.log('');

// Check if sharp is available
let sharpAvailable = false;
try {
    require('sharp');
    sharpAvailable = true;
    console.log('✅ Sharp library found - ready for compression');
} catch (e) {
    console.log('❌ Sharp library not found');
    console.log('Install it with: npm install sharp');
    console.log('');
}

// Function to get file size in KB
function getFileSize(filePath) {
    const stats = fs.statSync(filePath);
    return Math.round(stats.size / 1024);
}

// Function to compress images using sharp
async function compressImage(inputPath, outputPath, quality = 80, width = null, height = null) {
    if (!sharpAvailable) {
        console.log(`⚠️  Skipping ${inputPath} - sharp not available`);
        return;
    }

    try {
        const sharp = require('sharp');
        let pipeline = sharp(inputPath);

        if (width || height) {
            pipeline = pipeline.resize(width, height, {
                fit: 'cover',
                position: 'center'
            });
        }

        const ext = path.extname(inputPath).toLowerCase();
        if (ext === '.jpg' || ext === '.jpeg') {
            await pipeline.jpeg({ quality }).toFile(outputPath);
        } else if (ext === '.png') {
            await pipeline.png({ quality }).toFile(outputPath);
        } else if (ext === '.webp') {
            await pipeline.webp({ quality }).toFile(outputPath);
        }

        const originalSize = getFileSize(inputPath);
        const compressedSize = getFileSize(outputPath);
        const reduction = Math.round(((originalSize - compressedSize) / originalSize) * 100);
        
        console.log(`✅ ${path.basename(inputPath)}: ${originalSize}KB → ${compressedSize}KB (${reduction}% reduction)`);
    } catch (error) {
        console.log(`❌ Error compressing ${inputPath}: ${error.message}`);
    }
}

// Function to create optimized versions
async function createOptimizedVersions() {
    const imagesDir = './images';
    const optimizedDir = './images/optimized';
    
    // Create optimized directory
    if (!fs.existsSync(optimizedDir)) {
        fs.mkdirSync(optimizedDir, { recursive: true });
    }

    console.log('📁 Creating optimized image versions...');
    console.log('');

    const files = fs.readdirSync(imagesDir);
    const imageFiles = files.filter(file => 
        file.match(/\.(jpg|jpeg|png|webp)$/i) && 
        !file.includes('optimized') &&
        !file.includes('webp')
    );

    for (const file of imageFiles) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(optimizedDir, file);
        
        // Determine target size based on image type
        let targetWidth = null;
        let targetHeight = null;
        
        if (file.includes('EC-') || file.includes('L')) {
            // Timeline and gallery images
            targetWidth = 800;
            targetHeight = 600;
        } else if (file.includes('logo')) {
            // Logo images
            targetWidth = 150;
            targetHeight = null;
        } else if (file.includes('you-are-invited')) {
            // Invitation image
            targetWidth = 200;
            targetHeight = null;
        } else {
            // Other images
            targetWidth = 1200;
            targetHeight = 800;
        }

        await compressImage(inputPath, outputPath, 80, targetWidth, targetHeight);
    }

    console.log('');
    console.log('🎉 Optimization complete!');
    console.log('');
    console.log('📋 Next steps:');
    console.log('1. Replace image paths in HTML with optimized versions');
    console.log('2. Test the website performance');
    console.log('3. Consider converting to WebP format for even better compression');
    console.log('');
}

// Function to generate HTML with optimized images
function generateOptimizedHTML() {
    console.log('📝 Generating HTML with optimized image paths...');
    console.log('');
    
    const htmlContent = `<!-- Optimized Image Paths for index.html -->
<!-- Replace the existing image paths with these optimized versions -->

<!-- Navigation Logo -->
<img src="images/optimized/logo-ec.png" alt="EC Logo" class="logo-image" loading="eager">

<!-- Hero Invitation -->
<img src="images/optimized/you-are-invited.PNG" alt="You are invited" class="invitation-image" loading="eager">

<!-- Timeline Images -->
<img src="images/optimized/EC-244.jpg" alt="We Met" loading="lazy" sizes="200px" srcset="images/optimized/EC-244.jpg 200w, images/optimized/EC-244.jpg 400w">
<img src="images/optimized/EC-278.jpg" alt="Fell in Love" loading="lazy" sizes="200px" srcset="images/optimized/EC-278.jpg 200w, images/optimized/EC-278.jpg 400w">
<img src="images/optimized/EC-209.jpeg" alt="Getting Married" loading="lazy" sizes="200px" srcset="images/optimized/EC-209.jpeg 200w, images/optimized/EC-209.jpeg 400w">

<!-- Gallery Images -->
<img src="images/optimized/61BCDAFB-4A75-4F73-B9AA-E8C214AF4688.JPG" alt="Eldho & Christeena" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" srcset="images/optimized/61BCDAFB-4A75-4F73-B9AA-E8C214AF4688.JPG 300w, images/optimized/61BCDAFB-4A75-4F73-B9AA-E8C214AF4688.JPG 600w, images/optimized/61BCDAFB-4A75-4F73-B9AA-E8C214AF4688.JPG 900w" style="width: 100%; height: 100%; object-fit: cover;">
<img src="images/optimized/L1-EC-336.jpeg" alt="Eldho & Christeena" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" srcset="images/optimized/L1-EC-336.jpeg 300w, images/optimized/L1-EC-336.jpeg 600w, images/optimized/L1-EC-336.jpeg 900w" style="width: 100%; height: 100%; object-fit: cover;">
<img src="images/optimized/L2-EC-322.jpeg" alt="Eldho & Christeena" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" srcset="images/optimized/L2-EC-322.jpeg 300w, images/optimized/L2-EC-322.jpeg 600w, images/optimized/L2-EC-322.jpeg 900w" style="width: 100%; height: 100%; object-fit: cover;">
<img src="images/optimized/L3-EC-358.jpeg" alt="Eldho & Christeena" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" srcset="images/optimized/L3-EC-358.jpeg 300w, images/optimized/L3-EC-358.jpeg 600w, images/optimized/L3-EC-358.jpeg 900w" style="width: 100%; height: 100%; object-fit: cover;">
<img src="images/optimized/L4-EC-241.jpeg" alt="Eldho & Christeena" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" srcset="images/optimized/L4-EC-241.jpeg 300w, images/optimized/L4-EC-241.jpeg 600w, images/optimized/L4-EC-241.jpeg 900w" style="width: 100%; height: 100%; object-fit: cover;">
<img src="images/optimized/L5-EC-312.jpeg" alt="Eldho & Christeena" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" srcset="images/optimized/L5-EC-312.jpeg 300w, images/optimized/L5-EC-312.jpeg 600w, images/optimized/L5-EC-312.jpeg 900w" style="width: 100%; height: 100%; object-fit: cover;">`;

    fs.writeFileSync('optimized-image-paths.html', htmlContent);
    console.log('✅ Generated optimized-image-paths.html with new image paths');
    console.log('');
}

// Main execution
async function main() {
    console.log('📊 Current image analysis:');
    console.log('');
    
    const imagesDir = './images';
    if (fs.existsSync(imagesDir)) {
        const files = fs.readdirSync(imagesDir);
        let totalSize = 0;
        let imageCount = 0;
        
        files.forEach(file => {
            if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
                const stats = fs.statSync(path.join(imagesDir, file));
                const sizeKB = Math.round(stats.size / 1024);
                totalSize += sizeKB;
                imageCount++;
                console.log(`   ${file}: ${sizeKB}KB`);
            }
        });
        
        console.log('');
        console.log(`📈 Total: ${imageCount} images, ${totalSize}KB (${Math.round(totalSize/1024)}MB)`);
        console.log(`🎯 Target: ~${Math.round(totalSize * 0.2)}KB (80% reduction)`);
        console.log('');
    }

    if (sharpAvailable) {
        await createOptimizedVersions();
        generateOptimizedHTML();
    } else {
        console.log('💡 Manual optimization steps:');
        console.log('1. Install sharp: npm install sharp');
        console.log('2. Run this script again');
        console.log('3. Or use online tools like TinyPNG, Squoosh.app');
        console.log('');
    }
}

main().catch(console.error); 