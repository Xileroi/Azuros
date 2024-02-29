import { Pricing } from '../../@components/pricings/Pricing.tsx';
import { Testimonial } from '../../@components/Testimonials/Testimonial.tsx';

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a tincidunt neque. In
                vitae pulvinar nisi. Cras eget erat sed nulla bibendum dictum sed ut magna. Etiam a
                metus nec orci luctus cursus. Proin vitae risus est. Vestibulum maximus augue ornare
                tincidunt efficitur. Nunc quis neque eleifend, ultricies mi nec, ultricies nisi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing
        title="Envie d'une application web pour votre entreprise ?"
        description="Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi
            velit ut non voluptas in. Explicabo id ut laborum."
        smallTitle="Développement complet de votre application web."
        smallDescription="Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis
              perferendis blanditiis repellendus etur quidem assumenda."
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
            body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
            logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
            author: {
              name: 'Brenna Goyette',
              imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
            }
          },
          {
            body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
            author: {
              name: 'Leslie Alexander',
              imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            }
          },
          {
            body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
            author: {
              name: 'Leonard Krasner',
              imageUrl:
                'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            }
          }
        ]}
      />
    </>
  );
}
