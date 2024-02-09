import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../api/login";
import Decoration from "../components/decoration";
import close from "../images/close.svg";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setMessage("");
  };
  const handleSubmit = async () => {
    if (userData.name === "" || userData.password === "") {
      setMessage("Please fill in all fields");
      return;
    }
    const res = await loginAPI(userData);
    if (res.status === 400) {
      setMessage(res.message);
    }
    if (res.status === 200 && res.data) {
      localStorage.setItem("dataAdmin", res.data.username);
      navigate("/admin");
    }
  };
  return (
    <div className="login">
      <Decoration />
      <div className="content">
        <div className="login_form">
          <div className="head">
            <h1>Login</h1>
            <Link to="/gift">
              <img src={close} />
            </Link>
          </div>
          <div className="group">
            <p>Username</p>
            <input
              name="name"
              type="text"
              placeholder="Username"
              value={userData.name}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          {message && <p>{message}</p>}
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
