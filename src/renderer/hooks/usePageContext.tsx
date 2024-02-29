// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere
import { createContext, ReactNode, useContext } from 'react';

import type { PageContext } from '../types';

const Context = createContext<PageContext>(undefined as unknown as PageContext);

interface PageContextProviderProps {
  pageContext: PageContext;
  children: ReactNode;
}

export function PageContextProvider(props: PageContextProviderProps) {
  const { pageContext, children } = props;
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

export function usePageContext() {
  return useContext(Context);
}
