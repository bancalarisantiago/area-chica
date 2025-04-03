import { supabase } from '../lib/supabase';

const signUp = async (email: string, password: string) => {
  try {
    const response = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

const getSession = async () => {
  const session = await supabase.auth.getSession();
  return session.data.session;
};

const AuthService = { signUp, getSession };

export default AuthService;
