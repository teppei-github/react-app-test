import React from "react";
import "./PostCodeForm.css";

type Props = {
  id: string;
  name: string;
  errormsg: string | undefined;
  ph: string;
  postCode: string;
  searchResult: (data: any) => void;
  onChange: (e: any) => void;
};

const PostCodeForm: React.FC<Props> = ({
  id,
  name,
  errormsg,
  ph,
  postCode,
  searchResult,
  onChange,
}) => {
  // 郵便番号検索ボタンのクリックハンドラー関数
  const handlePostalCodeSearch = async () => {
    if (postCode.trim() !== "") {
      try {
        // 郵便番号検索APIを呼び出して住所の詳細を取得します

        const response = await fetch(
          `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postCode}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();

        searchResult(data);
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    }
  };

  return (
    <>
      <div className="formField">
        <div style={{ display: "flex" }}>
          <input
            type="text"
            name={id}
            placeholder={ph}
            onChange={onChange}
            value={postCode}
          />
          <button type="button" onClick={handlePostalCodeSearch}>
            検索
          </button>
        </div>
      </div>
      <p className="errorMsg">{errormsg}</p>
    </>
  );
};

export default PostCodeForm;
