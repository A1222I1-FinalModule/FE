import axios from 'axios';
const BASE_URL = `/api/admin`;
const SALER_URL = `/api/saler`;
const WAREHOUSE_URL = `/api/warehouse`;

export const getAll = async () => {
  const respone = await axios.get(`${BASE_URL}/importing`);
  return respone.data;
}
export const getAllBySaler = async () => {
  const respone = await axios.get(`${SALER_URL}/importing`);
  return respone.data;
}
export const getAllByWarehouse = async () => {
  const respone = await axios.get(`${WAREHOUSE_URL}/importing`);
  return respone.data;
}

export const save = async (value) => {
  const respone = await axios.post(`${BASE_URL}/importing`, value)
  return respone.status;
}
export const saveByWarehouse = async (value) => {
  const respone = await axios.post(`${WAREHOUSE_URL}/importing`, value)
  return respone.status;
}

export const getDailyImportingBySaler = async () => {
  const respone = await axios.get(`${SALER_URL}/importing/daily`);
  return respone.data;
}
export const getMonthlyImportingBySaler = async () => {
  const respone = await axios.get(`${SALER_URL}/importing/month`);
  return respone.data;
}
export const getDailyImportingByWarehouse = async () => {
  const respone = await axios.get(`${WAREHOUSE_URL}/importing/daily`);
  return respone.data;
}
export const getMonthlyImportingByWarehouse = async () => {
  const respone = await axios.get(`${WAREHOUSE_URL}/importing/month`);
  return respone.data;
}