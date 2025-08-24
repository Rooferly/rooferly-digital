import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Current directory:', __dirname);
console.log('Loading .env.local from:', join(__dirname, '.env.local'));

// Load environment variables
dotenv.config({ path: '.env.local' });

console.log('\nEnvironment Variables:');
console.log('ZOHO_CLIENT_ID:', process.env.ZOHO_CLIENT_ID);
console.log('ZOHO_CLIENT_SECRET:', process.env.ZOHO_CLIENT_SECRET);
console.log('ZOHO_DATA_CENTER:', process.env.ZOHO_DATA_CENTER);
console.log('ZOHO_WORKBOOK_NAME:', process.env.ZOHO_WORKBOOK_NAME);
console.log('ZOHO_SHEET_NAME:', process.env.ZOHO_SHEET_NAME);

