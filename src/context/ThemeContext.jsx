import { createContext, useEffect, useMemo, useState } from 'react';
export const ThemeContext = createContext(null);
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('loanly-theme') || 'light');
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('loanly-theme', theme); }, [theme]);
  const value = useMemo(() => ({ theme, toggleTheme: () => setTheme((current) => current === 'light' ? 'dark' : 'light') }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
