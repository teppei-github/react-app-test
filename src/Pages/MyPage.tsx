import React, { useEffect, useState } from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function NotFound() {
  let navigate = useNavigate();

  // フォームのレンダリング
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-16 h-16 bg-gray-400 flex justify-center items-center rounded-full">
        <FaUser />
      </div>
      <h5>メールアドレス</h5>
    </div>
  );
}

export default NotFound;
