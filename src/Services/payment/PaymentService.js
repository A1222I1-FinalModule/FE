import axios from "axios";

const host = "/api/staff"
export const getAll = () => {
    return axios.get(host + "/customer");
}