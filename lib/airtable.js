// airtable.js
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appKgpEdY2KYZ7WGj');

export default base('versaDesignEngineers');
