import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useLoginMutation } from "./../../entities/auth/api/authApi"; 
import { useNavigate } from "react-router-dom";
import ForgotPasswordPage from "./forget-password";

function LoginPage({ onRegisterClick }) {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log('Payload being sent to the server:', data);
      const response = await login(data).unwrap();
      console.log("Login successful:", response);
      navigate("/");
    } catch (error) {
      console.error('An error occurred:', error);
      if (error.data) {
        console.error('Error details:', error.data);
        if (error.data.errors) {
          Object.entries(error.data.errors).forEach(([key, value]) => {
            console.error(`Field ${key}: ${value}`);
          });
        }
      }
    }
  };

  const handleForgotPasswordClick = () => {
    setForgotPassword(true);
  };

  if (forgotPassword) {
    return <ForgotPasswordPage onRegisterClick={onRegisterClick} onLoginClick={() => setForgotPassword(false)} />;
  }

  return (
    <div className="text-center">
      <h1 className="font-semibold text-4xl mb-10 mt-10">Добро пожаловать</h1>
      <div className="p-10 w-[auto] h-auto max-w-lg mx-auto bg-gray-50 mb-28">
        <form className="w-[300px] text-right" onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-4 text-xl font-semibold text-left">Вход в систему</p>
          <div className="mb-4 w-[300px]">
            <input
              id="email"
              type="email"
              className={`w-full px-3 py-2 border rounded ${errors.email ? "border-red-500" : ""}`}
              placeholder="Адрес электронной почты"
              {...register("email", {
                required: "Электронная почта обязательна",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Неправильный формат электронной почты"
                }
              })}
            />
            {errors.email && !forgotPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6 relative">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={`w-full px-3 py-2 border rounded pr-10 ${errors.password && !forgotPassword ? "border-red-500" : ""}`}
                placeholder="Пароль"
                {...register("password", {
                  required: "Пароль обязателен",
                  minLength: {
                    value: 6,
                    message: "Пароль должен состоять как минимум из 6 символов"
                  }
                })}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center mr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </div>
            </div>
            {errors.password && !forgotPassword && (
              <p className="text-red-500 text-sm mt-1 mb-1">{errors.password.message}</p>
            )}
            {forgotPassword && (
              <p className="text-red-500 text-sm mt-1 mb-1">Забыли пароль?</p>
            )}
            <a href="#" className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm mt-9 text-purple-700 hover:underline" onClick={handleForgotPasswordClick}>
              Забыли пароль?
            </a>
          </div>
          <div className="text-center mb-6">
            <button
              className={`w-[300px] rounded px-4 py-2 text-white text-lg mt-6 font-medium transition duration-150 ease-in-out ${Object.keys(errors).length === 0 ? "bg-purple-400 hover:bg-purple-500" : "bg-gray-300 cursor-not-allowed"}`}
              type="submit"
              disabled={Object.keys(errors).length !== 0}
            >
              Войти
            </button>
          </div>
          <div className="flex justify-center items-center text-center">
            <a href="#" className="text-sm text-purple-700 hover:underline" onClick={onRegisterClick}>
              Регистрация тренера
            </a>
          </div>
        </form>
        {isError && (
          <div className="mt-4 text-red-500">
            {error?.data?.message || "Произошла ошибка при входе"}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
