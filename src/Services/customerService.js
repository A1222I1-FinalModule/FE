import axios from "axios";


export const findAllCustomer = async () => {
    try {
        let temp = await axios.get("http://localhost:3000/api/admin/listCustomer");
        console.log(temp);
        return temp.data;
    } catch (err) {
        console.log(err);
    }
}

export const getDeleteCustomer = async (id) => {
    let temp = await axios.delete(`http://localhost:3000/api/admin/deleteByIdCustomer?id=${id}`);
    return temp.data;
}


export const findByNameCustomer = async (name) => {
    try {
        let temp = await axios.get(`http://localhost:3000/api/admin/findByNameCustomer?name=${name}`);
        console.log(temp);
        return temp.data;
    } catch (err) {
        console.log(err);
    }
}
export const createCustomer = async (value) => {
    try {
        const response = await axios.post('/api/admin/insert-customer', value);
        console.log("Thanh cong", response);
        return response;
    } catch (error) {
        console.log("loi", error);
    }
};

export const updateCustomer = async (id, value) => {
    try {
        const response = await axios.put(`/api/admin/update-customer/"${id}"`, value);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const detailCustomer = async (id) => {
    try {
        const response = await axios.get(`/api/admin/detail/${id}`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};



