import {Pricing} from '../../@components/pricings/Pricing.tsx';
import {Testimonial} from '../../@components/Testimonials/Testimonial.tsx';

export default function Page() {
  return (
    <>
      <div>
        <div className="bg-neutral-50 bg-opacity-75 p-5 flex items-center ring-1 ring-gray-200 ">
          <div className="max-w-5xl w-full mx-auto px-12 flex-col sm:flex-row gap-5 justify-between flex items-center">
            <img
              src="yanis.lounici.webp"
              alt="yanis lounici"
              className="max-h-56 rounded-md shadow-xl"
            />

            <div className="flex flex-col gap-5">
              <span className="text-xl font-bold text-center sm:text-left">Qui suis-je ?</span>
              <p className="max-w-xl text-justify">
                  Yanis Lounici, 20 ans et actuellement élève pour ma deuxième année à l'école 42.
                  Je possède de bonnes compétences en C et en algorithmie, j'ai également j'ai appris en auto-didacte l'HTML,
                  le CSS et le JS dont la lib REACT. Je m'engage en tant que qu'auto-entrepreneur pour réaliser de petits projets afin d'acquérir
                  de l'expérience professionnel dans ce domaine, je serais donc ravis de vous accompagner pour réaliser tout type de projet en matière
                  de création de site web.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing
        title="Envie d'une application web pour votre entreprise ?"
        description="Faites appels à mes services pour réaliser votre application web sur mesure et ainsi m'aider également
         à acquérir de l'expérience professionnelle tout en ayant un service de qualité."
        smallTitle="Développement complet de votre application web."
        smallDescription="Je me porte garant quant à l'hébergement et le maintien de votre application web et vous garantit un service de qualité dans un temps correct."
        price={300}
        features={[
          'Développement sur mesure',
          "Mise à jour de l'application",
          'Garde votre application sécurisé',
          'Hébergement en France'
        ]}
        contactLink="/contact"
      />

      <Testimonial
        testimonials={[
          {
            body: 'Un très bon développeur, très à l\'écoute et très professionnel. Une imagination débordante et plein d\'idées. Je recommande fortement.',
            logoUrl: 'https://www.zakodium.com/brand/zakodium-logo.svg',
            author: {
              name: 'Sebastien Criquet',
              imageUrl:
                'https://media.licdn.com/dms/image/C4D03AQFjbd5lNB4iMQ/profile-displayphoto-shrink_200_200/0/1582297527606?e=1714608000&v=beta&t=Rs8Na5EeDd9RVUj0Xry_sw0IU2XBrE1U2Tiyga_SwOA'
            }
          },
          {
            body: 'N\'hésitez pas à me donner votre avis sur mon travail et ainsi m\'aider à m\'améliorer !',
            author: {
              name: 'Peut être vous ?',
              imageUrl:
                'yanis.lounici.webp'
            }
          }
        ]}
      />
    </>
  );
}
