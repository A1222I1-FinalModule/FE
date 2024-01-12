import axios from "axios";

export const getAllListProduct = async(name) => {
    let temp = await axios.get(`http://localhost:8080/product?name_like=${name}`);
    return temp.data;
}

export const saveInfoProduct = async(values) => {
    let temp = await axios.post("http://localhost:8080/product",values);
    console.log(temp)
    return temp.status;
}