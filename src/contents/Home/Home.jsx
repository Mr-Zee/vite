// import React from "react";
// import RightSection from "./RightSection";
import LeftTable from "./LeftTable";
// import LO from "../../../leadsandopp.json";

const Home = () => {
  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
    //   {/* <h1 className="text-3xl font-bold mb-8">Opportunity Hunter</h1> */}
    //   <div className="flex w-full max-w-7xl p-8 space-x-8 bg-white rounded-lg shadow-lg">
    //     <div className="w-1/3">
    //       <div className="flex flex-col space-y-4">
    //         <LeftTable />
    //       </div>
    //     </div>
    //     <div className="w-2/3 flex flex-col justify-center space-y-8">
    //       <div
    //         className={` h-30  overflow-hidden mx-2 flex items-center justify-center`}
    //       >
    //         <div className="px-6 py-4 ">
    //           <div className="flex items-center justify-center ">
    //             <div className="text-4xl font-bold">Opportunity Hunter</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-200">
    //         <h2 className="text-xl font-bold bg-yellow-300 text-center p-2 rounded-xl">
    //           Leads and Opportunities
    //         </h2>
    //         <table className="w-full">
    //           <thead>
    //             <tr>
    //               <th>Name</th>
    //               <th>Opportunities</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {LO.leadsAndOpportunities.map((item, index) => (
    //               <tr key={index}>
    //                 <td className="text-center">{item.company}</td>
    //                 <td className="text-center">{item.opportunities}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>

    //       <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-200">
    //         <h2 className="text-xl font-bold mb-4 bg-yellow-300 text-center p-2 rounded-xl">
    //           History
    //         </h2>
    //         <p className="text-gray-500">login time ..</p>
    //         <p className="text-gray-500">logout time ..</p>
    //       </div>
    //     </div>
    //     <div className="w-full md:w-1/3 flex flex-col space-y-8">
    //       <RightSection />
    //     </div>
    //   </div>
    // </div>
    <div className="h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-300">
      <div className="flex flex-wrap p-4 h-full">
        <div className="w-full lg:w-1/5 p-4 h-full">
            <LeftTable />
        </div>
        <div className="w-full lg:w-3/5 p-4 h-full flex">
          <div className="lg:w-1/2 pr-3">
            <div className="bg-white/50  rounded-lg shadow-md p-4">
              <h3 className="font-medium text-black mb-2">Dashboard</h3>
              <p className="text-xl font-semibold text-indigo-500">
                $90,500,000
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white/50 rounded-lg shadow-md p-4">
              <h3 className="font-medium text-black mb-2">Configs</h3>
              <p className="text-lg font-semibold">2452</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/5 p-4 h-full">
          <div className="bg-white/70 rounded-lg  p-4">
            <div className="container flex justify-center bg-blue-300/50 py-2 rounded-lg">
              <h2 className="font-medium text-black ">Scrapped Data</h2>
            </div>
            <p className="text-gray-400 pt-3">scrapped data List...</p>
            <p className="text-gray-400 ">scrapped data List...</p>
            <p className="text-gray-400 ">scrapped data List...</p>
            <p className="text-gray-400 ">scrapped data List...</p>
          </div>
          <div className="bg-white/70 rounded-lg  p-4 mt-4">
            <div className="container flex justify-center bg-green-300/50 py-2 rounded-lg">
              <h2 className="font-medium text-black">ML Run</h2>
            </div>
            <p className="text-gray-400 pt-2">Run History</p>
            <p className="text-gray-400 ">Run History</p>
            <p className="text-gray-400 ">Run History</p>
            
          </div>
          <div className="bg-white/70 rounded-lg  mt-4  p-4">
            <div className="container flex justify-center rounded-lg bg-red-300/50 py-2">
              <h2 className="font-medium text-black">Data Load</h2>
            </div>
            <p className=" text-gray-400 pt-3">Last checked: An hour ago</p>
            <p className=" text-gray-400 ">Last checked: 4 hours</p>
            <p className=" text-gray-400 ">Last checked: 3 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
