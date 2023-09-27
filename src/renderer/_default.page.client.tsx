import React from 'react';
import ReactDOM from 'react-dom/client';

import { PageShell } from './components/PageShell';
import type { PageContextClient } from './types';

export const clientRouting = true;
export const hydrationCanBeAborted = true;

let root: ReactDOM.Root;
export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const container = document.getElementById('root') as HTMLElement;

  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }

  //document.title = 'Ui';
}
