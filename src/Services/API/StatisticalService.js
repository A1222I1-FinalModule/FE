import instance from '../../Config/axiosConfig';
const PUBLIC_URL = `/api/public`;

export const getDailyStastistical = async (date) => {
  const res = await instance.get(`${PUBLIC_URL}/daily/${date}`)
  return res.data
}
export const getMonthlyStastistical = async (month) => {
  const res = await instance.get(`${PUBLIC_URL}/monthly/${month}`)
  return res.data
}