import React from 'react';
import { Website } from '../components/Website';
import { Delimit } from '../components/parts/Delimit';

export function Page() {
  return (
    <Website>
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">Bonjour !</h1>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Ceci est la page présentant tout mes projets.
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 flex-grow">
        <div>
          <Delimit text="BSQ 42" />
          <div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-4 py-5">Projet de l'école 42</h1>
              <div className="flex">
                <div className="w-1/2 mr-4">
                  <ul>
                    <li>Sur ce projet de l'école 42, plusieurs tâches doivent être accomplies.</li>
                    <li>
                      Tout d'abord, il est essentiel d'afficher une carte composée de caractères
                      représentant le vide, des caractères représentant des obstacles, et des
                      caractères servant à afficher la solution à notre problème.
                    </li>
                    <li>
                      Le problème est simple : trouver l'espace le plus grand possible pour y
                      construire un carré.
                    </li>
                    <li>
                      Nous effectuons donc plusieurs vérifications pour nous assurer que la carte
                      fournie en paramètre est au bon format et contient les données nécessaires.
                    </li>
                    <li>
                      Nous vérifions également que le nombre de paramètres fournis lors du lancement
                      du programme est correct.
                    </li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <ul>
                    <li>
                      Ensuite, notre algorithme commence par rechercher s'il est possible de créer
                      un carré à l'emplacement (0, 0) de la carte.
                    </li>
                    <li>
                      Ensuite, il stocke la taille et les coordonnées de ce carré, puis recherche un
                      autre emplacement pour un carré, par exemple à la position (0, 1), et ainsi de
                      suite jusqu'à parcourir toute la carte.
                    </li>
                    <li>
                      Enfin, il affiche la carte dans le terminal avec le carré le plus grand
                      dessiné à l'intérieur.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Website>
  );
}
