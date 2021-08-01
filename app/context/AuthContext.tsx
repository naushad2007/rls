import axios from "axios";
import { createContext, FC } from "react";
import { useRecoilState } from "recoil";

import { userAtom } from "@/atoms/auth";
import User from "@/models/User";

interface AuthState {
  user: User | null;
  getUser: () => Promise<User | null>;
  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<User | null>;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => Promise<null>;
}

const defaultState: AuthState = {
  user: null,
  getUser: async () => null,
  register: async () => null,
  login: async () => null,
  logout: async () => null,
};

export const AuthContext = createContext<AuthState>(defaultState);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useRecoilState(userAtom);

  const getUser = async () => {
    const { data: user } = await axios.get<User>("/api/auth/me");
    setUser(user);
    return user;
  };

  const register = async (name: string, email: string, password: string) => {
    const { data: user } = await axios.post<User>("/api/auth/register", {
      name,
      email,
      password,
    });
    setUser(user);
    return user;
  };

  const login = async (email: string, password: string) => {
    const { data: user } = await axios.post<User>("/api/auth/login", {
      email,
      password,
    });
    setUser(user);
    return user;
  };

  const logout = async () => {
    await axios.post("/api/auth/logout");
    setUser(null);
    return null;
  };

  return (
    <AuthContext.Provider value={{ user, getUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
