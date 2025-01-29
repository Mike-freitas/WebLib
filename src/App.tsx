import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from './components/hooks/useTheme';
import Header from './components/Header/Header'; // Importe o Header
import Footer from './components/Footer/Footer'; // Importe o Footer
import AppRoutes from './components/AppRoutes/AppRoutes';

const App: React.FC = () => {
  const [theme, toggleTheme] = useTheme(); // Apenas o tema será gerido aqui

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <div className="app-container">
        <Header toggleDarkMode={toggleTheme} /> {/* Adicione o Header */}
        <main>
          <AppRoutes theme={theme} filter={''} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
