import React from "react";

const Card = () => {
  return (
    <>
      <span className="flex justify-center items-center w-full text-3xl font-bold mb-20">
        Opportunity Hunter
      </span>

      <div
        className={`w-96 h-30 rounded-3xl overflow-hidden shadow-lg bg-yellow-300 mx-2 my-2 flex items-center hover:shadow-yellow-500 justify-center`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold">Opportunity</div>
          </div>
        </div>
      </div>
      <div
        className={`w-96 h-30 rounded-3xl overflow-hidden shadow-lg bg-yellow-300 mx-2 my-2 flex hover:shadow-yellow-500 items-center justify-center`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold">History</div>
          </div>
        </div>
      </div>
      <div
        className={`w-96 h-80 rounded-3xl overflow-hidden shadow-lg shadow-yellow-200 hover:shadow-yellow-500 bg-white mx-2 my-2 `}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold">Leads & Opportunity</div>
          </div>
          <div className="pt-5">
            <p className="text-gray-500 flex justify-between">
              <span className="font-semibold">Company A</span>{" "}
              <span className="ml-2"> opportunities: <b>5</b> </span>
            </p>
            <p className="text-gray-500 pt-5 flex justify-between">
              <span className="font-semibold">TCS</span>{" "}
              <span className="ml-2">opportunities: <b>7</b> </span>
            </p>
            <p className="text-gray-500 pt-5 flex justify-between ">
              <span className="font-semibold">Infosys</span>{" "}
              <span className="ml-2">opportunities: <b>9</b> </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-96 h-80 rounded-3xl overflow-hidden shadow-lg shadow-yellow-200 hover:shadow-yellow-500 mx-2 my-2 `}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold">Details</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
