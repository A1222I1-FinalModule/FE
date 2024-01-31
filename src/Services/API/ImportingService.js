import instance from "../../Config/axiosConfig";
const PUBLIC_URL = `/api/public`;

export const getAll = async () => {
  const respone = await instance.get(`$${PUBLIC_URL}/importing`);
  return respone.data;
}

export const save = async (value) => {
  try {
    const respone = await instance.post(`${PUBLIC_URL}/importing`, value)
    return respone.status;
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getDailyImporting = async () => {
  const respone = await instance.get(`${PUBLIC_URL}/importing/daily`);
  return respone.data;
}
export const getMonthlyImporting = async () => {
  const respone = await instance.get(`${PUBLIC_URL}/importing/monthly`);
  return respone.data;
}
export const getMaxId = async () => {
  const respone = await instance.get(`${PUBLIC_URL}/importing/maxId`);
  return respone.data;
}