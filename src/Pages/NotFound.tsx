import React, { useEffect, useState } from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();

  // フォームのレンダリング
  return (
    <div className="h-screen flex justify-center items-center">
      <h1>ページが見つかりません。</h1>
    </div>
  );
}

export default NotFound;
