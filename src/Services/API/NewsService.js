import axios from "axios";

export const getAll = async () => {
    try {
        const result = await axios.get("/api/public/news");
        console.log("danh sach:", result.data);
        const dataList = result.data;
        console.log("DataL", dataList);

        const maleList = [];
        const femaleList = [];
        const childrenList = [];
        const promotionList = [];

        dataList.forEach(item => {
            if (item.tag.id === 1) {
                maleList.push(item);
            } else if (item.tag.id === 2) {
                femaleList.push(item);
            } else if (item.tag.id === 3) {
                childrenList.push(item);
            } else if (item.tag.id === 4) {
                promotionList.push(item);
            }
        });
        console.log("maleList", maleList);
        console.log("femaleList", femaleList);
        console.log("childrenList", childrenList);
        console.log("promotionList", promotionList);
        return {
            maleList,
            femaleList,
            childrenList,
            promotionList
        };
    } catch (e) {
        console.log(e);
    }
};

export const createNews = async (values) => {
    try {
        const result = await axios.post("/api/admin/news/create", values);
        console.log(result.data);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

export const getNewsById = async (id) => {
    try {
        const result = await axios.get(`/api/public/news/${id}`);
        console.log(result.data);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};