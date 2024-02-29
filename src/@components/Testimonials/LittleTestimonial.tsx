import { TestimonialItem } from './Testimonial.tsx';

export function LittleTestimonial(testimonial: Omit<TestimonialItem, 'logoUrl'>) {
  const {
    body,
    author: { imageUrl, name }
  } = testimonial;

  return (
    <div className="space-y-8 xl:contents xl:space-y-0">
      <div className="xl:row-span-2 space-y-8">
        <figure
          key={`little-${name}`}
          className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
          <blockquote className="text-gray-900">
            <p>{`“${body}”`}</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-x-4">
            <img className="h-10 w-10 rounded-full bg-gray-50" src={imageUrl} alt="" />
            <div>
              <div className="font-semibold">{name}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
