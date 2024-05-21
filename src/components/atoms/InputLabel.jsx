import React from "react";

const InputLabel = (props) => {
  return (
    <>
      <label
        htmlFor={props.htmlFor}
        className="text-sm font-normal text-dark_30 mt-5"
      >
        {props.children}
      </label>
      <input
        type={props.type}
        name="email"
        id={props.id}
        onChange={props.onChange}
        className="focus:outline-none border-b-2 border-darktext-dark_30 w-full"
      />
    </>
  );
};

export default InputLabel;
