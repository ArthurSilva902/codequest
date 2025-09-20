import React from "react";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import RegisterSection from "../components/RegisterSection/RegisterSection";
import FooterSection from "../components/FooterSection/FooterSection";

const RegisterPage: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden w-full flex flex-col min-h-screen">
      <HeaderSection />
      <RegisterSection />
      <FooterSection />
    </div>
  );
};

export default RegisterPage;
