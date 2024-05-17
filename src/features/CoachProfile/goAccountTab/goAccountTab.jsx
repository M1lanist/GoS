import { Input } from '@/shared/components/ui/input';
import UiButton from '@/shared/ui/ui-button/ui-button';
import { Pencil, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

const GoAccountTab = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [selectedServer, setSelectedServer] = useState('');

  const handlePencilClick = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };

  const handleServerChange = (event) => {
    setSelectedServer(event.target.value);
  };

  return (
    <div>
      <div className='relative'>
        <Input 
          placeholder='Новое поле'
          className='pr-12 w-[551px] h-[56px] ' 
        />
        <div className='absolute inset-y-0 right-0 flex items-center space-x-2 pr-2'>
          <Pencil 
            className='w-4 h-4 text-black cursor-pointer w-[24px] h-[24px]' 
            onClick={handlePencilClick}
          />
          <Trash2 className='w-4 h-4 text-black cursor-pointer w-[24px] h-[24px]' />
        </div>
      </div>
      {showAdditionalFields && (
        <div className='mt-4 space-y-4'>
          <div className='relative'>
            <select 
              value={selectedServer} 
              onChange={handleServerChange} 
              className='w-[551px] h-[56px] border border-gray-300 rounded-lg p-2 text-black focus:border-purple-500 focus-visible:outline-0 focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-0'
            >
              <option value="" disabled>Go сервер</option>
              <option value="server1">OGS 1</option>
              <option value="server2">KGS</option>
              <option value="server3">FOX</option>
              <option value="server4">Tygem</option>
              <option value="server5">Pandanet</option>
              <option value="server6">Baduk</option>
            </select>
           
          </div>
          <Input 
            placeholder='Username'
            className='w-[551px] h-[56px]' 
          />
          <Input 
            placeholder='Rank'
            className='w-[551px] h-[56px]' 
          />
        </div>
      )}
      <div className='flex mt-8 space-x-4'>
        <UiButton 
          text='Добавить еще' 
          className='bg-[rgb(222,219,255)] text-black w-[177px] h-[48px] text-[16px]' 
        />
        <UiButton 
          text='Сохранить изменения' 
          className='bg-[rgb(222,219,255)] text-black w-[177px] h-[48px] text-[16px]' 
        />
      </div>
    </div>
  );
};

export default GoAccountTab;
