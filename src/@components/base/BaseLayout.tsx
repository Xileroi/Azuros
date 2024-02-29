import { ReactNode } from 'react';
import { Navigation } from '../navigation/Navigation.tsx';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Polygon } from './Polygon.tsx';
import Footer from '../footer/Footer.tsx';

interface BaseLayoutProps {
  children: ReactNode;
}

const navigations = [
  { to: '/', label: 'Accueil' },
  { to: '/projects', label: 'Mes Projets' },
  { to: '/cv', label: 'Mon CV' }
];

export function BaseLayout(props: BaseLayoutProps) {
  const { children } = props;

  return (
    <div className="flex flex-col gap-24 relative overflow-hidden">
      <Polygon />

      <Navigation
        title={<span className="text-lg font-semibold">Yanis Lounici</span>}
        baseNavigationComputer={<BaseNavigationComputer />}
        baseNavigationMobile={<BaseNavigationMobile />}
        actions={<NavigationActions />}
      />

      {children}

      <Footer />
    </div>
  );
}

function NavigationActions() {
  return (
    <Navigation.Actions
      actions={[{ __type: 'link', to: '/contact', label: <EnvelopeIcon className="h-5 w-5" /> }]}
    />
  );
}

function BaseNavigationComputer() {
  return <Navigation.BaseNavigation type="computer" navigations={navigations} />;
}

function BaseNavigationMobile() {
  return <Navigation.BaseNavigation type="mobile" navigations={navigations} />;
}
