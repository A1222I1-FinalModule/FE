import axios from "axios";
const BASE_URL = `/api/admin`;
const SALER_URL = `/api/saler`;
const WAREHOUSE_URL = `/api/warehouse`;

export const getDailyStastisticalByAdmin = async () => {
  const res = await axios.get(`${BASE_URL}/statistical/daily`)
  return res.data
}
export const getMonthlyStastisticalByAdmin = async () => {
  const res = await axios.get(`${BASE_URL}/statistical/monthly`)
  return res.data
}
export const getDailyStastisticalBySaler = async () => {
  const res = await axios.get(`${SALER_URL}/statistical/daily`)
  return res.data
}
export const getMonthlyStastisticalBySaler = async () => {
  const res = await axios.get(`${SALER_URL}/statistical/monthly`)
  console.log(res)
  return res.data
}
export const getDailyStastisticalByWarehouse = async () => {
  const res = await axios.get(`${WAREHOUSE_URL}/statistical/daily`)
  return res.data
}
export const getMonthlyStastisticalByWarehouse = async () => {
  const res = await axios.get(`${WAREHOUSE_URL}/statistical/monthly`)
  return res.data
}

