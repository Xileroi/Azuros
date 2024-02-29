import { ReactNode } from 'react';

export interface Item {
  title: string;
  description: ReactNode;
  render: () => ReactNode;
  link: string;
}

interface ProjectProps {
  project: Item;
}

export function Project(props: ProjectProps) {
  const {
    project: { title, description, render, link }
  } = props;

  return (
    <a key={link} href={link}>
      <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div className="flex flex-1 flex-col p-8">
          {render()}
          <h3 className="mt-6 text-sm font-medium text-gray-900">{title}</h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-gray-500">{description}</dd>
            <dt className="sr-only">Role</dt>
          </dl>
        </div>
      </li>
    </a>
  );
}
