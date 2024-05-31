import React from "react";

function RegConfirmedPage() {
  return (
    <section className="h-screen flex items-center bg-white">
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <div className="p-10 w-full h-auto max-w-md mx-auto bg-white border rounded-2xl text-center">
          <p className="text-xl text-left font-semibold">Подтверждение</p>
          <p className="mt-4 text-left">Ваши данные успешно были отправлены на рассмотрение, к вам на почту будет отправлена информация.</p>
        </div>
      </div>
      <div
        className="hidden lg:flex lg:w-1/2 lg:h-full bg-cover bg-center"
        style={{ backgroundImage: "url('../../../public/bg/bgauthnew.svg')" }}
      ></div>
    </section>
  );
}

export default RegConfirmedPage;
