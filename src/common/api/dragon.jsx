import axios from "axios";

const getDragonAPI = async () => {
  try {
    const res = await axios.get(`https://lunar2024-s.vercel.app/dragon`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const addDragonAPI = async (data) => {
  try {
    const res = await axios.post(
      `https://lunar2024-s.vercel.app/dragon/add`,
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
      `https://lunar2024-s.vercel.app/dragon/find/${id}`
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const editDragonAPI = async (payload) => {
  try {
    const res = await axios.put(
      `https://lunar2024-s.vercel.app/dragon/edit/${payload._id}`,
      payload
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

const getRankAPI = async () => {
  try {
    const res = await axios.get(`https://lunar2024-s.vercel.app/dragon/rank`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};


const deleteDragonAPI = async (id) => {
  try {
    const res = await axios.delete(`https://lunar2024-s.vercel.app/dragon/delete/${id}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export { addDragonAPI, getDragonAPI, findDragonAPI, editDragonAPI, getRankAPI,deleteDragonAPI };
