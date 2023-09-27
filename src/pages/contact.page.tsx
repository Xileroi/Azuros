import React from 'react';
import { Website } from '../components/Website';
import ContactForm from '../components/parts/Form';

export function Page() {
  return (
    <Website>
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">Pour me contacter</h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 flex-grow">
        <div></div>
        <div className=" ">
          <ContactForm />
        </div>
      </div>
    </Website>
  );
}
