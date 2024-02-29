import { Input } from '../../@components/forms/Input.tsx';
import { Textarea } from '../../@components/forms/Textarea.tsx';
import { SubmitButton } from '../../@components/forms/SubmitButton.tsx';
import { FormEvent, useCallback, useRef, useState } from 'react';
import { sendMailQuery } from './utils.ts';

export default function Page() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!firstNameRef.current || !lastNameRef.current || !emailRef.current || !messageRef.current) {
      return;
    }

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    try {
      await sendMailQuery(firstName, lastName, email, message);
      setIsSubmitted(true);
    } catch {
      throw new Error('Something went wrong');
    }
  }, []);

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-3/6 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl flex flex-col px-4 py-6 gap-5">
      {isSubmitted ? (
        <div className="flex flex-1 gap-5 flex-col items-center justify-center">
          <p className="text-2xl">Merci!</p>
          <p className="text-lg">Nous vous recontacterons très bientôt.</p>
        </div>
      ) : (
        <>
          <div className="flex flex-1 items-center justify-center">
            <p className="text-2xl font-semibold">Me contacter</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 flex-1 ">
            <Input ref={firstNameRef} label="Prénom" name="firstname" placeholder="John" />
            <Input ref={lastNameRef} label="Nom" name="lastname" placeholder="Doe" />
          </div>

          <Input
            ref={emailRef}
            label="Email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
          />

          <Textarea ref={messageRef} label="Message" name="message" />

          <div className="flex items-center justify-end border-t border-gray-900/10 pt-4">
            <SubmitButton>Envoyer</SubmitButton>
          </div>
        </>
      )}
    </form>
  );
}
