import useSubmitContactForm from '@/hooks/useSubmitContactForm';
import React, { useReducer } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

type FormState = {
  name: string;
  email: string;
  message: string;
  number: string;
  touched: {
    name: boolean;
    email: boolean;
    message: boolean;
  };
};

type FormAction =
  | { type: 'UPDATE_FIELD'; field: 'name' | 'email' | 'message'; value: string }
  | { type: 'SET_NUMBER'; value: string }
  | { type: 'TOUCH_ALL' }
  | { type: 'RESET' };

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
  number: '',
  touched: { name: false, email: false, message: false },
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        touched: { ...state.touched, [action.field]: true },
      };
    case 'SET_NUMBER':
      return { ...state, number: action.value };
    case 'TOUCH_ALL':
      return { ...state, touched: { name: true, email: true, message: true } };
    case 'RESET':
      return initialState;
  }
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { submitContactForm, loading, error } = useSubmitContactForm();

  const nameError = state.touched.name && !state.name;
  const emailError =
    state.touched.email && (!state.email || !EMAIL_REGEX.test(state.email));
  const messageError = state.touched.message && !state.message;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'TOUCH_ALL' });

    if (!state.name || !EMAIL_REGEX.test(state.email) || !state.message) {
      return;
    }

    const formData = {
      contact_sender_name: state.name,
      contact_number: state.number || null,
      contact_email: state.email,
      contact_message: state.message,
    };

    const result = await submitContactForm(formData);

    if (result) {
      dispatch({ type: 'RESET' });
      onSubmitSuccess();
    }
  };

  return (
    <form
      className="mb-10 w-[100%] pb-4 sm:pb-8 md:w-[95%]"
      onSubmit={handleSubmit}
    >
      <div className="mx-0 mt-4 flex w-[100%] flex-wrap sm:mx-4 md:pb-0">
        <div className="flex w-[100%] flex-col flex-wrap justify-evenly md:flex-row">
          <div className="flex flex-grow flex-col space-y-2 p-6">
            <div className="flex-col space-y-2">
              <h1 className="text-md w-auto justify-start text-left align-text-bottom font-thin text-white">
                Your Name :
              </h1>
              <input
                className={`text-md w-full rounded-md border-2 border-opacity-75 bg-black bg-opacity-50 px-4 py-2 text-left text-white focus:border-2 focus:border-tealAccent focus:border-opacity-100 focus:outline-none ${
                  nameError ? 'border-red-400' : 'border-orangeflame'
                }`}
                required
                type="text"
                value={state.name}
                onChange={(e) =>
                  dispatch({ type: 'UPDATE_FIELD', field: 'name', value: e.target.value })
                }
                placeholder=""
              />
              <div
                className={`text-left text-sm text-red-500 ${nameError ? 'flex' : 'hidden'}`}
              >
                Please enter your name
              </div>
            </div>

            <div className="flex-grow flex-col space-y-2">
              <h1 className="text-md mt w-auto justify-start text-left align-text-bottom font-thin text-white">
                Your Email :
              </h1>
              <input
                className={`text-md w-full rounded-md border-2 border-opacity-75 bg-black bg-opacity-50 px-4 py-2 text-left text-white focus:border-2 focus:border-tealAccent focus:border-opacity-100 focus:outline-none ${
                  emailError ? 'border-red-400' : 'border-orangeflame'
                }`}
                type="email"
                required
                placeholder=""
                value={state.email}
                onChange={(e) =>
                  dispatch({ type: 'UPDATE_FIELD', field: 'email', value: e.target.value })
                }
              />
              <div
                className={`text-left text-sm text-red-500 ${emailError ? 'flex' : 'hidden'}`}
              >
                {!state.email ? 'Please enter your email' : 'Please enter a valid email address'}
              </div>
            </div>

            <div className="flex-grow flex-col space-y-2">
              <h1 className="text-md mt justify-start text-left align-text-bottom font-thin text-white">
                Your Contact Number:
              </h1>
              <input
                className="text-md my-2 w-full rounded-md border-2 border-orangeflame border-opacity-75 bg-black bg-opacity-50 px-4 py-2 text-left text-white focus:border-2 focus:border-tealAccent focus:border-opacity-100 focus:outline-none"
                type="number"
                placeholder=""
                value={state.number}
                onChange={(e) => dispatch({ type: 'SET_NUMBER', value: e.target.value })}
              />
            </div>
          </div>
          <div className="ml-[4%] w-[90%] flex-grow justify-center sm:pt-0 md:w-[50%] md:py-6 md:pt-6">
            <div className="flex-col space-y-2">
              <h1 className="text-md w-auto justify-start text-left align-text-bottom font-thin text-white">
                Your Message :
              </h1>
              <textarea
                className={`text-md min-h-[21vh] w-full rounded-md border-2 border-opacity-75 bg-black bg-opacity-50 px-4 py-2 text-left text-white focus:border-2 focus:border-tealAccent focus:border-opacity-100 focus:outline-none ${
                  messageError ? 'border-red-400' : 'border-orangeflame'
                }`}
                value={state.message}
                required
                onChange={(e) =>
                  dispatch({ type: 'UPDATE_FIELD', field: 'message', value: e.target.value })
                }
                placeholder=""
              ></textarea>
              <div
                className={`text-left text-sm text-red-500 ${messageError ? 'flex' : 'hidden'}`}
              >
                Please let me know your reason for contacting
              </div>
            </div>
            <div className="w-[100%] flex-grow flex-col">
              <div className="flex w-full flex-grow items-center justify-end">
                <button
                  className="text-md mt-4 w-auto justify-end self-end rounded-md border border-white bg-orangeflame px-8 py-1 font-medium text-white hover:bg-opacity-80 lg:text-lg"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>

              {error && (
                <div className="mt-2 text-sm text-red-500">{error}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
