import { forwardRef, InputHTMLAttributes, Ref } from 'react';

interface InputProps {
  label: string;
  type?: InputHTMLAttributes<any>['type'];
  name: string;
  placeholder?: string;
}

export const Input = forwardRef(function InputForwardRef(
  props: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const { label, type = 'text', name, placeholder } = props;
  const uuid = crypto.randomUUID();

  return (
    <div className="flex flex-1 flex-col gap-2">
      <label htmlFor={uuid} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>

      <input
        required
        ref={ref}
        type={type}
        name={name}
        id={uuid}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
});
