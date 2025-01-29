import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from './components/hooks/useTheme';
import Header from './components/Header/Header'; // Importe o Header
import Footer from './components/Footer/Footer'; // Importe o Footer
import AppRoutes from './components/AppRoutes/AppRoutes';

const App: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [theme, toggleTheme] = useTheme();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <div className="app-container">
        <Header toggleDarkMode={toggleTheme} /> {/* Adicione o Header */}
        <main>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filter cards"
          />
          <AppRoutes theme={theme} filter={filter} />
        </main>
        <Footer /> {/* Adicione o Footer */}
      </div>
    </ThemeProvider>
  );
};

export default App;
