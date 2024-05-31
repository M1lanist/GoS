// src/components/Authorization.jsx
import React, { useState } from "react";
import LoginPage from "./log-in-page";
import RegisterPage from "./coach-reg";
import RegConfirmedPage from "./reg-confirmed";

function Authorization() {
  const [isRegister, setIsRegister] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleRegisterClick = () => {
    setIsRegister(true);
  };

  const handleLoginClick = () => {
    setIsRegister(false);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return <RegConfirmedPage />;
  }

  return (
    <section className="h-screen flex items-center bg-white">
      <div className="flex flex-col items-center w-full lg:w-1/2 z-10">
        {isRegister ? (
          <RegisterPage onLoginClick={handleLoginClick} onConfirm={handleConfirm} />
        ) : (
          <LoginPage onRegisterClick={handleRegisterClick} />
        )}
      </div>
      <div
        className="hidden lg:flex lg:w-1/2 lg:h-full bg-cover bg-center"
        style={{ backgroundImage: "url('../../../public/bg/bgauthnew.svg')" }}
      ></div>
    </section>
  );
}

export default Authorization;
