import fs from 'fs';
import path from 'path';
import { generateUserData } from './helpers';

export function getStoredUserData() {
  const filePath = path.resolve(__dirname, '../data/testUsers.json');

  if (!fs.existsSync(filePath) || fs.statSync(filePath).size === 0) {
    console.log('Generating new user because user file is missing or empty...');
    return generateUserData();
  }

  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData);
}
