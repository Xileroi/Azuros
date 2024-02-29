import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
import { NavigationActions } from './NavigationActions.tsx';
import { BaseNavigation } from './BaseNavigation.tsx';

interface NavigationProps {
  baseNavigationComputer: ReactNode;
  baseNavigationMobile: ReactNode;
  actions: ReactNode;
  title: ReactNode;
}

export function Navigation(props: NavigationProps) {
  const { title, actions, baseNavigationComputer, baseNavigationMobile } = props;

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">{title}</div>
                {baseNavigationComputer}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {actions}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">{baseNavigationMobile}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

Navigation.Actions = NavigationActions;
Navigation.BaseNavigation = BaseNavigation;
