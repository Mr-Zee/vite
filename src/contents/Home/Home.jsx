import React from "react";
import RightSection from "./RightSection";
import LeftTable from "./LeftTable";
import LO from "../../../leadsandopp.json";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
      <h1 className="text-3xl font-bold mb-8">Opportunity Hunter</h1>
      <div className="flex w-full max-w-7xl p-8 space-x-8 bg-white rounded-lg shadow-lg">
        <div className="w-1/3">
          <h2 className="text-2xl font-bold mb-4">Leads</h2>
          <div className="flex flex-col space-y-4">
            <LeftTable />
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-center space-y-8">
        <div
        className={`cursor-pointer h-30 rounded-3xl overflow-hidden shadow-lg bg-yellow-300 mx-2 my-2 flex items-center hover:shadow-yellow-500 justify-center`}
      >
        <div className="px-6 py-4 ">
          <div className="flex items-center justify-center ">
            <div className="text-2xl font-bold">Dashboard</div>
          </div>
        </div>
      </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-bold bg-yellow-300 text-center p-2 rounded-xl">Leads and Opportunities</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Opportunities</th>
                </tr>
              </thead>
              <tbody>
                {LO.leadsAndOpportunities.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">{item.company}</td>
                    <td className="text-center">{item.opportunities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-bold mb-4 bg-yellow-300 text-center p-2 rounded-xl">History</h2>
            <p className="text-gray-500">login time ..</p>
            <p className="text-gray-500">logout time ..</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col space-y-8">
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
