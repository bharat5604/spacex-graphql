import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <div className="shadow p-3 rounded-lg bg-gray-900">
      <h1 className="text-white">
        <Skeleton />
      </h1>
      <h1 className="text-white text-center font-bold mb-2">
        <Skeleton />
      </h1>
      <h2 className="text-blue-700 text-center mb-2">
        <Skeleton />
      </h2>
      <h2 className="text-white text-center  mb-2">
        <Skeleton />
      </h2>
      <div className=" my-3">
        <Skeleton />
      </div>
    </div>
  );
};

export default CardSkeleton;
