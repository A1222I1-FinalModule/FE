import axios from "axios";

export const getAllBySaler = async () => {
  try {
    let api = "http://localhost:3000/api/saler/listnotification";
    let respone = await axios.get(api);
    console.log(respone);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllByWarehouse = async () => {
  try {
    let api = "http://localhost:3000/api/warehouse/listnotification";
    let respone = await axios.get(api);
    console.log(respone);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllSalerByNotRead = async () => {
  try {
    let api = "http://localhost:3000/api/saler/notread";
    let respone = await axios.get(api);
    console.log(respone);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllWarehouseByNotRead = async () => {
  try {
    let api = "http://localhost:3000/api/warehouse/notread";
    let respone = await axios.get(api);
    console.log(respone);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
export const saveNotification = async (value) => {
  try {
    let api = "http://localhost:3000/api/admin/savenotification";
    let respone = await axios.post(api, value);
    console.log(respone);
    return respone.status;
  } catch (error) {
    console.log(error);
  }
};
