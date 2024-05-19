import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();

  // フォームのレンダリング
  return (
    <div>
      <h1>ページが見つかりません。</h1>
    </div>
  );
}

export default NotFound;
