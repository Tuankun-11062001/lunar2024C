import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDragonAPI } from "../../../common/api/dragon";
import Decoration from "../../../common/components/decoration";
import { useSelector, useDispatch } from "react-redux";
import { addDragonsThunk, deleteDragonThunk, getDragonsThunk } from "../../../common/store/slices/dragonSlice";
import Loading from "../../../common/page/loading";

const AdminHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dragons,loading } = useSelector((state) => state.dragon);
  useEffect(() => {
    // check user data
    const data = localStorage.getItem("dataAdmin");
    if (data !== 'luner2024') {
      navigate("/login");
      return;
    }
    return;
  }, []);

  useEffect(() => {
    if(dragons.length < 1){
      dispatch(getDragonsThunk())
    }
  },[])

  const [dataDragon, setDataDragon] = useState({
    name: "",
    price: "",
    wish: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataDragon((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    dispatch(addDragonsThunk(dataDragon));
  };


  const handleDelete = (id) => {
    dispatch(deleteDragonThunk(id))
  }

  console.log("dragons", dragons);
  return (
    <div className="admin">
      <Decoration />
      <div className="content">
        <div className="dragon">
          <div className="dragon_form">
            <h1>Adding Dragon</h1>
            <div className="group">
              <p>name</p>
              <select
                name="name"
                value={dataDragon.name}
                onChange={handleChange}
              >
                <option value="null">choose</option>
                <option value="dragon_2024">Dragon 2024</option>
                <option value="dragon_cry">Dragon cry</option>
                <option value="dragon_shy">Dragon shy</option>
                <option value="dragon_confident">Dragon confident</option>
                <option value="dragon_fat">Dragon fat</option>
                <option value="dragon_sleep">Dragon sleep</option>
              </select>
            </div>
            <div className="group">
              <p>Price</p>
              <input
                type="text"
                placeholder="price"
                name="price"
                value={dataDragon.price}
                onChange={handleChange}
              />
            </div>
            <div className="group">
              <p>Wish</p>
              <input
                type="text"
                placeholder="Wish"
                name="wish"
                value={dataDragon.wish}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleAdd}>Adding</button>
          </div>
        </div>
        <div className="list_dragon">
          <h1>List Dragon</h1>
          {loading ? <Loading/> : dragons?.map((dragon) => (
            <div className="dragon_card">
              <p>{dragon.name}</p>
              <p>{dragon.price}</p>
              <p>{dragon?.username}</p>
              <p>{dragon?.numberBank}</p>
              <p>{dragon?.detailBank}</p>
              <button onClick={() => handleDelete(dragon._id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
