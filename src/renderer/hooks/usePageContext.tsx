// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { useContext, createContext } from 'react';

import type { PageContext } from '../types';

const Context = createContext<PageContext>(undefined as unknown as PageContext);

export function PageContextProvider({
  pageContext,
  children
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

export function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
