import React from 'react';

interface DelimitProps {
  text: string;
}

export function Delimit(props: DelimitProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-700" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-gray-900 px-3 text-base font-semibold leading-6 text-white rounded-md">
          {props.text}
        </span>
      </div>
    </div>
  );
}
