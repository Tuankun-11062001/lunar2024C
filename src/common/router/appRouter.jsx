import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AdminRouter from "../../module/admin/router/adminRouter";
import GiftRouter from "../../module/gift/router/giftRouter";
import Home from "../page/home";
import Login from "../page/login";
import NotFind404 from "../page/notFind404";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="gift/*" element={<GiftRouter />} />
        <Route path="admin/*" element={<AdminRouter />} />
        <Route path="*" element={<NotFind404 />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
