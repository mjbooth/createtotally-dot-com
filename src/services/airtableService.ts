import axios from 'axios';

const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_PERSONAL_ACCESS_TOKEN = import.meta.env.VITE_AIRTABLE_PERSONAL_ACCESS_TOKEN;
const AIRTABLE_TABLE_AD_VARIANTS = import.meta.env.VITE_AIRTABLE_TABLE_AD_VARIANTS;
const AIRTABLE_TABLE_MEDIA_LIBRARY = import.meta.env.VITE_AIRTABLE_TABLE_MEDIA_LIBRARY;

const airtableApi = axios.create({
  baseURL: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`,
  headers: {
    Authorization: `Bearer ${AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
  },
});

export const fetchAdVariants = async () => {
  const response = await airtableApi.get(`/${AIRTABLE_TABLE_AD_VARIANTS}`);
  return response.data.records;
};

export const fetchMediaLibrary = async () => {
  const response = await airtableApi.get(`/${AIRTABLE_TABLE_MEDIA_LIBRARY}`);
  return response.data.records;
};