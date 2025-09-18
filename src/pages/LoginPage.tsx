import React from "react";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import LoginSection from "../components/LoginSection/LoginSection";
import FooterSection from "../components/FooterSection/FooterSection";

const LoginPage: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden w-full flex flex-col min-h-screen">
      <HeaderSection />
      <LoginSection />
      <FooterSection />
    </div>
  );
};

export default LoginPage;
