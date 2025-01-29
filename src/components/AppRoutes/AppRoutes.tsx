// AppRoutes.tsx
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Main/HomePage';
import Cards from '../cards/Cards';
import { cardsData } from '../cards/cardsData';
import { Theme } from '../hooks/useTheme';

const LearnPage = React.lazy(() => import('../pages/LearnPage'));
const BuildPage = React.lazy(() => import('../pages/BuildPage'));
const ConnectPage = React.lazy(() => import('../pages/ConnectPage'));

interface AppRoutesProps {
  theme: Theme;
  filter: string; 
}

const AppRoutes: React.FC<AppRoutesProps> = ({ theme, filter }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage theme={theme} filter={filter} cards={cardsData} />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/cards" element={<Cards filter={filter} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;