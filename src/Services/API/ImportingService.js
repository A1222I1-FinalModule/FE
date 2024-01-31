import instance from "../../Config/axiosConfig";
const BASE_URL = `/api/admin`;
const SALER_URL = `/api/saler`;
const WAREHOUSE_URL = `/api/warehouse`;

export const getAll = async () => {
  const respone = await instance.get(`${BASE_URL}/importing`);
  return respone.data;
}
export const getAllBySaler = async () => {
  const respone = await instance.get(`${SALER_URL}/importing`);
  return respone.data;
}
export const getAllByWarehouse = async () => {
  const respone = await instance.get(`${WAREHOUSE_URL}/importing`);
  return respone.data;
}

export const save = async (value) => {
  const respone = await instance.post(`/api/admin/importing`, value)
  return respone.status;
}
export const saveByWarehouse = async (value) => {
  const respone = await instance.post(`/api/warehouse/importing`, value)
  return respone.status;
}

export const getDailyImportingBySaler = async () => {
  const respone = await instance.get(`/api/saler/importing/daily`);
  return respone.data;
}
export const getMonthlyImportingBySaler = async () => {
  const respone = await instance.get(`/api/saler/importing/month`);
  return respone.data;
}
export const getDailyImportingByWarehouse = async () => {
  const respone = await instance.get(`/api/warehouse/importing/daily`);
  return respone.data;
}
export const getMonthlyImportingByWarehouse = async () => {
  const respone = await instance.get(`/api/warehouse/importing/month`);
  return respone.data;
}