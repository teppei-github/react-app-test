import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Top.css";

function Top() {
  let navigate = useNavigate();

  // フォームのレンダリング
  return (
    <div>
      <h1>Title Title</h1>
      <p></p>
      <div className="flex justify-center gap-4 pt-8 pb-8">
        <a
          href="/login"
          className="no-underline px-8 py-2 bg-gray-800 text-white rounded-md"
        >
          ログイン
        </a>
        <a href="/signup">会員登録</a>
      </div>
      <div>
        <img></img>
      </div>
    </div>
  );
}

export default Top;
