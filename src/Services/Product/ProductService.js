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

export const pageProduct = async(name,page,perPage) => {
    let temp = await axios.get("http://localhost:8080/product", {
        params:{
           name_like : name,
           _page : page,
           _limit : perPage,    
           _order : 'desc',
        }
    });
    return temp;
}