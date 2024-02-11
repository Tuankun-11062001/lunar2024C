import axios from "axios";

const loginAPI = async (data) => {
  try {
    const res = await axios.post(`https://lunar2024-s.vercel.app/user/login`, data);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export { loginAPI };
