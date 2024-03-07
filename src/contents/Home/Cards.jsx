import React from "react";

const Card = ({ title }) => {
 
  return (
    <div
      className={`w-96 h-80 rounded overflow-hidden shadow-lg bg-yellow-300 mx-2 my-2 flex items-center justify-center`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-center" >
          <div className="text-3xl font-bold">{title}</div>
        </div>
      </div>
    </div>
  );
};



export default Card;
