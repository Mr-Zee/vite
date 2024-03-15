import React from 'react'
import tabledata from "../../../tabledata.json"
import LeftTableView from '../Tables/LeftSectionHome';

const LeftTable = () => {
    return (
      <div className="w-full">
        <LeftTableView data={tabledata}/>
      </div>
    );
  };

export default LeftTable