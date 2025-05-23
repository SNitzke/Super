import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      // Check current auth status
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };

    initAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        if (error.message === 'Invalid login credentials') {
          toast.error('Email o contraseña incorrectos');
        } else {
          toast.error('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
        return false;
      }

      toast.success('Inicio de sesión exitoso');
      setIsLoggedIn(true);
      return true;
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      return false;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      setIsLoggedIn(false);
      toast.success('Sesión cerrada correctamente');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Error al cerrar sesión');
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};