'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '@/lib/types';
import { mockUsers } from '@/lib/mock-data';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular verificación de sesión existente
    const savedUser = localStorage.getItem('volleybook-user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('volleybook-user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Simular llamada API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Buscar usuario en mock data
    const foundUser = mockUsers.find(u => u.email === email);
    
    if (foundUser && password.length > 0) { // Aceptar cualquier contraseña para demo
      setUser(foundUser);
      localStorage.setItem('volleybook-user', JSON.stringify(foundUser));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Simular llamada API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Verificar si el email ya existe
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser || password.length < 6) { // Validación básica de contraseña
      setLoading(false);
      return false;
    }
    
    // Crear nuevo usuario
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role: 'member',
      avatar: `https://placehold.co/100x100?text=${name.split(' ').map(n => n[0]).join('')}`,
      status: 'active',
      joinDate: new Date().toISOString().split('T')[0],
      phone: ''
    };
    
    setUser(newUser);
    localStorage.setItem('volleybook-user', JSON.stringify(newUser));
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('volleybook-user');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}