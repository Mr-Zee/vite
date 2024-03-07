import React from "react";
import AppContent  from "../components/AppContent";


const DefaultLayout = () => {
  return (
    <div>
      <div className="body flex-grow-1">
        <AppContent />
      </div>
    </div>
  );
};

export default DefaultLayout;
