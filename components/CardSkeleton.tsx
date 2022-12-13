import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <div className="shadow p-3 rounded-lg bg-gray-900">
      <h1 className="text-white">
        <Skeleton />
      </h1>
    </div>
  );
};

export default CardSkeleton;
