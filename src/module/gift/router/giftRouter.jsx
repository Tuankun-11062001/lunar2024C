import React from "react";
import { Route, Routes } from "react-router-dom";
import GiftHome from "../page/giftHome";

const GiftRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GiftHome />} />
    </Routes>
  );
};

export default GiftRouter;
