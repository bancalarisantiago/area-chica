import AuthService from '@/services/auth';
import { createContext, PropsWithChildren, useContext, useState, useEffect } from 'react';
import { supabase } from '@/api/client/supabase';

interface AuthContextType {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  user: any;
  isLoading: boolean;
}

interface User {
  uid?: string;
  email: string;
  name?: string;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

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
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const setSession = (session: any) => {
    if (session) {
      setUser({
        uid: session.user.id,
        email: session.user.email,
        name: session.user.user_metadata.name,
      });
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('session', session);

      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const handleSignIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // const response = await AuthService.signIn(email, password);

      setUser({ email: 'test', name: 'test' });
      return { success: true };
    } catch (error) {
      console.log('error', error);

      return { email: '', password: '' };
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (email: string, password: string) => {
    try {
      const response = await AuthService.signUp(email, password);
      console.log('response', response);
      return setUser({ email: response?.email });
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleSignOut = async () => {
    try {
      //   await logout();
      setUser(null);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn: handleSignIn,
        signOut: handleSignOut,
        signUp: handleSignUp,
        isLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
