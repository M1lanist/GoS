import { Input } from '@/shared/components/ui/input';
import { Pencil } from 'lucide-react';
import React, { useState } from 'react';

const ProfileTab = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rank, setRank] = useState('');

  // Состояние для режима редактирования
  const [isEditing, setIsEditing] = useState(false);

  // Функция для переключения режима редактирования
  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className='relative flex items-start'>
      <div className='mr-8 flex flex-col items-center'>
        <img className='w-36' src='https://static.vecteezy.com/system/resources/previews/000/366/953/original/edit-profile-vector-icon.jpg' alt="" />
        <button className='text-sm text-[rgba(99,83,154)] hover:underline leading-4 pt-2'>
          Изменить 
        </button>
      </div>
      <div className='flex flex-col space-y-2 w-9/12 relative'>
        <div className='w-full flex justify-end items-center ml-48'>
          <Pencil className='mr-2 text-[rgba(99,83,154)]' /> {/* Изменение цвета */}
          <button
            onClick={handleEditClick}
            className='text-[rgba(99,83,154)] hover:underline leading-4 text-base'
          >
            {isEditing ? 'Сохранить' : 'Редактировать'}
          </button>
        </div>
        <Input
          disabled={!isEditing}
          className='border-solid border rounded-lg border-neutral-300 h-14 p-4 w-[551px]'
          type="text"
          placeholder='Адрес эл.почты'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          disabled={!isEditing}
          className='border-solid border rounded-lg border-neutral-300 h-14 p-4 w-[551px]'
          type="text"
          placeholder='Имя'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          disabled={!isEditing}
          className='border-solid border rounded-lg border-neutral-300 h-14 p-4 w-[551px]'
          type="text"
          placeholder='Фамилия'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          disabled={!isEditing}
          className='border-solid border rounded-lg border-neutral-300 h-14 p-4 w-[551px]'
          type="text"
          placeholder='Номер телефона'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          disabled={!isEditing}
          className='border-solid border rounded-lg border-neutral-300 h-14 p-4 w-[551px]'
          type="text"
          placeholder='Ваш ранг: '
          value={rank}
          onChange={(e) => setRank(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProfileTab;
