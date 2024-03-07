import React from 'react'
import TableView from '../Tables/TableView';
import tabledata from "../../../tabledata.json"

const LeftTable = () => {
    return (
      <div className="w-1/5 h-screen bg-blue-200">
        <TableView data={tabledata}/>
      </div>
    );
  };

export default LeftTable