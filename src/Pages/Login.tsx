import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  let navigate = useNavigate();

  // フォームのタイプ作成
  type formValueType = {
    loginId: string;
    password: string;
  };

  // フォームの初期値を設定します
  const initialValues = {
    loginId: "",
    password: "",
  };

  // useStateフックを使用して、フォームの値とエラーを管理します
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<Partial<formValueType>>({});
  const [isSubmit, setIsSubmit] = useState(false);

  // 入力値が変更されたときのハンドラー関数
  const handleChange = (e: any) => {
    const { name, value } = e.target;
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
    const errors: formValueType = { ...initialValues };
    let errflg = false;
    // メールアドレスの正規表現
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    // メールアドレスのバリデーション
    if (!values.loginId) {
      errflg = true;
      errors.loginId = "メールアドレスを入力してください";
    } else if (!regex.test(values.loginId)) {
      errflg = true;
      errors.loginId = "メールアドレスの形式が正しくありません";
    }

    // パスワードのバリデーション
    if (!values.password) {
      errflg = true;
      errors.password = "パスワードを入力してください";
    } else if (values.password.length < 8) {
      errflg = true;
      errors.password = "8文字以上のパスワードを入力してください";
    }

    return { errflg, errors };
  };

  const objLoginId = { id: "loginId", name: "ログインID（メールアドレス）" };
  const objPassword = { id: "password", name: "パスワード" };

  // フォームのレンダリング
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>会員登録</h1>
        <div className="uiForm">
          {/* HTMLメールアドレス */}
          <InputForm
            {...objLoginId}
            errormsg={formErrors.loginId}
            inputValue={formValues.loginId}
            onChange={(e) => handleChange(e)}
          />
          {/* HTMLパスワード */}
          <InputForm
            {...objPassword}
            errormsg={formErrors.password}
            inputValue={formValues.password}
            onChange={(e) => handleChange(e)}
          />

          {/* HTML登録ボタン */}
          <button className="submitButton">登録する</button>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="msgOk">登録に成功しました</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
