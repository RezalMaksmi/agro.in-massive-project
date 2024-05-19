import React from "react";

const InputLabel = (props) => {
  return (
    <div className="w-full flex flex-col items-start gap-y-2">
      <label
        htmlFor={props.htmlFor}
        className="text-sm font-semibold text-[#8D9E9B] mt-5"
      >
        {props.children}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        className="focus:outline-none border-b-2 border-[#8D9E9B] w-full"
      />
    </div>
  );
};

export default InputLabel;
