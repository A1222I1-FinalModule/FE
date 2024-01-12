export const addDiscount = async(value)=>{
    let temp=await axios.post("http://localhost:8080/discount",value);
    return temp.status;
}

export const findAllDiscount = async()=>{
    try{
        let temp=await axios.get("http://localhost:8080/discount");
        return temp.data;
    }catch(err){
        
    }
}

export const getDeleteDiscount =async (id)=>{
    let temp=await axios.delete("http://localhost:8080/discount/"+id);
    return temp.data;
}

export const updateDiscount= async (id,value)=>{
    let temp=await axios.put("http://localhost:8080/discount/"+id,value);
    return temp.status;
}

export const getFindByIdDiscount = async(id)=>{
    try{
        let temp=await axios.get("http://localhost:8080/discount/"+id);
        return temp.data;
    }catch(err){
        console.log(err);
    }
}