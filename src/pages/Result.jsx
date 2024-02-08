import React from "react";
import { Link } from "react-router-dom";

function Result() {
  return (
    <div className=" bg-[rgb(12,16,46)]  w-screen h-screen">
      <Link to="/">
        <h2 className="fixed  z-50 p-3 text-white  font-bold text-2xl">LOGO</h2>
      </Link>
      <div className=" absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[60%] aspect-video rounded-3xl bg-[#5311e21f] flex flex-col gap-10 justify-center items-center">
        <h1 className=" text-xl bg-[#731ddd2f]  p-2 rounded-lg font-semibold text-white">
          You are worthy of happiness and peace of mind
        </h1>
        <div className="  w-[30%] aspect-square bg-[#741dddb5] rounded-full flex justify-center items-center text-5xl font-bold text-white">
          26%
        </div>
      </div>
    </div>
  );
}

export default Result;
