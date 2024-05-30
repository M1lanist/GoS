import { PasswordInput } from '@/shared/components/ui/password-input';
import UiButton from '@/shared/ui/ui-button/ui-button';
import React, { useState } from 'react';

const PasswordTab = () => {
  const [showPassword, setShowPassword] = useState(false); // Состояние для отображения пароля
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Функция для изменения типа ввода пароля
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>


      <PasswordInput
        className='border-solid border rounded-lg border-neutral-300 h-14 p-4 mb-4'
        // type={showPassword ? 'text' : 'password'} // Изменяем тип ввода в зависимости от состояния showPassword
        placeholder='Введите старый пароль'
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <PasswordInput
        className='border-solid border  rounded-lg border-neutral-300 h-14 p-4 mb-4'
        // type={showPassword ? 'text' : 'password'}
        placeholder='Новый пароль'
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <PasswordInput
        className='border-solid border  rounded-lg border-neutral-300 h-14 p-4 mb-8'
        // type={showPassword ? 'text' : 'password'}
        placeholder='Повторите пароль' 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
     
     <UiButton className='w-[195px] h-[48px] py-3.5 px-8 text-[16px] bg-[rgb(222,219,255)] text-black rounded-md font-poppins grid gap-2.5' text={'Сменить пароль'}/>
    </div>
  );
};

export default PasswordTab;
