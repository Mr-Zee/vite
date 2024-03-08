import React from 'react'
import tabledata from "../../../tabledata.json"
import LeftTableView from '../Tables/LeftSectionHome';

const LeftTable = () => {
    return (
      <div className="w-1/5 h-full">
        <LeftTableView data={tabledata}/>
      </div>
    );
  };

export default LeftTable