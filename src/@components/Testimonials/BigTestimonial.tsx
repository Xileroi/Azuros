import { TestimonialItem } from './Testimonial.tsx';

export function BigTestimonial(props: TestimonialItem) {
  const {
    logoUrl,
    author: { name, imageUrl },
    body
  } = props;

  return (
    <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
      <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
        <p>{`“${body}”`}</p>
      </blockquote>
      <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
        <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src={imageUrl} alt="" />
        <div className="flex-auto">
          <div className="font-semibold">{name}</div>
        </div>
        <img className="h-10 w-auto flex-none" src={logoUrl} alt="" />
      </figcaption>
    </figure>
  );
}
