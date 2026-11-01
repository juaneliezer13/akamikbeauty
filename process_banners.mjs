import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outDir = './public/images/banners';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Mapping of category / skin keys to source files
const bannerSources = [
  {
    key: 'limpiadores',
    category: 'Limpiadores',
    desktopSrc: '../akami-docs/assets/banners/LIMPIADORES/Sin título-1-07.png',
    mobileSrc: '../akami-docs/assets/banners/LIMPIADORES/Sin título-1-05.png',
  },
  {
    key: 'tonicos',
    category: 'Tónicos & Esencias',
    desktopSrc: '../akami-docs/assets/banners/TÓNICOS/Sin título-1-11.png',
    mobileSrc: '../akami-docs/assets/banners/TÓNICOS/Sin título-1-09.png',
  },
  {
    key: 'serums',
    category: 'Sérums',
    desktopSrc: '../akami-docs/assets/banners/SERUMS/Sin título-1-15.png',
    mobileSrc: '../akami-docs/assets/banners/SERUMS/Sin título-1-13.png',
  },
  {
    key: 'hidratantes',
    category: 'Hidratantes',
    desktopSrc: '../akami-docs/assets/banners/HIDRATANTES/Sin título-1-19.png',
    mobileSrc: '../akami-docs/assets/banners/HIDRATANTES/Sin título-1-17.png',
  },
  {
    key: 'protectores',
    category: 'Protector Solar',
    desktopSrc: '../akami-docs/assets/banners/PROTECTORES/Sin título-1-23.png',
    mobileSrc: '../akami-docs/assets/banners/PROTECTORES/Sin título-1-21.png',
  },
  {
    key: 'mascarillas',
    category: 'Mascarillas',
    desktopSrc: '../akami-docs/assets/banners/MASCARILLAS/Sin título-1-27.png',
    mobileSrc: '../akami-docs/assets/banners/MASCARILLAS/Sin título-1-25.png',
  },
  // Skin types
  {
    key: 'acne',
    category: 'Tendencia al Acné',
    desktopSrc: '../akami-docs/assets/banners/POR TIPO DE PIEL/ACNÉ/Sin título-1-19.png',
    mobileSrc: '../akami-docs/assets/banners/POR TIPO DE PIEL/ACNÉ/Sin título-1-17.png',
  },
  {
    key: 'grasa-mixta',
    category: 'Piel Grasa/Mixta',
    desktopSrc: '../akami-docs/assets/banners/POR TIPO DE PIEL/GRASA MIXTA/Sin título-1-15.png',
    mobileSrc: '../akami-docs/assets/banners/POR TIPO DE PIEL/GRASA MIXTA/Sin título-1-13.png',
  },
  {
    key: 'piel-seca',
    category: 'Piel Seca',
    desktopSrc: '../akami-docs/assets/banners/POR TIPO DE PIEL/PIEL SECA/Sin título-1-11.png',
    mobileSrc: '../akami-docs/assets/banners/POR TIPO DE PIEL/PIEL SECA/Sin título-1-09.png',
  },
  {
    key: 'piel-sensible',
    category: 'Piel Sensible/Rojeces',
    desktopSrc: '../akami-docs/assets/banners/POR TIPO DE PIEL/PIEL SENCIBLE/Sin título-1-07.png',
    mobileSrc: '../akami-docs/assets/banners/POR TIPO DE PIEL/PIEL SENCIBLE/Sin título-1-05.png',
  },
];

async function processAll() {
  console.log('Processing responsive banners...');
  for (const b of bannerSources) {
    console.log(`Processing ${b.key}...`);
    
    // Desktop: 1920 width, quality 85
    const deskOut = path.join(outDir, `${b.key}-desktop.webp`);
    await sharp(b.desktopSrc)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(deskOut);

    // Mobile: 900 width, quality 85
    const mobOut = path.join(outDir, `${b.key}-mobile.webp`);
    await sharp(b.mobileSrc)
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(mobOut);

    const statDesk = fs.statSync(deskOut);
    const statMob = fs.statSync(mobOut);
    console.log(`  -> Desktop: ${(statDesk.size / 1024).toFixed(1)} KB`);
    console.log(`  -> Mobile: ${(statMob.size / 1024).toFixed(1)} KB`);
  }

  // Also create a "todos" default banner using the curated beauty image
  // We can fetch or optimize the default hero image locally too
  console.log('All banners processed successfully!');
}

processAll().catch(err => {
  console.error(err);
  process.exit(1);
});
