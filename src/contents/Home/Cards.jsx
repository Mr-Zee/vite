import React from "react";

const Card = () => {
 
  return (
    <>
      <span className="flex justify-center items-center w-full text-3xl font-bold mb-20">Oppertunity Hunter</span>

    <div
      className={`w-96 h-30 rounded-3xl overflow-hidden shadow-lg bg-yellow-300 mx-2 my-2 flex items-center justify-center`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-center" >
          <div className="text-2xl font-bold">Oppertunity</div>
        </div>
      </div>
    </div>
    <div
      className={`w-96 h-30 rounded-3xl overflow-hidden shadow-lg bg-yellow-300 mx-2 my-2 flex items-center justify-center`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-center" >
          <div className="text-2xl font-bold">Dashboard</div>
        </div>
      </div>
    </div>
    <div
      className={`w-96 h-80 rounded-3xl overflow-hidden shadow-lg bg-yellow-300 mx-2 my-2 `}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-center" >
          <div className="text-2xl font-bold">Leads & Oppertunity</div>
        </div>
      </div>
    </div>
    <div
      className={`w-96 h-80 rounded-3xl overflow-hidden shadow-lg bg-yellow-300 mx-2 my-2 `}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-center" >
          <div className="text-2xl font-bold">History</div>
        </div>
      </div>
    </div>
    </>
  );
};



export default Card;
