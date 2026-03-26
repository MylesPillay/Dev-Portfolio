import useSubmitContactForm from '@/app/hooks/useSubmitContactForm';
import React from 'react';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
  number: string;
  isNameFieldUpdated: boolean;
  isEmailFieldUpdated: boolean;
  isMessageFieldUpdated: boolean;
  setIsNameFieldUpdated: (value: boolean) => void;
  setIsEmailFieldUpdated: (value: boolean) => void;
  setIsMessageFieldUpdated: (value: boolean) => void;

  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setMessage: (value: string) => void;
  setNumber: (value: string) => void;
  onSubmitSuccess: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  name,
  email,
  message,
  number,
  isNameFieldUpdated,
  isEmailFieldUpdated,
  isMessageFieldUpdated,
  setIsNameFieldUpdated,
  setIsEmailFieldUpdated,
  setIsMessageFieldUpdated,
  setName,
  setEmail,
  setMessage,
  setNumber,
  onSubmitSuccess,
}) => {
  const { submitContactForm, loading, error } = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsNameFieldUpdated(true);
    setIsEmailFieldUpdated(true);
    setIsMessageFieldUpdated(true);
    if (!name || !email || !message) {
      return;
    }

    const formData = {
      contact_sender_name: name,
      contact_number: number ? number : null,
      contact_email: email,
      contact_message: message,
    };

    const result = await submitContactForm(formData);

    if (result) {
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setNumber('');
      setIsNameFieldUpdated(false);
      setIsEmailFieldUpdated(false);
      setIsMessageFieldUpdated(false);

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
                  isNameFieldUpdated && !name.length
                    ? 'border-red-400'
                    : 'border-orangeflame'
                }`}
                required
                type="text"
                value={name}
                onChange={(e) => {
                  setIsNameFieldUpdated(true);
                  setName(e.target.value);
                }}
                placeholder=""
              />
              <div
                className={`text-left text-sm text-red-500 ${
                  isNameFieldUpdated && !name.length ? 'flex' : 'hidden'
                }`}
              >
                {' '}
                Please enter your name
              </div>
            </div>

            <div className="flex-grow flex-col space-y-2">
              <h1 className="text-md mt w-auto justify-start text-left align-text-bottom font-thin text-white">
                Your Email :
              </h1>
              <input
                className={`text-md w-full rounded-md border-2 border-opacity-75 bg-black bg-opacity-50 px-4 py-2 text-left text-white focus:border-2 focus:border-tealAccent focus:border-opacity-100 focus:outline-none ${
                  isEmailFieldUpdated && !email.length
                    ? 'border-red-400'
                    : 'border-orangeflame'
                }`}
                type="text"
                required
                placeholder=""
                value={email}
                onChange={(e) => {
                  setIsEmailFieldUpdated(true);
                  setEmail(e.target.value);
                }}
              />
              <div
                className={`text-left text-sm text-red-500 ${
                  isEmailFieldUpdated && !email.length ? 'flex' : 'hidden'
                }`}
              >
                Please enter your email
              </div>
            </div>

            <div className="flex-grow flex-col space-y-2">
              <h1 className="text-md mt justify-start text-left align-text-bottom font-thin text-white">
                Your Contact Number:
              </h1>
              <input
                className={`text-md my-2 w-full rounded-md border-2 border-orangeflame border-opacity-75 bg-black bg-opacity-50 px-4 py-2 text-left text-white focus:border-2 focus:border-tealAccent focus:border-opacity-100 focus:outline-none`}
                type="number"
                placeholder=""
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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
                  isMessageFieldUpdated && !message.length
                    ? 'border-red-400'
                    : 'border-orangeflame'
                }`}
                value={message}
                required
                onChange={(e) => {
                  setIsMessageFieldUpdated(true);
                  setMessage(e.target.value);
                }}
                placeholder=""
              ></textarea>
              <div
                className={`text-left text-sm text-red-500 ${
                  isMessageFieldUpdated && !message.length ? 'flex' : 'hidden'
                }`}
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
