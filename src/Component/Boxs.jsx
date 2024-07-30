import React from "react";

// eslint-disable-next-line react/prop-types
const Boxs = ({ selectedNumber, setSelectedNumber, err, setError }) => {
  const boxss = [1, 2, 3, 4, 5, 6];

  if (selectedNumber) {
    setError("");
  }

  return (
    <div className="sm:max-w-[552px]">
      <p className="text-red-600 text-xl text-right mt-4">{err}</p>
      <div
        className="
    flex
    gap-3
    "
      >
        {boxss.map((value, i) => {
          return (
            <li
              className={`
            sm:w-20
            w-[50px]
            sm:h-20
            h-[50px]
            border-2
            border-black
            text-black
            text-3xl
            flex
            items-center
            justify-center
            cursor-pointer
            ease-in-out
            duration-300
            hover:bg-black
            hover:text-white
            ${value === selectedNumber ? `bg-black text-white` : null}
            `}
              key={i}
              onClick={() => setSelectedNumber(value)}
            >
              {value}
            </li>
          );
        })}
      </div>
      <p
        className="
  text-2xl
  text-black
  font-semibold
  text-right
  mt-2
  "
      >
        Select Number
      </p>
    </div>
  );
};

export default Boxs;
