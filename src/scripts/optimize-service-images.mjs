import {readdir, stat} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imageDirectory = path.join(
  process.cwd(),
  'src/assets/images/services'
);

const files = await readdir(imageDirectory);
const pngFiles = files.filter((file) =>
  file.toLowerCase().endsWith('.png')
);

if (pngFiles.length === 0) {
  console.log('No PNG service images were found.');
  process.exit(0);
}

for (const filename of pngFiles) {
  const inputPath = path.join(imageDirectory, filename);
  const outputFilename = filename.replace(/\.png$/i, '.webp');
  const outputPath = path.join(imageDirectory, outputFilename);

  const before = await stat(inputPath);

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 1400,
      withoutEnlargement: true,
    })
    .webp({
      quality: 85,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputPath);

  const after = await stat(outputPath);

  const beforeKb = Math.round(before.size / 1024);
  const afterKb = Math.round(after.size / 1024);
  const reduction = Math.round(
    ((before.size - after.size) / before.size) * 100
  );

  console.log(
    `${filename}: ${beforeKb}KB → ${afterKb}KB (${reduction}% smaller)`
  );
}

console.log('Service image optimization completed.');