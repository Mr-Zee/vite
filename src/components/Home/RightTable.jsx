import React from 'react'
import TableView from '../Tables/TableView';
import tabledata from "../../../tabledata.json"

const RightTable = () => {
  return (
    <div className="w-1/5 h-screen bg-red-200">
        <TableView data={tabledata}/>
    </div>
  );
  };

export default RightTable