import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';

import { PageShell } from './components/PageShell';
import type { PageContextServer } from './types';

export const passToClient = ['pageProps', 'documentProps'];

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const viewHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>Azuros</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body class="h-screen min-h-screen">
        <div class="h-screen min-h-screen" id="root">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
}