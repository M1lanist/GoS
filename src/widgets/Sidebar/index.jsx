import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import UiSidebar, { SidebarItem } from '../../shared/ui/ui-sidebar/ui-sidebar';
import '../../app/globals.css';
import { BarChart3, UserCircle, Home, Book, NotebookPen, CalendarCheck, LayoutDashboard, UserRound, LogOut } from 'lucide-react'; // Удалили один из импортов LayoutDashboard

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <Router>
      <div>
        <UiSidebar>
          <SidebarItem
            icon={<Home className="text-black" />} 
            text={<Link to="/Frontend/src/pages/MainPage/index.jsx" className="no-decoration">Главная</Link>}
            active={activeItem === 'mainpage'}
            onClick={() => setActiveItem('mainpage')}
          />

          <SidebarItem
            icon={<Book className="text-black" />} 
            text="Мой класс"
            to="/"
            active={activeItem === 'myclass'}
            onClick={() => setActiveItem('myclass')}
          />
          <SidebarItem
            icon={<NotebookPen className="text-black" />} 
            text="Урок"
            to="/board"
            active={activeItem === 'lesson'}
            onClick={() => setActiveItem('/lesson')}
          />
          <SidebarItem
            icon={<CalendarCheck className="text-black" />} 
            text="Расписание"
            to="/schedule"
            active={activeItem === 'schedule'}
            onClick={() => setActiveItem('schedule')}
          />
          <SidebarItem
            icon={<LayoutDashboard className="text-black" />} 
            text="Лекции"
            to="/lectures"
            active={activeItem === 'lectures'}
            onClick={() => setActiveItem('lectures')}
          />
          <div style={{ marginTop: '30px' }}>
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
            to="/logout"
            active={activeItem === 'logout'}
            onClick={() => setActiveItem('logout')}
          />
        </UiSidebar>
      </div>
    </Router>
  );
}

export default Sidebar;
