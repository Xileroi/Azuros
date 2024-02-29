import {forwardRef, Ref} from 'react';

interface TextareaProps {
  label: string;
  name: string;
}

export const Textarea = forwardRef(function TextareaForwardRef(
  props: TextareaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  const { label, name } = props;
    const uuid = (Math.random() + 1).toString(36).substring(7);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={uuid} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <textarea
        ref={ref}
        required
        rows={4}
        name={name}
        id={uuid}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
});
