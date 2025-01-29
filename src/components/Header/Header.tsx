import React from 'react';
import './Header.css';

interface HeaderProps {
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode }) => {
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo">BrandLogo</div>
      <nav className="nav">
        <a
          href="#learn-page"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('learn-page');
          }}
        >
          Learn
        </a>
        <a
          href="#build-page"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('build-page');
          }}
        >
          Build
        </a>
        <a
          href="#connect-page"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('connect-page');
          }}
        >
          Connect
        </a>
      </nav>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        Toggle Mode
      </button>
    </header>
  );
};

export default Header;