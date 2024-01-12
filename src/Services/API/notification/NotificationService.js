import axios from "axios";

export const getAllBySaler = async () => {
  try {
    let api = "http://localhost:8080/api/saler/listnotification";
    let respone = await axios.get(api);
    console.log(respone);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllByWarehouse = async () => {
  try {
    let api = "http://localhost:8080/api/warehouse/listnotification";
    let respone = await axios.get(api);
    console.log(respone);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
