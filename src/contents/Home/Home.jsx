import React from 'react'
import Card from './Cards';
import LeftTable from './LeftTable';
import RightTable from './RightTable';

const Home = () => {
     const cardsData = [
    {
      title: "Oppertunity",
    },
    {
      title: "Dashboard",
    },
    {
      title: "Lead & Oppertunity",
    },
    {
      title: "Follow up/ History",
    },
    // {
    //   title: "Title 5",
    //   description: "Description 5",
    // },
  ];
    return (
        <div className="flex justify-center items-center h-screen">
          <LeftTable />
          <div className="flex flex-wrap justify-center w-3/5">
            {cardsData.map((card, index) => (
              <Card key={index} title={card.title}/>
            ))}
          </div>
          <RightTable />
        </div>
      );
}

export default Home