// import React from 'react'

const RightSection = () => {
  return (
    <div>
        <div className="w-full pr-4 grid grid-cols-1 lg:grid-rows-3 gap-6">
          <div className="bg-gray-50 rounded-lg  p-4">
            <div className="container flex justify-center bg-blue-300 py-2 rounded-lg">
              <h2 className="font-medium text-black ">Scrapped Data</h2>
            </div>
            <p className="text-gray-400 pt-3">scrapped data List...</p>
            <p className="text-gray-400 ">scrapped data List...</p>
            <p className="text-gray-400 ">scrapped data List...</p>
            <p className="text-gray-400 ">scrapped data List...</p>
          </div>
          <div className="bg-gray-50 rounded-lg  p-4">
            <div className="container flex justify-center bg-green-300 py-2 rounded-lg">
              <h2 className="font-medium text-black">ML Run</h2>
            </div>
            <p className="text-gray-400 pt-3">Run History</p>
          </div>
          <div className="bg-gray-50 rounded-lg    p-4">
            <div className="container flex justify-center rounded-lg bg-red-300 py-2">
              <h2 className="font-medium text-black">Data Load</h2>
            </div>
            <p className=" text-gray-400 pt-3">Last checked: An hour ago</p>
          </div>
        </div>
    </div>
  )
}

export default RightSection