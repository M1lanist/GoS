import '../../app/globals.css';

import { BarChart3, Book, CalendarCheck, CalendarDays, Home, LayoutDashboard, LogOut, Milestone, NotebookPen, UserCircle, UserRound, UsersRound } from 'lucide-react'; // Удалили один из импортов LayoutDashboard
import { Link, BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import UiSidebar, { SidebarItem } from '../../shared/ui/ui-sidebar/ui-sidebar';

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  return (
      <div>
        <UiSidebar>
          <SidebarItem
            icon={<Home className="text-black" />}  
            text={<Link to="/" className="no-decoration">Главная</Link>} 
            active={activeItem === 'mainpage'} 
            onClick={() => setActiveItem('mainpage')} 
          />

          <SidebarItem
            icon={<UsersRound  className="text-black" />}  
            text="Студенты" 
            to="../../pages/MyClassPage" 
            active={activeItem === 'myclass'} 
            onClick={() => setActiveItem('myclass')} 
          />
          <SidebarItem
            icon={<CalendarCheck className="text-black" />}  
            text="Учебные материалы" 
            to="../../pages/LecturesPage/index.jsx" 
            active={activeItem === 'materials'} 
            onClick={() => setActiveItem('materials')} 
          />
          <SidebarItem
            icon={<CalendarDays className="text-black" />}  
            text="Расписание" 
            to="../../pages/SchedulePage/index.jsx" 
            active={activeItem === 'schedule'} 
            onClick={() => setActiveItem('schedule')} 
          />
          <SidebarItem
            icon={<Milestone  className="text-black" />}  
            text="Урок" 
            to="../../pages/BoardPage" 
            active={activeItem === 'lectures'} 
            onClick={() => setActiveItem('lectures')} 
          />
          <div style={{ marginTop: '80px' }}> {/* Дополнительный отступ между кнопками */}
            <SidebarItem
              icon={<UserRound className="text-black" />}  
              text="Профиль" 
              to="../../pages/ProfilePage" 
              active={activeItem === 'profile'} 
              onClick={() => setActiveItem('profile')} 
            />
          </div>
          <SidebarItem
            icon={<LogOut className="text-black" />}  
            text="Выйти" 
            to="../../pages/Autorization" 
            active={activeItem === 'logout'} 
            onClick={() => setActiveItem('logout')} 
          />
        </UiSidebar>
      </div>
  );
}

export default Sidebar;
