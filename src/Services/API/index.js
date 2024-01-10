import axios from "axios";
export async function LoginAPI(inputs) {
  return await axios.post("/api/auth/login", inputs).then(async (response) => {
    if (response.status === 200) {
      return response.data;
    }else {
      throw new Error(response.status);
    }
  });
}
