import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';

import { PageShell } from './components/PageShell';
import type { PageContextServer } from './types';

export default async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const viewHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>Yanis Lounici</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
}
