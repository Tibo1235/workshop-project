import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);
export const SignInContext = createContext(null);

export function SignInProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = () => setIsSignedIn(true); 
  const signOut = () => setIsSignedIn(false);

  return (
    <SignInContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </SignInContext.Provider>
  );
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
