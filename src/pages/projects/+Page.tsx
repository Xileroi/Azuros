import {
  Bars3CenterLeftIcon,
  BookOpenIcon,
  CommandLineIcon,
  CubeIcon
} from '@heroicons/react/24/outline';
import { Item, Project } from '../../@components/projects/Project.tsx';

const projects: Item[] = [
  {
    title: 'Azuros',
    description: 'Site pour Azuros',
    link: 'https://github.com/Xileroi/Azuros',
    render: () => (
      <img
        className="mx-auto h-20 w-20 flex-shrink-0 rounded-full"
        src="/languages/typescript.svg"
        alt="Project language url"
      />
    )
  },
  {
    title: 'Libft',
    description: 'Libft from 42 School',
    link: 'https://github.com/Xileroi/Libft',
    render: () => (
      <BookOpenIcon className="mx-auto h-20 w-20 text-neutral-500 flex-shrink-0 rounded-full" />
    )
  },
  {
    title: 'ft_printf',
    description: 'My own printf from 42 School',
    link: 'https://github.com/Xileroi/ft_printf',
    render: () => (
      <CommandLineIcon className="mx-auto h-20 w-20 text-neutral-500 flex-shrink-0 rounded-full" />
    )
  },
  {
    title: 'BSQ',
    description: 'BSQ from 42 School',
    link: 'https://github.com/Xileroi/BSQ',
    render: () => (
      <CubeIcon className="mx-auto h-20 w-20 text-neutral-500 flex-shrink-0 rounded-full" />
    )
  },
  {
    title: 'get_next_line',
    description: 'My own GNL from 42 School',
    link: 'https://github.com/Xileroi/get_next_line',
    render: () => (
      <Bars3CenterLeftIcon className="mx-auto h-20 w-20 text-neutral-500 flex-shrink-0 rounded-full" />
    )
  }
];

export default function Page() {
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-24">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </ul>
    </>
  );
}
