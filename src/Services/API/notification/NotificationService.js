import instance from "../../../Config/axiosConfig";
export const getAllBySaler = async () => {
  try {
    let api = "/api/saler/listnotification";
    let respone = await instance.get(api);
    console.log(respone);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllByWarehouse = async () => {
  try {
    let api = "/api/warehouse/listnotification";
    let respone = await instance.get(api);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllSalerByNotRead = async () => {
  try {
    let api = "/api/saler/notread";
    let respone = await instance.get(api);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllWarehouseByNotRead = async () => {
  try {
    let api = "/api/warehouse/notread";
    let respone = await instance.get(api);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
export const saveNotification = async (value) => {
  try {
    let api = "/api/admin/savenotification";
    let respone = await instance.post(api, value);
    return respone.status;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotification = async (id) => {
  try {
    let respone = await instance.delete(`/api/${id}`);
    return respone.status;
  } catch (error) {
    console.log(error);
  }
};
export const findByid = async (id) => {
  try {
    let respone = await instance.get(`/api/${id}`);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
