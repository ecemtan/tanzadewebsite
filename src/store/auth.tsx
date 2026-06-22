"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════
   AUTH STORE — Mock Authentication Context
   ═══════════════════════════════════════════════════ */

interface User {
  fullName: string;
  email: string;
}

interface AuthState {
  user: User | null;
  login: (userData: User) => void;
  register: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initial load
  useEffect(() => {
    const savedUser = localStorage.getItem("tanzade-user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error("Failed to parse user data", err);
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("tanzade-user", JSON.stringify(userData));
  };

  const register = (userData: User) => {
    setUser(userData);
    localStorage.setItem("tanzade-user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("tanzade-user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
