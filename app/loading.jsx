import React from "react";
import { BiLoader } from "react-icons/bi";

const loading = () => {
  return (
    <div className="mt-32 text-gray-700 text-center">
      <BiLoader className="m-auto text-8xl" />
      <h2>Loading...</h2>
    </div>
  );
};

export default loading;
