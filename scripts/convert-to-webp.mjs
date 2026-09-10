import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';

const images = [
  'src/img/Daniel Bezerra.png',
  'src/img/site-google-ads-og.png',
  'src/img/portfolio/academia-hazak-fit.png',
  'src/img/portfolio/casa-e-bebe.png',
  'src/img/portfolio/clinica-SIM.png',
  'src/img/portfolio/dra. ane elise.png',
  'src/img/portfolio/grafica-inovaprint.png',
  'src/img/portfolio/juninho personal.png',
];

async function convertAll() {
  console.log('Iniciando conversão para WebP...\n');
  let totalOriginal = 0;
  let totalWebp = 0;

  for (const imgPath of images) {
    try {
      const ext = extname(imgPath);
      const outPath = join(dirname(imgPath), `${basename(imgPath, ext)}.webp`);
      
      const originalStat = await stat(imgPath);
      const originalSize = originalStat.size;
      totalOriginal += originalSize;

      await sharp(imgPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outPath);

      const webpStat = await stat(outPath);
      const webpSize = webpStat.size;
      totalWebp += webpSize;

      const reduction = (((originalSize - webpSize) / originalSize) * 100).toFixed(1);
      console.log(`✓ ${imgPath}`);
      console.log(`  ${(originalSize / 1024).toFixed(1)} KB -> ${(webpSize / 1024).toFixed(1)} KB (-${reduction}%)\n`);
    } catch (err) {
      console.error(`Erro ao converter ${imgPath}:`, err.message);
    }
  }

  const totalReduction = (((totalOriginal - totalWebp) / totalOriginal) * 100).toFixed(1);
  console.log('--------------------------------------------------');
  console.log(`Total original: ${(totalOriginal / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total WebP:     ${(totalWebp / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Redução total:  -${totalReduction}%`);
}

convertAll();
