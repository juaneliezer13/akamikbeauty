import fs from 'node:fs';
import sharp from 'sharp';

async function createDefaultBanner() {
  const url = 'https://images.unsplash.com/photo-1709551264845-e9dddd775388?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1600';
  const res = await fetch(url);
  const arrayBuffer = await res.arrayBuffer();
  const buf = Buffer.from(arrayBuffer);

  await sharp(buf)
    .resize({ width: 1920, height: 800, fit: 'cover' })
    .webp({ quality: 86 })
    .toFile('./public/images/banners/todos-desktop.webp');

  await sharp(buf)
    .resize({ width: 900, height: 1125, fit: 'cover' })
    .webp({ quality: 86 })
    .toFile('./public/images/banners/todos-mobile.webp');

  console.log('Default "todos" banner generated successfully!');
}

createDefaultBanner().catch(console.error);
