import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/54ad0b50-5c06-11ee-9198-bfee6681f065"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Ajout du type React.FormEvent<HTMLFormElement>
    e.preventDefault();

    const inputs = e.currentTarget.elements as HTMLFormControlsCollection; // Ajout du type HTMLFormControlsCollection
    const data: { [key: string]: string } = {}; // Définition du type de 'data'

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i] as HTMLInputElement; // Ajout du type HTMLInputElement
      if (input.name) {
        data[input.name] = input.value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Soumettre le formulaire manuellement (si nécessaire)
        e.currentTarget.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Merci !</div>
        <div className="text-md">Nous vous contacterons bientôt.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <p className="text-white py-5">Contactez moi à l'aide de ce formulaire ou par mail : xeleroy@gmail.com</p>
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Votre nom"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Votre message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Envoyer le message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
