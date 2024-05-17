import React, { useState } from 'react';
import UiButton from '@/shared/ui/ui-button/ui-button';
import ProfileTab from '@/features/CoachProfile/profileTab/profile';
import PasswordTab from '@/features/CoachProfile/passwordTab/password';
import { Bell, Globe } from 'lucide-react';
import GoAccountTab from '@/features/CoachProfile/goAccountTab/goAccountTab';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div className='w-screen bg-[rgb(244,244,244)] text-purple-800 font-poppins'>
      <div className='flex justify-end mb-6 mr-24 mt-8 items-center'>
        <UiButton className = 'bg-[rgb(222,219,255)] text-black w-[154px] h-[40px] text-[14px]' text={'Создать группу'}/>
          <Globe className='flex ml-4 text-black ' />
         <Bell className='flex ml-4 text-black'  />
      </div>

      
      <div className='rounded-lg w-11/12 m-auto h-5/6 bg-white'>
        <div className='flex w-3/5 justify-around pt-12 text-xl mb-8 gap-2'>
          <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'border-b-2 border-purple-600' : ''}>Профиль</button> 
          <button onClick={() => setActiveTab('changePassword')} className={activeTab === 'changePassword' ? 'border-b-2 border-purple-600' : ''}>Смена пароля</button>
          <button onClick={() => setActiveTab('accounts')} className={activeTab === 'accounts' ? 'border-b-2 border-purple-600' : ''}>Го аккаунты</button>
        </div>
        <hr />
        <div className='flex w-11/12 flex-row mt-12 ml-20'>
          {activeTab === 'profile' && (
           <ProfileTab/>
          )}
          {activeTab === 'changePassword' && (
            // Ваш код для вкладки "Смена пароля"
            <div>
              {/* Контент для вкладки "Смена пароля" */}
              <PasswordTab/>
            </div>
          )}
          {activeTab === 'accounts' && (
            // Ваш код для вкладки "Го аккаунты"
            
            <div>
              <GoAccountTab/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
