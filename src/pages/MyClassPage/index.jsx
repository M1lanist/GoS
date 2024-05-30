import React, { useState } from 'react'
import { Globe,Bell, EllipsisVertical, Circle } from 'lucide-react';
import UiButton from '@/shared/ui/ui-button/ui-button';
import Headline1 from '@/shared/ui/ui-header/ui-typography/ui-typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';

const MyClassPage = () => {

  const [notification, setNotification] = useState(false)
  const progress = 74
  

  return (
    <div className='w-screen bg-[rgb(244,244,244)]  font-poppins'>
      <div className='flex w-11/12  justify-end m-auto mb-6  mt-8 items-center'>
        <UiButton className = 'bg-[rgb(222,219,255)] text-black w-[154px] h-[40px] text-[14px]' text={'Создать группу'}/>
          <Globe className='flex ml-4 text-black ' />
         <Bell className='flex ml-4 text-black'  />
      </div>

      
      <div className='rounded-lg w-11/12 m-auto h-5/6 bg-white'>
        <div className='w-1/3  rounded-lg bg-[rgb(253,253,253,1)] border border-neutral-300 shadow-md p-0'>
          <div className='flex ml-2 justify-between items-center'>
            <Headline1 className="text-black" variant="h4">Group 1</Headline1>
            <div className='flex'>
              <div className={`flex ${notification ? 'bg-purple-200' : 'bg-[rgb(250,250,250,1)]'} rounded-full p-2 inline-block relative`}>
                <Bell className='  text-black'/>
                {notification && <div className="w-3 h-3 bg-[rgb(239,116,116,1)] rounded-full absolute top-0 right-0 -mt-0 -mr-0"></div>}
              </div>
              <div className='flex bg-[rgb(250,250,250,1)] rounded-full p-2 inline-block'>
                <EllipsisVertical className='text-black'/>
              </div>
            </div>
          </div>
          <div className='ml-2'>
              <Headline1 className="text-neutral-700" variant="body2">Успеваемость:{progress}%</Headline1>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf9_HVWBJ9uLLRKi2e9DnStvEzRgFI1l_Sw&s" alt="" />

          <div className='flex justify-between items-end ml-2'>
            <Headline1 className="text-neutral-700" variant="body2">Ученики:{progress}</Headline1>
            <div className='mt-3 flex -space-x-6 overflow-hidden'>
              <Avatar>
                <AvatarImage className="inline-block h-9 w-9 rounded-full ring-1 ring-white" src="https://cs12.pikabu.ru/post_img/big/2021/06/14/8/1623673511141489136.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage className="inline-block h-9 w-9 rounded-full ring-1 ring-white" src="https://fotobase.co/files/img/photo/krutye-na-avu-anime/krutye-na-avu-anime-11.webp"/>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage className="inline-block h-9 w-9 rounded-full ring-1 ring-white" src="https://cs12.pikabu.ru/post_img/big/2021/06/14/8/1623673511141489136.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage className="inline-block h-9 w-9 rounded-full ring-1 ring-white" src="https://fotobase.co/files/img/photo/krutye-na-avu-anime/krutye-na-avu-anime-11.webp"/>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage className="inline-block h-9 w-9 rounded-full ring-1 ring-white" src="https://cs12.pikabu.ru/post_img/big/2021/06/14/8/1623673511141489136.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClassPage;