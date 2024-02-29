import { CheckIcon } from '@heroicons/react/24/outline';

type PricingFeatureItem = string;

interface PricingProps {
  features: PricingFeatureItem[];
  price: number;
  contactLink: string;
  title: string;
  description: string;
  smallTitle: string;
  smallDescription: string;
}

export function Pricing(props: PricingProps) {
  const { features, price, contactLink, title, description, smallDescription, smallTitle } = props;

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl bg-white rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none items-center">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{smallTitle}</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">{smallDescription}</p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                Service inclus
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 flex flex-col items-center">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 items-center ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{price}</span>
                  <span className="uppercase text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    eur / j
                  </span>
                </p>
                <a
                  href={contactLink}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
