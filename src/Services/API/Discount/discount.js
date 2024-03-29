import instance from "../../../Config/axiosConfig";
export const addDiscount = async (value) => {
    try {
        console.log("du lieu", value);
        let temp = await instance.post("/api/admin/createDiscount", value);
        return temp.status;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const findAllDiscount = async () => {
    try {
        let temp = await instance.get("/api/admin/listDiscount");
        console.log(temp);
        return temp.data;
    } catch (err) {
        console.log(err)
    }
}
export const listDiscountCode = async () => {
    try {
        let temp = await instance.get("/api/admin/listDiscountCode");
        return temp.data;
    } catch (err) {
        console.log(err)
    }
}

export const getDeleteDiscount = async (id) => {
    let temp = await instance.get(`/api/admin/deleteByIdDiscount?id=${id}`);
    return temp.data;
}

export const updateDiscount = async (id, value) => {
    try {
        console.log("Hahahah");
        console.log(value);
        let temp = await instance.put("/api/admin/updateDiscount/" + id, value);
        console.log(temp.data);
        return temp.status;
    } catch (err) {
        console.log(err);
    }
}

export const getFindByNameDiscount = async (name, customerType) => {
    try {
        let temp = await instance.get(`/api/admin/findByNameDiscount?name=${name}&customerType=${customerType}`);
        return temp.data;
    } catch (err) {
        console.log(err);
    }
}
export const getFindByIdDiscount = async (id) => {
    try {
        let temp = await instance.get(`/api/admin/findByIdDiscount?id=${id}`);
        return temp.data;
    } catch (err) {
        console.log(err);
    }
}

export const checkDiscountCodeExistence = async (id) => {
    try {
        let temp = await instance.get("/api/admin/existDiscountCode/" + id);
        if (temp.data !== undefined) {
            return temp.data;
        } else {
            throw new Error("Invalid API response format");
        }
    } catch (error) {
        console.error("Error checking discount code existence:", error);
        return false;
    }
}