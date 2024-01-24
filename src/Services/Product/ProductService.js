import axios from "axios";

export const getAllListProduct = async() => {
    let temp = await axios.get(`/api/warehouse/getListProduct`);
    return temp.data;
}

export const saveInfoProduct = async(values) => {
    let temp = await axios.post("/api/warehouse/createInfoProduct",values);
    console.log(temp)
    return temp.status;
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
    let temp = await axios.get("/api/warehouse/getListCategory");
    return temp.data;
}

export const findByNameProduct = async (name)=>{
    try{
        let temp= await axios.get(`/api/warehouse/findByNameProduct?name=${name}`);
        console.log(temp);
        return temp.data;
    }catch(err){
        console.log(err);
    }
}