import React from "react";
import TopSide from "../components/Signup/TopSide";
import { SideBar } from "../components/SideBar/SideBar";

export const DashboardTemplate = ({ children }) => {
  return (
    <>
      <TopSide />
      <div className="flex">
        <div className="w-[26rem]">
          <SideBar />
        </div>
        <div className="bg-[#FAFAFA] w-full">{children}</div>
      </div>
    </>
  );
};
