import axios from 'axios';
const BASE_URL = `/api/admin`;
const SALER_URL = `/api/saler`;
const WAREHOUSE_URL = `/api/warehouse`;

export const getAll = async () => {
  const response = await axios.get(`${BASE_URL}/importing`);
  return response.data;
}
export const getAllBySaler = async () => {
  const response = await axios.get(`${SALER_URL}/importing`);
  return response.data;
}
export const getAllByWarehouse = async () => {
  const response = await axios.get(`${WAREHOUSE_URL}/importing`);
  return response.data;
}

export const save = async (value) => {
  const response = await axios.post(`${BASE_URL}/importing`, value)
  return response.status;
}
export const saveByWarehouse = async (value) => {
  const response = await axios.post(`${WAREHOUSE_URL}/importing`, value, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.status;
}

export const getDailyImportingBySaler = async () => {
  const response = await axios.get(`${SALER_URL}/importing/daily`);
  return response.data;
}
export const getMonthlyImportingBySaler = async () => {
  const response = await axios.get(`${SALER_URL}/importing/month`);
  return response.data;
}
export const getDailyImportingByWarehouse = async () => {
  const response = await axios.get(`${WAREHOUSE_URL}/importing/daily`);
  return response.data;
}
export const getMonthlyImportingByWarehouse = async () => {
  const response = await axios.get(`${WAREHOUSE_URL}/importing/month`);
  return response.data;
}

export const getMaxId = async () => {
  const response = await axios.get(`${BASE_URL}/importing/maxId`);
  return response.data;
}
export const getMaxIdByWarehouse = async () => {
  const response = await axios.get(`${WAREHOUSE_URL}/importing/maxId`);
  return response.data;
}