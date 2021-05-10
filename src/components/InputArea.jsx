import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={() => {
          return props.handleChangeParam();
        }}
        type="text"
        value={props.inputTextParam}
      />
      <button
        onClick={() => {
          return props.addItemParam();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
