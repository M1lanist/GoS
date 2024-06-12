import React, { useState } from 'react';
import UiButton from '@/shared/ui/ui-button/ui-button'; 
import ProfileTab from '@/features/CoachProfile/profileTab/profile';
import PasswordTab from '@/features/CoachProfile/passwordTab/password';
import { Bell, ChevronUp, Globe } from 'lucide-react';
import GoAccountTab from '@/features/CoachProfile/goAccountTab/goAccountTab';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div className='w-full bg-[rgb(244,244,244)] font-poppins'>
      <div className='flex justify-end mb-6 mr-24 mt-8 items-center'>
        <UiButton className = 'bg-[rgb(222,219,255)] text-black w-[154px] h-[40px] text-[14px] font-sans' text={'Создать группу'}/>
          <Globe className='flex ml-4 text-black bg-white rounded-full w-[40px] h-[40px] p-2' />
          <Bell className='flex ml-4 text-black bg-white rounded-full w-[40px] h-[40px] p-2'  />
      </div>

      
      <div className='rounded-lg w-11/12 m-auto h-[776px] bg-white'>
        <div className='flex w-3/5 justify-around pt-12 text-xl mb-8 gap-2 text-[#000000] font-sans '>
            <button onClick={() => setActiveTab('profile')}
                    className={`relative focus:outline-none ${activeTab === 'profile' ? 'after:border-b-2 border-[rgba(99,83,154)]'  : ''}`}>
                        Профиль
                    {activeTab === 'profile' && <ChevronUp className="absolute top-7 bottom-0 left-0 right-0 mx-auto " style={{color : 'black'}} />}
            </button> 

            <button onClick={() => setActiveTab('changePassword')} 
                    className={`relative focus:outline-none ${activeTab === 'changePassword' ? 'after:border-b-2  border-[rgba(99,83,154)]' : ''}`}>
                        Смена пароля
                    {activeTab === 'changePassword' && <ChevronUp className="absolute top-7 bottom-0 left-0 right-0 mx-auto " style={{color : 'black'}} />}
            </button>

            <button onClick={() => setActiveTab('accounts')} 
                    className={`relative focus:outline-none ${activeTab === 'accounts' ? 'after:border-b-2  border-[rgba(99,83,154)]' : ''}`}>
                        Го аккаунты
                    {activeTab === 'accounts' && <ChevronUp className="absolute top-7 bottom-0 left-0 right-0 mx-auto " style={{color : 'blackт'}} />}
  </button>
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
