import React from "react";

const Button = ({ children, isBorder, onClick }) => {
  return (
    <button
      className={`
    min-w-[220px] ease-in-out duration-300 rounded-md p-2 text-base border hover:ease-in ${
      isBorder
        ? "bg-transparent text-black border-black hover:bg-black hover:text-white"
        : "bg-black text-white font-semibold   hover:border hover:border-black hover:text-black hover:bg-transparent "
    }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
