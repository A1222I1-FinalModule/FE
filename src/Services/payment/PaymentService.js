import axios from "axios";

const host = "http://localhost:8080"
export const getAll = () => {
    return axios.get(host + "/api/staff/customer");
}