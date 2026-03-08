import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../public/logo-original.jpg');
const outputPath = path.join(__dirname, '../app/icon.png');

async function createFavicon() {
  try {
    await sharp(inputPath)
      .resize(128, 128, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(outputPath);
    
    console.log('Favicon created successfully at:', outputPath);
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon();
