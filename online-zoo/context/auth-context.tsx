"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type AuthUser = {
  user?: {
    name?: string;
    email?: string;
    login?: string;
  };
  [key: string]: unknown;
} | null;

interface AuthContextValue {
  user: AuthUser;
  setUser: (user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const getStoredUser = (): AuthUser => {
  if (typeof window === "undefined") {
    return null;
  }

  const storedUser = window.localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    console.error("Failed to parse user data:", error);
    window.localStorage.removeItem("user");
    return null;
  }
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<AuthUser>(getStoredUser);

  const setUser = (nextUser: AuthUser) => {
    setUserState(nextUser);

    if (nextUser) {
      window.localStorage.setItem("user", JSON.stringify(nextUser));
      return;
    }

    window.localStorage.removeItem("user");
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};

export default AuthProvider;
