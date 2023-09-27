import React from "react";
import { Website } from "../components/Website";
import { Delimit } from "../components/parts/Delimit";



export function Page() {
  return (
    <Website>
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Bonjour !
          </h1>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Ceci est la page présentant tout mes projets.
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 flex-grow">
        <div>
          <Delimit text='BSQ 42'/>
          <p className="text-white">Test</p>
        </div>
      </div>
    </Website>
  );
}