import '../../app/globals.css';
import { BarChart3, Book, CalendarCheck, CalendarDays, Home, LogOut, Milestone, UserRound, UsersRound } from 'lucide-react';
import React, { useState } from 'react';
import UiSidebar, { SidebarItem } from '../../shared/ui/ui-sidebar/ui-sidebar';

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <UiSidebar>
      <SidebarItem
        icon={<Home className="text-black" />}
        text="Главная"
        to="/mainpage"
        active={activeItem === 'mainpage'}
        onClick={() => setActiveItem('mainpage')}
      />
      <SidebarItem
        icon={<UsersRound className="text-black" />}
        text="Студенты"
        to="/myclass"
        active={activeItem === 'myclass'}
        onClick={() => setActiveItem('myclass')}
      />
      <SidebarItem
        icon={<CalendarCheck className="text-black" />}
        text="Учебные материалы"
        to="/lecture"
        active={activeItem === 'materials'}
        onClick={() => setActiveItem('materials')}
      />
      <SidebarItem
        icon={<CalendarDays className="text-black" />}
        text="Расписание"
        to="/schedule"
        active={activeItem === 'schedule'}
        onClick={() => setActiveItem('schedule')}
      />
      <SidebarItem
        icon={<Milestone className="text-black" />}
        text="Урок"
        to="/board"
        active={activeItem === 'lectures'}
        onClick={() => setActiveItem('lectures')}
      />
      <div style={{ marginTop: '80px' }}>
        <SidebarItem
          icon={<UserRound className="text-black" />}
          text="Профиль"
          to="/myprofile"
          active={activeItem === 'profile'}
          onClick={() => setActiveItem('profile')}
        />
      </div>
      <SidebarItem
        icon={<LogOut className="text-black" />}
        text="Выйти"
        to="/login"
        active={activeItem === 'logout'}
        onClick={() => setActiveItem('logout')}
      />
    </UiSidebar>
  );
}

export default Sidebar;
