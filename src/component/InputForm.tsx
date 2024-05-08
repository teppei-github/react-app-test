import React from "react";
import "./InputForm.css";

type Props = {
  id: string;
  name: string;
  errormsg: string | undefined;
  ph: string;
  onChange: (e: any) => void;
  inputValue: string;
};

const InputForm: React.FC<Props> = ({
  id,
  name,
  errormsg,
  ph,
  inputValue,
  onChange,
}) => {
  return (
    <>
      <div className="formField">
        <label>{ph}</label>
        <input
          type="text"
          name={id}
          placeholder={ph}
          onChange={onChange}
          value={inputValue}
        />
      </div>
      <p className="errorMsg">{errormsg}</p>
    </>
  );
};

export default InputForm;
