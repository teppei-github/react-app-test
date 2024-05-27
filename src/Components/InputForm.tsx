import React from "react";
import "./InputForm.css";

type Props = {
  id: string;
  name: string;
  errormsg: string | undefined;
  onChange: (e: any) => void;
  inputValue: string;
};

const InputForm: React.FC<Props> = ({
  id,
  name,
  errormsg,
  inputValue,
  onChange,
}) => {
  return (
    <div className="inputWrap">
      <div className="formField">
        <label>{name}</label>
        <input
          type="text"
          name={id}
          placeholder={name}
          onChange={onChange}
          value={inputValue}
        />
      </div>
      <p className="errorMsg">{errormsg}</p>
    </div>
  );
};

export default InputForm;
