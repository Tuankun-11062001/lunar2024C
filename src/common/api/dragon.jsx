import axios from "axios";

const getDragonAPI = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API}/dragon`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const addDragonAPI = async (data) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API}/dragon/add`,
      data
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const findDragonAPI = async (id) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API}/dragon/find/${id}`
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const editDragonAPI = async (payload) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API}/dragon/edit/${payload._id}`,
      payload
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const getRankAPI = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API}/dragon/rank`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export { addDragonAPI, getDragonAPI, findDragonAPI, editDragonAPI, getRankAPI };
