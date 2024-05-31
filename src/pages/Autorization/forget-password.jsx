import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ForgotPasswordPage({ onRegisterClick, onLoginClick }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setFormSubmitted(true);
  };

  return (
    <div className="p-10 w-full h-auto max-w-md mx-auto bg-white border rounded-2xl mb-10">
      {!formSubmitted ? (
        <form className="w-auto text-right" onSubmit={handleSubmit(onSubmit)}>
           <p className="mb-4 text-xl font-semibold text-left">Забыли пароль</p>
          <div className="mb-4">
            <input
              id="email"
              type="email"
              className={`w-full px-3 py-2 border rounded ${errors.email ? "border-red-500" : ""}`}
              placeholder="Адрес эл.почты"
              {...register("email", { required: "Email обязателен" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="text-center mb-6">
            <button
              className={`w-full rounded px-4 py-2 text-white text-lg font-medium transition duration-150 ease-in-out ${Object.keys(errors).length === 0 ? "bg-purple-600" : "bg-gray-400 cursor-not-allowed"}`}
              type="submit"
              disabled={Object.keys(errors).length !== 0}
            >
              Восстановить пароль
            </button>
          </div>
          <div className="flex justify-center items-center text-center">
            <a
              className="text-sm text-purple-700 hover:underline cursor-pointer"
              onClick={onRegisterClick}
            >
              Регистрация тренера
            </a>
          </div>
          <div className="flex justify-center items-center text-center mt-2">
           
          </div>
        </form>
      ) : (
        <div>
          <p>Форма отправлена. Можете добавить здесь дополнительный контент или сообщение.</p>
        </div>
      )}
    </div>
  );
}

export default ForgotPasswordPage;
