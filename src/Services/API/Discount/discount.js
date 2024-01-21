import axios from "axios";

export const addDiscount = async (value) => {
    try {
        console.log("du lieu", value);
        let temp = await axios.post("/api/admin/createDiscount", value);
        return temp.status;
    } catch (err) {
        console.log("lỗi nè",err);
        throw err;
    }
}

export const findAllDiscount = async () => {
    try {
        let temp = await axios.get("/api/admin/listDiscount");
        console.log(temp);
        return temp.data;
    } catch (err) {
        console.log(err)
    }
}
export const listDiscountCode = async()=>{
    try{
        let temp=await axios.get("/api/admin/listDiscountCode");
        console.log(temp.data);
        return temp.data;
    }catch(err){
        console.log(err)
    }
}

export const getDeleteDiscount =async (id)=>{
    let temp=await axios.get(`/api/admin/deleteByIdDiscount?id=${id}`);
    return temp.data;
}

export const updateDiscount = async (id, value) => {
    try {
        console.log("Hahahah");
        console.log(value); 
        let temp=await axios.put("/api/admin/updateDiscount/"+id,value);
        console.log(temp.data);
        return temp.status;
    } catch (err) {
        console.log("loi roi");
        console.log(err);
    }
}

export const getFindByNameDiscount = async(name)=>{
    try{
        let temp=await axios.get(`/api/admin/findByNameDiscount?name=${name}`);
        return temp.data;
    } catch (err) {
        console.log(err);
    }
}
export const getFindByIdDiscount = async(id)=>{
    try{
        let temp=await axios.get(`/api/admin/findByIdDiscount?id=${id}`);
        console.log("Da vao roi nghe");
        return temp.data;
    } catch (err) {
        console.log(err);
    }
}

export const checkDiscountCodeExistence = async (id) => {
    try {
        let temp = await axios.get("/api/admin/existDiscountCode/" + id);
        console.log("Response from API:", temp);
        console.log("Haiz", temp.data);
        if (temp.data !== undefined) {
            console.log("oke roi");
            return temp.data;
        } else {
            throw new Error("Invalid API response format");
        }
    } catch (error) {
        console.error("Error checking discount code existence:", error);
        return false;
    }
}