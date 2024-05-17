import { Input } from '@/shared/components/ui/input';
import React, { useState } from 'react';

const ProfileTab = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rank, setRank] = useState('');

  return (
    <div className='flex items-start '>
      <div className='mr-8 flex flex-col items-center'>
      <img className='w-36' src='https://static.vecteezy.com/system/resources/previews/000/366/953/original/edit-profile-vector-icon.jpg' alt="" />
      <button className='text-sm text-purple-500 hover:underline'>Изменить</button>
      </div>
      <div className='flex flex-col space-y-4 w-9/12'>
        <Input
          className='border-solid border border-gray-600 rounded-lg border-neutral-300 h-14 p-4'
          type="text"
          placeholder='Адрес эл.почты'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          
        <Input
          className='border-solid border border-gray-600 rounded-lg border-neutral-300 h-14 p-4'
          type="text"
          placeholder='Имя'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className='border-solid border border-gray-600 rounded-lg border-neutral-300 h-14 p-4'
          type="text"
          placeholder='Фамилия'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          className='border-solid border border-gray-600 rounded-lg border-neutral-300 h-14 p-4'
          type="text"
          placeholder='Номер телефона'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          className='border-solid border border-gray-600 rounded-lg border-neutral-300 h-14 p-4'
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
