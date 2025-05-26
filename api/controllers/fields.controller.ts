import { supabase } from '../client/supabase';
import { Field } from '../types/Field';

export const getAllFields = async (): Promise<Field[]> => {
  const { data, error } = await supabase.from('fields').select('*');
  if (error) throw error;
  return data;
};

export const getFieldById = async (id: string): Promise<Field | null> => {
  const { data, error } = await supabase.from('fields').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};
