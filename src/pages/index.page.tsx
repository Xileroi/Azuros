import React from 'react';
import { Website } from '../components/Website';
import Skills from '../components/parts/Skills';

export function Page() {
  const mySkills = [
    { name: 'Git', rating: 5 },
    { name: 'C', rating: 4 },
    { name: 'JavaScript', rating: 3 },
    { name: 'HTML5', rating: 3 },
    { name: 'React', rating: 3 },
    { name: 'CSS3', rating: 3 }
  ];

  return (
    <Website>
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl py-4 font-bold tracking-tight text-white">
            Bienvenue sur mon Portfolio
          </h1>
          <h1 className="text-2xl py-4 font-bold tracking-tight text-gray-200">
            Je suis Lounici Yanis
          </h1>
          <h1 className="text-2xl py-4 font-bold tracking-tight text-gray-200">
            Étudiant à l'école 42 | Développeur Web Freelance
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 flex-grow">
        <div>
          <h1 className="text-3xl py-4 flex justify-center font-bold tracking-tight text-gray-100">
            À propos de moi
          </h1>
          <p className="text-center text-xl">
          Bonjour ! Je suis Lounici Yanis, un jeune développeur de 20 ans passionné par le développement web, 
          l'algorithmie, et actuellement étudiant à l'école 42. Mon parcours m'a permis d'acquérir une solide base 
          de compétences en programmation et dans la réalisation de projets innovants. Bien que je sois encore débutant en 
          développement web, je suis déterminé à renforcer mes compétences en travaillant sur des projets personnels et professionnels. 
          Cela me permettra d'acquérir un point de vue différent sur le développement web. Vous pourrez découvrir un aperçu de certains 
          de mes projets dans la section dédiée ou directement sur mon GitHub.
          </p>
          <div className="py-4">
            <Skills skills={mySkills} />
          </div>
        </div>
      </div>
    </Website>
  );
}
