import React from 'react'
import TableView from '../Tables/TableView';
import tabledata from "../../../tabledata.json"

const LeftTable = () => {
    return (
      <div className="w-1/5 h-full">
        <TableView data={tabledata}/>
      </div>
    );
  };

export default LeftTable