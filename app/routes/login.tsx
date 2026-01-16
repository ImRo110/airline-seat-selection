import React from "react";
import LoginBackground from "../assets/images/login-background.webp";
import LoginCard from "~/components/Login/LoginCard";

const login = () => {
  return (
    <div>
      <div className="absolute">
        <img src={LoginBackground} alt="" />
      </div>
      <div className="relative inset-0 z-10 flex items-center justify-center w-1/2 max-w-[400px] top-0 left-0 transform translate-x-1/2 translate-y-1/2">
        <LoginCard />
      </div>
    </div>
  );
};

export default login;
