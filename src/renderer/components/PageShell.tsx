import React, { ReactNode } from 'react';
import '../../../tailwind.css';

import { PageContextProvider } from '../hooks/usePageContext';
import type { PageContext } from '../types';

interface PageShellProps {
  children: ReactNode;
  pageContext: PageContext;
}

export function PageShell(props: PageShellProps) {
  const { children, pageContext } = props;

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>{children}</PageContextProvider>
    </React.StrictMode>
  );
}
