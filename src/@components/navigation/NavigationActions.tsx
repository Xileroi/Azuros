import { ReactNode } from 'react';

interface NavigationActionLink {
  __type: 'link';
  label: ReactNode;
  to: string;
}

type NavigationAction = NavigationActionLink;

interface NavigationActionsProps {
  actions: Array<NavigationAction>;
}

export function NavigationActions(props: NavigationActionsProps) {
  const { actions } = props;

  return (
    <div className="flex flex-row gap-5">
      {actions.map((action) => (
        <a
          key={action.to}
          href={action.to}
          className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
          {action.label}
        </a>
      ))}
    </div>
  );
}
