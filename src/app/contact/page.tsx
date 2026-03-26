'use client';
import { useState } from 'react';
import ContactForm from '../components/contact/ContactForm';
import TaglineText from '../components/contact/TaglineTexts';
import MobileBurgerMenu from '../components/ui/MobileBurgerMenu';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNameFieldUpdated, setIsNameFieldUpdated] = useState<boolean>(false);
  const [isEmailFieldUpdated, setIsEmailFieldUpdated] =
    useState<boolean>(false);
  const [isMessageFieldUpdated, setIsMessageFieldUpdated] =
    useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitSuccess = () => {
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="m-none h-screen w-full overflow-y-auto overflow-x-hidden border-0 border-orangeflame bg-mobile-gradient pr-0 sm:border-l-[0.5px] md:bg-projects-gradient">
      <div className="sticky top-0 z-50 my-0 flex w-full flex-grow flex-row items-baseline justify-start border-b border-orangeflame bg-opacity-100 bg-project-title-gradient pb-4 pt-10 align-bottom sm:border-0 sm:pl-8 sm:pr-8">
        <div className="flex w-auto flex-1 flex-row justify-between">
          <h1 className="ml-4 h-auto w-[10vw] justify-start text-left text-2xl font-medium text-orangeflame sm:ml-0">
            CONTACT
          </h1>
          <MobileBurgerMenu
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </div>
      <div className="flex h-[90%] w-full flex-grow flex-col justify-between space-y-6 pb-4 pt-4">
        <TaglineText />

        <h3 className="mx-12 w-[80%] flex-grow-0 justify-center text-wrap pb-8 pt-4 text-center text-lg font-thin text-white md:text-xl lg:text-xl">
          Whether it's a sophisticated
          <span className="font-light text-emerald-200"> web platform </span>
          or cutting-edge{' '}
          <span className="font-light text-orangeflame"> mobile app</span>, I
          love bringing exciting ideas to life.
        </h3>

        <div className="w-screen border-b border-t border-orangeflame bg-slate-800 bg-opacity-50 p-4 px-8 text-center lg:px-4">
          <div className="w-[80%] flex-grow-0 justify-center">
            {submitSuccess ? (
              <h1 className="justify-center text-center align-text-top font-thin text-emerald-200 sm:text-lg lg:text-xl">
                Thank you for your message! We'll get back to you soon.
              </h1>
            ) : (
              <h1 className="justify-center text-center align-text-top font-thin text-white sm:text-lg lg:text-xl">
                If you're ready to create something amazing, reach out below — I
                would love to hear from you!
              </h1>
            )}
          </div>
        </div>
        <ContactForm
          name={name}
          email={email}
          message={message}
          number={number}
          isNameFieldUpdated={isNameFieldUpdated}
          isEmailFieldUpdated={isEmailFieldUpdated}
          isMessageFieldUpdated={isMessageFieldUpdated}
          setIsNameFieldUpdated={setIsNameFieldUpdated}
          setIsEmailFieldUpdated={setIsEmailFieldUpdated}
          setIsMessageFieldUpdated={setIsMessageFieldUpdated}
          setName={setName}
          setEmail={setEmail}
          setMessage={setMessage}
          setNumber={setNumber}
          onSubmitSuccess={handleSubmitSuccess}
        />
      </div>
    </div>
  );
}
