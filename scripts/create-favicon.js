import sharp from 'sharp';

const imageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_a-01%20%285%29-lfsca34zy35oJRIUSq59gXL7uVAogg.jpg';

async function createFavicon() {
  try {
    // Fetch image from URL
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Create 128x128 favicon and output as base64
    const faviconBuffer = await sharp(buffer)
      .resize(128, 128, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toBuffer();
    
    // Output base64 data URL
    const base64 = faviconBuffer.toString('base64');
    console.log('data:image/png;base64,' + base64);
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon();
