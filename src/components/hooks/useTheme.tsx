import { useState, useCallback } from 'react';

export type Theme = "dark" | "light"; 

const useTheme = (): [Theme, () => void] => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => !prevMode);
  }, []);

  const theme: Theme = darkMode ? "dark" : "light";

  return [theme, toggleDarkMode];
}

export default useTheme;