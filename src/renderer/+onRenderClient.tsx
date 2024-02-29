import React from 'react';
import ReactDOM from 'react-dom/client';

import { PageShell } from './components/PageShell';
import type { PageContextClient } from './types';
import { BaseLayout } from '../@components/base/BaseLayout.tsx';

let root: ReactDOM.Root;
export default async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;

  const page = (
    <PageShell pageContext={pageContext}>
      <BaseLayout>
        <Page {...pageProps} />
      </BaseLayout>
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

  document.title = 'Yanis Lounici';
}
