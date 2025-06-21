import fs from 'fs';
import path from 'path';

export async function getFilenames() {
  const dirPath = path.join(process.cwd(), 'public/company-logos');
  const filenames = fs.readdirSync(dirPath, { withFileTypes: true })
    .filter(file => file.isFile())
    .map(file => file.name);
  return filenames;
}