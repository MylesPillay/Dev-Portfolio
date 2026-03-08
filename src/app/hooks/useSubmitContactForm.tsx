import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
	process.env.SUPABASE_API_URL as string,
	process.env.SUPABASE_API_SECRET_ACCESS_TOKEN as string
);

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
				.from("contact_inbox")
				.insert([formData])
				.select();

			if (error) throw error;

			setLoading(false);
			return data;
		} catch (error: any) {
			console.error("Error in submitContactForm", error);
			setError(error.message || "Failed to submit contact form");
			setLoading(false);
			return null;
		}
	};

	return { submitContactForm, loading, error };
};

export default useSubmitContactForm;
