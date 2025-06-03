import fs from 'fs';
import path from 'path';

export function generateUserData() {
  const email = `saso_${Date.now()}@mail.com`;
  const userData = {
    name: 'Saso',
    email,
    password: 'Test1234!',
    title: 'Mr',
    birth_date: '1',
    birth_month: 'January',
    birth_year: '1990',
    firstname: 'Saso',
    lastname: 'Trpovski',
    company: 'QA Co',
    address1: 'Test Address',
    address2: 'Suite 1',
    country: 'Canada',
    zipcode: '1000',
    state: 'Skopje',
    city: 'Skopje',
    mobile_number: '071123456'
  };

  const filePath = path.resolve(__dirname, '../data/testUsers.json');
  fs.writeFileSync(filePath, JSON.stringify(userData, null, 2));
  return userData;
}