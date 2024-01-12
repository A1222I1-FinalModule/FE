import axios from "axios";
export const findAllCustomer = async()=>{
    try{
        let temp=await axios.get("http://localhost:3000/api/admin/listCustomer");
        console.log(temp);
        return temp.data;
    }catch(err){
        console.log(err);
    }
}

export const getDeleteCustomer =async (id)=>{
    let temp=await axios.delete("http://localhost:3000/api/admin/listCustomer/"+id);
    return temp.data;
}