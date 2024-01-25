import axios from "axios";
export const findAllCustomer = async()=>{
    try{
        let temp=await axios.get("/api/admin/listCustomer");
        return temp.data;
    }catch(err){
        console.log(err);
    }
}

export const getDeleteCustomer =async (id)=>{
    let temp=await axios.get(`/api/admin/deleteByIdCustomer?id=${id}`);
    return temp.data;
}


export const findByNameCustomer = async (name)=>{
    try{
        let temp= await axios.get(`/api/admin/findByNameCustomer?name=${name}`);
        return temp.data;
    }catch(err){
        console.log(err);
    }
}