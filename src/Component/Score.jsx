import React from "react";

// eslint-disable-next-line react/prop-types
const Score = ({ score }) => {
  return (
    <div className="font-Poppins w-[135px] pt-4">
      <h1 className="text-[100px] mb-[-24px] text-center font-semibold text-black ">
        {score}
      </h1>
      <p className="text-2xl text-black">Total Score</p>
    </div>
  );
};

export default Score;
