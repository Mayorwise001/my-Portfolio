import React, { useEffect, useState } from 'react';
import '../stylescss/toggle.css'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ?'🌙' : '☀️'}
      <span className="mode-text">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>

    </button>
  );
};

export default ThemeToggle;
