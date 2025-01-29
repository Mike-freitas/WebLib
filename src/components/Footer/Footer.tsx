import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Sobre Nós</h3>
          <p>
            Somos dedicados a oferecer conteúdo e serviços de qualidade. Entre em contato e explore nossas políticas.
          </p>
        </div>
        <nav className="footer-nav">
          <a href="#contact">Contato</a>
          <a href="#terms">Termos de Serviço</a>
          <a href="#privacy">Política de Privacidade</a>
        </nav>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} SeuSite. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;