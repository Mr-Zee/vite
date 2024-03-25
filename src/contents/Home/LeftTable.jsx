// import React from 'react'
import tabledata from "../../../tabledata.json"
// import LeftTableView from '../Tables/LeftSectionHome';
import LeftHome from '../Tables/LeftHome';

const LeftTable = () => {
    return (
      <div >
        {/* <LeftTableView data={tabledata}/> */}
        <LeftHome data={tabledata}/>
      </div>
    );
  };

export default LeftTable