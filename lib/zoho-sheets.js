import dotenv from 'dotenv';

dotenv.config();

class ZohoSheetsAPI {
  constructor() {
    this.clientId = process.env.ZOHO_CLIENT_ID;
    this.clientSecret = process.env.ZOHO_CLIENT_SECRET;
    this.dataCenter = process.env.ZOHO_DATA_CENTER || 'com';
    this.redirectUri = 'https://whiskeyshoresbbq.com/auth/callback';
  }

  getAuthorizationUrl() {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      scope: 'ZohoSheet.dataAPI.READ',
      redirect_uri: this.redirectUri,
      access_type: 'offline',
      prompt: 'consent'
    });
    return `https://accounts.zoho.${this.dataCenter}/oauth/v2/auth?${params.toString()}`;
  }
}

export default ZohoSheetsAPI;