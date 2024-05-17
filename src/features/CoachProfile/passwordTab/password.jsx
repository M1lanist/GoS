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
        className='border-solid border border-gray-600 rounded-lg border-neutral-300 h-14 p-4 mb-4'
        // type={showPassword ? 'text' : 'password'} // Изменяем тип ввода в зависимости от состояния showPassword
        placeholder='Введите старый пароль'
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <PasswordInput
        className='border-solid border border-gray-600 rounded-lg border-neutral-300 h-14 p-4 mb-4'
        // type={showPassword ? 'text' : 'password'}
        placeholder='Новый пароль'
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <PasswordInput
        className='border-solid border border-gray-600 rounded-lg border-neutral-300 h-14 p-4 mb-8'
        // type={showPassword ? 'text' : 'password'}
        placeholder='Повторите пароль' 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
     
     <UiButton text={'Сменить пароль'}/>
    </div>
  );
};

export default PasswordTab;
