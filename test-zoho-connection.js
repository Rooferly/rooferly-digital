import ZohoSheetsAPI from './lib/zoho-sheets.js';
import dotenv from 'dotenv';

dotenv.config();

async function testZohoConnection() {
  console.log('🚀 Testing Zoho Sheets API Connection (OAuth 2.0 Authorization Code Flow)...\n');
  
  try {
    console.log('📋 Environment Variables Check:');
    console.log('ZOHO_CLIENT_ID:', process.env.ZOHO_CLIENT_ID ? '✅ Set' : '❌ Missing');
    console.log('ZOHO_CLIENT_SECRET:', process.env.ZOHO_CLIENT_SECRET ? '✅ Set' : '❌ Missing');
    console.log('ZOHO_DATA_CENTER:', process.env.ZOHO_DATA_CENTER || 'com (default)');
    console.log('ZOHO_WORKBOOK_NAME:', process.env.ZOHO_WORKBOOK_NAME || '❌ Missing');
    console.log('ZOHO_SHEET_NAME:', process.env.ZOHO_SHEET_NAME || '❌ Missing');
    console.log('');

    const zohoAPI = new ZohoSheetsAPI();
    console.log('✅ API client initialized\n');

    console.log('🔗 Authorization URL for user consent:');
    const authUrl = zohoAPI.getAuthorizationUrl();
    console.log(authUrl);
    console.log('');

    console.log('📝 INSTRUCTIONS:');
    console.log('1. Copy the authorization URL above');
    console.log('2. Open it in your browser');
    console.log('3. Sign in to Zoho and authorize the app');
    console.log('4. Copy the authorization code from the redirect URL');
    console.log('5. Run this test again with the code as a parameter');
    console.log('');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testZohoConnection();

