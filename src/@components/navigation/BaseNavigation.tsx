import { usePageContext } from '../../renderer/hooks/usePageContext.tsx';
import clsx from 'clsx';
import { Disclosure } from '@headlessui/react';

interface NavigationLink {
  label: string;
  to: string;
}

interface BaseNavigationProps {
  type: 'computer' | 'mobile';
  navigations: Array<NavigationLink>;
}

export function BaseNavigation(props: BaseNavigationProps) {
  const { navigations, type } = props;
  const { urlPathname: pathname } = usePageContext();

  return (
    <>
      {type === 'computer' ? (
        <NavigationComputer navigations={navigations} pathname={pathname} />
      ) : (
        <NavigationMobile navigations={navigations} pathname={pathname} />
      )}
    </>
  );
}

type NavigationProps = Pick<BaseNavigationProps, 'navigations'> & { pathname: string };

function NavigationComputer(props: NavigationProps) {
  const { navigations, pathname } = props;

  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      {navigations.map((navigation) => (
        <a
          key={`baseNavigation-${navigation.to}`}
          href={navigation.to}
          className={clsx('inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium', {
            'border-indigo-500 text-gray-900': pathname === navigation.to,
            'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
              pathname !== navigation.to
          })}>
          {navigation.label}
        </a>
      ))}
    </div>
  );
}

function NavigationMobile(props: NavigationProps) {
  const { navigations, pathname } = props;

  return (
    <div className="space-y-1 pb-4 pt-2">
      {navigations.map((navigation) => (
        <Disclosure.Button
          key={`baseNavigation-${navigation.to}`}
          as="a"
          href={navigation.to}
          className={clsx('block border-l-4 py-2 pl-3 pr-4 text-base font-medium', {
            'border-indigo-500 bg-indigo-50 text-indigo-700': pathname === navigation.to,
            'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700':
              pathname !== navigation.to
          })}>
          {navigation.label}
        </Disclosure.Button>
      ))}
    </div>
  );
}
