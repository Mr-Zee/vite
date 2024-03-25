import React from "react";
import LeftTable from "./LeftTable";
import LO from "../../../leadsandopp.json";

const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-300">
      <div className="flex flex-wrap p-4 h-full">
        {/* Left Section */}
        <div className="w-full lg:w-1/5 p-4 h-full">
          <LeftTable />
        </div>
        
        {/* Middle Section */}
        <div className="w-full lg:w-3/5 p-4 h-full flex flex-col">
          <div className="lg:flex lg:flex-row lg:justify-between">
            {/* Dashboard */}
            <div className="lg:w-1/2 pr-3 mb-4 lg:mb-0">
              <div className="bg-white/50 rounded-lg shadow-md p-4">
                <h3 className="font-medium text-black mb-2">Dashboard</h3>
                <p className="text-xl font-semibold text-indigo-500">$</p>
              </div>
            </div>
            {/* Configs */}
            <div className="lg:w-1/2">
              <div className="bg-white/50 rounded-lg shadow-md p-4">
                <h3 className="font-medium text-black mb-2">Configs</h3>
                <p className="text-lg font-semibold">2452</p>
              </div>
            </div>
          </div>
          
          {/* Leads and Opportunities */}
          <div className="bg-white/60 p-6 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-bold bg-gray-300/80 text-center p-2 rounded-xl">Leads and Opportunities</h2>
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

          {/* History  */}
          <div className="bg-white/60 p-6 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-bold bg-gray-300/80 text-center p-2 rounded-xl">History</h2>
            <table className="w-full">
              <tbody className="mt-3">
                {LO.leadsAndOpportunities.map((item, index) => (
                  <tr key={index}>
                    <td >{item.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full lg:w-1/5 p-4 h-full">
          {/* Scrapped Data */}
          <div className="bg-white/70 rounded-lg p-4">
            <div className="container flex justify-center bg-blue-300/50 py-2 rounded-lg">
              <h2 className="font-medium text-black">Scrapped Data</h2>
            </div>
            <p className="text-gray-400 pt-3">scrapped data List...</p>
            <p className="text-gray-400">scrapped data List...</p>
            <p className="text-gray-400">scrapped data List...</p>
            <p className="text-gray-400">scrapped data List...</p>
          </div>
          {/* ML Run */}
          <div className="bg-white/70 rounded-lg p-4 mt-4">
            <div className="container flex justify-center bg-green-300/50 py-2 rounded-lg">
              <h2 className="font-medium text-black">ML Run</h2>
            </div>
            <p className="text-gray-400 pt-2">Run History</p>
            <p className="text-gray-400">Run History</p>
            <p className="text-gray-400">Run History</p>
          </div>
          {/* Data Load */}
          <div className="bg-white/70 rounded-lg p-4 mt-4">
            <div className="container flex justify-center rounded-lg bg-red-300/50 py-2">
              <h2 className="font-medium text-black">Data Load</h2>
            </div>
            <p className="text-gray-400 pt-3">Last checked: An hour ago</p>
            <p className="text-gray-400">Last checked: 4 hours</p>
            <p className="text-gray-400">Last checked: 3 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
