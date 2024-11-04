// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext'; // სწორად მოიძიეთ

const Header = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <header>
      <h1>{language === 'ka' ? 'Todo აპლიკაცია' : 'Todo Application'}</h1>
      <nav>
        <Link to="/">{language === 'ka' ? 'მთავარი' : 'Home'}</Link>
        <Link to="/tasks">{language === 'ka' ? 'ამოცანები' : 'Tasks'}</Link>
        <Link to="/settings">{language === 'ka' ? 'პარამეტრები' : 'Settings'}</Link>
      </nav>
      <select value={language} onChange={handleLanguageChange}>
        <option value="ka">ქართული</option>
        <option value="en">English</option>
      </select>
    </header>
  );
};

export default Header;