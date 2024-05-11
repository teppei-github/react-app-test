import React, { useEffect, useState } from "react";
import InputForm from "../component/InputForm";
import PostCodeForm from "../component/PostCodeForm";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  let navigate = useNavigate();

  // フォームのタイプ作成
  type formValueType = {
    name: string;
    username: string;
    mailAddress: string;
    password: string;
    passCheck: string;
    postCode: string;
    address: string;
    prefecture: string;
    city: string;
  };

  // フォームの初期値を設定します
  const initialValues = {
    name: "",
    username: "",
    mailAddress: "",
    password: "",
    passCheck: "",
    postCode: "",
    address: "",
    prefecture: "",
    city: "",
  };

  // useStateフックを使用して、フォームの値とエラーを管理します
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<Partial<formValueType>>({});
  const [isSubmit, setIsSubmit] = useState(false);

  // 入力値が変更されたときのハンドラー関数
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log("handleChange", name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  // フォームの送信ハンドラー関数
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // バリデーションを実行してエラーを設定します
    const { errflg, errors } = validate(formValues);
    setFormErrors(errors);
    if (!errflg) {
      navigate("/register");
    }
    setIsSubmit(true);
  };

  // フォームのエラーと値が変更されたときに実行される副作用関数
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  // バリデーションチェック
  const validate = (values: formValueType) => {
    const errors: formValueType = initialValues;
    let errflg = false;
    // メールアドレスの正規表現
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    // 名前のバリデーション
    if (!values.name) {
      errflg = true;
      errors.name = "名前を入力してください";
    }

    // ユーザー名のバリデーション
    if (!values.username) {
      errflg = true;
      errors.username = "ユーザー名を入力してください";
    }

    // メールアドレスのバリデーション
    if (!values.mailAddress) {
      errflg = true;
      errors.mailAddress = "メールアドレスを入力してください";
    } else if (!regex.test(values.mailAddress)) {
      errflg = true;
      errors.mailAddress = "正しいメールアドレスを入力してください";
    }

    // パスワードのバリデーション
    if (!values.password) {
      errflg = true;
      errors.password = "パスワードを入力してください";
    } else if (values.password.length < 4) {
      errflg = true;
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    } else if (values.password.length > 15) {
      errflg = true;
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    }

    // パスワード確認のバリデーション
    if (!values.passCheck) {
      errflg = true;
      errors.passCheck = "パスワードを入力してください";
    } else if (values.password !== values.passCheck) {
      // パスワード確認を比較
      errflg = true;
      errors.passCheck = "パスワードが一致しません";
    }

    // 郵便番号のバリデーション
    if (!values.postCode) {
      errflg = true;
      errors.postCode = "郵便番号を入力してください";
    } else {
      const postalCodePattern = /^\d{7}$/; // 7桁の数字のみを許可する正規表現
      if (!postalCodePattern.test(values.postCode)) {
        errflg = true;
        errors.postCode = "郵便番号は7桁の半角数字で入力してください";
      }
    }

    // 住所のバリデーション
    if (!values.prefecture) {
      errflg = true;
      errors.prefecture = "都道府県を入力してください";
    }
    if (!values.city) {
      errflg = true;
      errors.city = "市区町村を入力してください";
    }
    if (!values.address) {
      errflg = true;
      errors.address = "番地を入力してください";
    }

    return { errflg, errors };
  };

  const searchResult = (data: any) => {
    if (data.results && data.results.length > 0) {
      // 取得した住所の詳細をフォームの値に設定します
      setFormValues({
        ...formValues,
        prefecture: data.results[0].address1,
        city: data.results[0].address2 + data.results[0].address3, // 市区町村に住所情報を設定
        address: "", // 番地は空にする
      });
    }
  };

  const objName = { id: "name", name: "名前" };
  const objUname = { id: "username", name: "ユーザー名" };
  const objEmail = { id: "mailAddress", name: "メールアドレス" };
  const objPassword = { id: "password", name: "パスワード" };
  const objpassCheck = { id: "passCheck", name: "パスワード確認" };
  const objPostCode = { id: "postCode", name: "郵便番号" };
  const objPrefecture = { id: "prefecture", name: "都道府県" };
  const objCity = { id: "city", name: "市区町村" };
  const objAddress = { id: "address", name: "番地" };

  // フォームのレンダリング
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>登録フォーム</h1>
        <hr />
        <div className="uiForm">
          {/* HTML名前 */}
          <InputForm
            {...objName}
            errormsg={formErrors.name}
            inputValue={formValues.name}
            onChange={(e) => handleChange(e)}
          />

          {/* HTMLユーザー名 */}
          <InputForm
            {...objUname}
            errormsg={formErrors.username}
            inputValue={formValues.username}
            onChange={(e) => handleChange(e)}
          />

          {/* HTMLメールアドレス */}

          <InputForm
            {...objEmail}
            errormsg={formErrors.mailAddress}
            inputValue={formValues.mailAddress}
            onChange={(e) => handleChange(e)}
          />
          {/* HTMLパスワード */}
          <InputForm
            {...objPassword}
            errormsg={formErrors.password}
            inputValue={formValues.password}
            onChange={(e) => handleChange(e)}
          />

          {/* HTMLパスワード確認 */}
          <InputForm
            {...objpassCheck}
            errormsg={formErrors.passCheck}
            inputValue={formValues.passCheck}
            onChange={(e) => handleChange(e)}
          />

          {/* HTML郵便番号 */}
          <PostCodeForm
            {...objPostCode}
            errormsg={formErrors.postCode}
            postCode={formValues.postCode}
            searchResult={searchResult}
            onChange={(e) => handleChange(e)}
          />

          {/* HTML住所 */}
          <InputForm
            {...objPrefecture}
            errormsg={formErrors.prefecture}
            inputValue={formValues.prefecture}
            onChange={(e) => handleChange(e)}
          />
          <InputForm
            {...objCity}
            errormsg={formErrors.city}
            inputValue={formValues.city}
            onChange={(e) => handleChange(e)}
          />
          <InputForm
            {...objAddress}
            errormsg={formErrors.address}
            inputValue={formValues.address}
            onChange={(e) => handleChange(e)}
          />

          <button className="submitButton">登録</button>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="msgOk">登録に成功しました</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Home;
