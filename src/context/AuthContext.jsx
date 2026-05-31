import { createContext, useMemo, useState } from 'react';
export const AuthContext = createContext(null);
const seedUser = { fullName: 'Riya Malhotra', mobile: '9876543210', aadhaar: '123412341234', email: 'riya@loanly.in', password: 'demo123' };
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('loanly-session') || 'null'));
  const login = (aadhaar, password) => {
    const users = JSON.parse(localStorage.getItem('loanly-users') || '[]');
    const found = [...users, seedUser].find((entry) => entry.aadhaar === aadhaar && entry.password === password);
    if (!found) return false;
    localStorage.setItem('loanly-session', JSON.stringify(found)); setUser(found); return true;
  };
  const register = (profile) => { const users = JSON.parse(localStorage.getItem('loanly-users') || '[]'); localStorage.setItem('loanly-users', JSON.stringify([...users.filter((item) => item.aadhaar !== profile.aadhaar), profile])); };
  const logout = () => { localStorage.removeItem('loanly-session'); setUser(null); };
  const updateUser = (profile) => { localStorage.setItem('loanly-session', JSON.stringify(profile)); setUser(profile); };
  const value = useMemo(() => ({ user, login, register, logout, updateUser }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
