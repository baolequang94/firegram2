import React, { useEffect } from "react";
import Header from "../components/Header";
import Timeline from "../components/Timeline";

const Dashboard = () => {
  useEffect(() => {
    document.title = `Dashboard • Firegram`;
  }, []);

  return (
    <div className="bg-lightMode-gray-background h-screen w-full">
      <Header />

      <div className="grid grid-cols-4 gap-4 container mx-auto lg:max-w-screen-lg pt-12 sm:px-12 lg:px-0">
        <div className="col-span-2">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
