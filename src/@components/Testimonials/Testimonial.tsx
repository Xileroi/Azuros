import { BigTestimonial } from './BigTestimonial.tsx';
import { LittleTestimonial } from './LittleTestimonial.tsx';

interface TestimonialAuthor {
  imageUrl: string;
  name: string;
}

export interface TestimonialItem {
  body: string;
  author: TestimonialAuthor;
  logoUrl?: string;
}

interface TestimonialProps {
  testimonials: TestimonialItem[];
}

export function Testimonial(props: TestimonialProps) {
  const {
    testimonials: [featured, ...testimonials]
  } = props;

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
      <div className="mx-auto max-w-xl text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ils parlent de moi
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <BigTestimonial {...featured} />
        {testimonials.map((testimonial) => (
          <LittleTestimonial key={testimonial.author.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
