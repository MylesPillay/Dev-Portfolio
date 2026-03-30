import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface ContactFormData {
  contact_sender_name: string;
  contact_number: string | null;
  contact_email: string;
  contact_message: string;
}

const useSubmitContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContactForm = async (formData: ContactFormData) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('contact_inbox')
        .insert([formData])
        .select();

      if (error) throw error;

      setLoading(false);
      return data;
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to submit contact form');
      setLoading(false);
      return null;
    }
  };

  return { submitContactForm, loading, error };
};

export default useSubmitContactForm;
