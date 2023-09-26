import React from "react";
import { Website } from "../components/Website";

export function Page() {
  return (
    <Website>
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Votre message a bien été envoyé, vous allez être redirigé dans quelques instants.
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 flex-grow">
        <div>
          <p className="text-white"></p>
        </div>
      </div>
    </Website>
  );
}