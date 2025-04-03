import { useContext, createContext, useEffect, useState, type PropsWithChildren } from 'react';
import { useStorageState } from '../hooks/useStorageState';
import AuthService from '@/services/auth';
import { supabase } from '../lib/supabase';

const AuthContext = createContext<{
  signIn: (username: string, password: string) => void;
  signOut: () => void;
  signUp: (username: string, password: string) => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  signUp: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  useEffect(() => {
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   console.log('supabase session', session);
    //   setAuthSession(session);
    // });
    // supabase.auth.onAuthStateChange((_event, session) => {
    //   console.log('onAuthStateChange session', session);
    //   setAuthSession(session);
    // });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp: async (username, password) => {
          const response = await AuthService.signUp(username, password);
          console.log('response', response);
          setSession('token');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        // isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
