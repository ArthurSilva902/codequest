import React from "react";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import DescriptionSection from "../components/DescriptionSection/DescriptionSection";
import LoginOptionsSection from "../components/LoginOptionsSection/LoginOptionsSection";
import SubjectsSection from "../components/SubjectsSection/SubjectsSection";
import FooterSection from "../components/FooterSection/FooterSection";

const WebHome: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
      <HeaderSection />
      <DescriptionSection />
      <LoginOptionsSection />
      <SubjectsSection />
      <FooterSection />
    </div>
  );
};

export default WebHome;