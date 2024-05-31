import React from "react";
import { useForm } from "react-hook-form";

function RegisterPage({ onLoginClick, onConfirm }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(); 

  const onSubmit = (data) => {
    console.log(data);
  
    onConfirm();
  };

  return (
    <div className="p-10 w-full h-auto max-w-md mx-auto bg-white border rounded-2xl mb-10">
      <form className="w-auto text-right" onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-4 text-xl font-semibold text-left">Регистрация</p>
        <div className="mb-4">
          <input
            id="lastName"
            type="text"
            className={`w-full px-3 py-2 border rounded ${errors.lastName ? "border-red-500" : ""}`}
            placeholder="Фамилия"
            {...register("lastName", { required: "Фамилия обязательна" })}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            id="firstName"
            type="text"
            className={`w-full px-3 py-2 border rounded ${errors.firstName ? "border-red-500" : ""}`}
            placeholder="Имя"
            {...register("firstName", { required: "Имя обязательно" })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            id="email"
            type="text"
            className={`w-full px-3 py-2 border rounded ${errors.email ? "border-red-500" : ""}`}
            placeholder="Эл. почта"
            {...register("email", {
              required: "Эл. почта обязательна",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Неправильный формат эл. почты"
              }
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            id="club"
            type="text"
            className={`w-full px-3 py-2 border rounded ${errors.club ? "border-red-500" : ""}`}
            placeholder="Ваш клуб"
            {...register("club", { required: "Название клуба обязательно" })}
          />
          {errors.club && (
            <p className="text-red-500 text-sm mt-1">{errors.club.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            id="rank"
            type="text"
            className={`w-full px-3 py-2 border rounded ${errors.rank ? "border-red-500" : ""}`}
            placeholder="Ранг"
            {...register("rank", { required: "Ранг обязателен" })}
          />
          {errors.rank && (
            <p className="text-red-500 text-sm mt-1">{errors.rank.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            id="phone"
            type="text"
            className={`w-full px-3 py-2 border rounded ${errors.phone ? "border-red-500" : ""}`}
            placeholder="Номер телефона"
            {...register("phone", {
              required: "Номер телефона обязателен",
              maxLength: {
                value: 10,
                message: "Номер телефона должен содержать не более 10 символов"
              },
              pattern: {
                value: /^0[0-9]{9}$/,
                message: "Номер телефона должен начинаться с 0 и содержать 10 символов (например, 0555777888  )"
              }
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="text-center mb-6">
          <button
            className={`w-full rounded px-4 py-2 text-white text-lg font-medium transition duration-150 ease-in-out ${Object.keys(errors).length === 0 ? "bg-purple-600" : "bg-gray-400 cursor-not-allowed"}`}
            type="submit"
            disabled={Object.keys(errors).length !== 0}
          >
            Отправить на рассмотрение
          </button>
        </div>
        <div className="flex justify-center items-center text-center">
          <a href="#" className="text-sm text-purple-700 hover:underline" onClick={onLoginClick}>
            Войти в систему
          </a>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
