import React from "react";
import Card from "./Cards";
import LeftTable from "./LeftTable";
import RightTable from "./RightTable";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <LeftTable />
        <div className="flex flex-wrap justify-center w-3/5">
          <Card />
        </div>
        <RightTable />
      </div>
    </>
  );
};

export default Home;
