import axios from "axios";

const loginAPI = async (data) => {
  try {
    const res = await axios.post(`http://localhost:3001/user/login`, data);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export { loginAPI };
