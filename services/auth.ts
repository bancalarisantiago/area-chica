import { supabase } from '../api/client/supabase';

const signUp = async (email: string, password: string) => {
  try {
    const response = await supabase.auth.signUp({
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

const signIn = async (email: string, password: string) => {
  try {
    const response = await supabase.auth.signInWithPassword({
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

const AuthService = { signUp, signIn, getSession };

export default AuthService;
