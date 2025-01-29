import React, { useState, useEffect } from 'react';
import './Header.css';

interface HeaderProps {
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [theme, setTheme] = useState<string>(() => {
    // Verificar se já existe um tema salvo no localStorage
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // A cada mudança de tema, atualizar o localStorage e aplicar a classe no body
    document.body.className = theme;
    localStorage.setItem('theme', theme); // Salvar no localStorage
  }, [theme]);

  const handleToggleDarkMode = () => {
    // Alternar o tema
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            scrollToSection('learn-page'); // Rolar para a seção Learn
          }}
        >
          Learn
        </a>
        <a
          href="#build-page"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('build-page'); // Rolar para a seção Build
          }}
        >
          Build
        </a>
        <a
          href="#connect-page"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('connect-page'); // Rolar para a seção Connect
          }}
        >
          Connect
        </a>
      </nav>
      <button className="theme-toggle" onClick={handleToggleDarkMode}>
        Toggle Mode
      </button>
    </header>
  );
};

export default Header;
