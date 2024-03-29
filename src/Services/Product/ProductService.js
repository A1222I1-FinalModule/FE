import axios from "axios";
import instance from "../../Config/axiosConfig";

export const getAllListProduct = async() => {
    let temp = await axios.get(`/api/public/getListProduct`);
    return temp.data;
}

export const saveInfoProduct = async(values) => {
    try {
        let temp = await axios.post("/api/public/createInfoProduct", values);
        return temp.status;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// export const pageProduct = async(name,page,perPage) => {
//     let temp = await axios.get("/api/warehouse/getListProduct", {
//         params:{
//            name_like : name,
//            _page : page,
//            _limit : perPage,    
//            _order : 'desc',
//         }
//     });
//     console.log(temp);
//     return temp;
// }

export const getAllCategory = async() => {
    let temp = await axios.get("/api/public/getListCategory");
    return temp.data;
}

export const findByNameProduct = async (name)=>{
    try{
        let temp= await axios.get(`/api/public/findByNameProduct?name=${name}`);
        console.log(temp);
        return temp.data;
    }catch(err){
        console.log(err);
    }
}

/**
 * This function is used to update the quantity of a product
 * @param {*} id
 * @param {*} product
 * @author : NhanNNB
 * @returns : If success, return status 200
 */
export const updateProductQuantity = async (id, product) => {
    try {
        let response = await instance.put(`/api/public/updateProductQuantity/${id}`, product);
        return response.status;
    } catch (err) {
        console.log(err);
        throw err;
    }
}