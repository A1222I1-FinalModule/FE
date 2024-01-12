export const findAllCustomer = async()=>{
    try{
        let temp=await axios.get("http://localhost:8080/customer");
        return temp.data;
    }catch(err){
        
    }
}

export const getDeleteCustomer =async (id)=>{
    let temp=await axios.delete("http://localhost:8080/customer/"+id);
    return temp.data;
}