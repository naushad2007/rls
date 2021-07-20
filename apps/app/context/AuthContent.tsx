import axios from 'axios';
import Router from 'next/router';
import { createContext, FC } from 'react';
import { useRecoilState } from 'recoil';

import { userAtom } from '@/atoms/auth';
import User from '@/models/User';

interface AuthState {
  user?: User;
  getUser?: () => Promise<User>;
  register?: (name: string, email: string, password: string) => Promise<User>;
  login?: (email: string, password: string) => Promise<User>;
  logout?: () => Promise<void>;
}

export const AuthContext = createContext<AuthState>({});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useRecoilState(userAtom);

  const getUser = async () => {
    const { data: user } = await axios.get<User>('/api/auth/me');
    setUser(user);
    return user;
  };

  const register = async (name: string, email: string, password: string) => {
    const { data: user } = await axios.post<User>('/api/auth/register', {
      name,
      email,
      password,
    });
    setUser(user);
    return user;
  };

  const login = async (email: string, password: string) => {
    const { data: user } = await axios.post<User>('/api/auth/login', {
      email,
      password,
    });
    setUser(user);
    return user;
  };

  const logout = async (): Promise<void> => {
    await axios.post('/api/auth/logout');
    setUser(null);
    return;
  };

  return (
    <AuthContext.Provider value={{ user, getUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
