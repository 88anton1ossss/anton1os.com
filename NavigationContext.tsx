import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Page = 'home' | 'packages' | 'portfolio' | 'experience' | 'blog' | 'blog-post' | 'about' | 'contact' | 'ai-tools';

export interface NavLink {
  title: string;
  path: Page;
}

export const navLinks: NavLink[] = [
  { title: "Home", path: "home" },
  { title: "The Experience", path: "experience" },
  { title: "Packages", path: "packages" },
  { title: "Portfolio", path: "portfolio" },
  { title: "Blog", path: "blog" },
  { title: "About", path: "about" },
];

interface NavigationContextType {
  currentPage: Page;
  navigate: (page: Page, params?: Record<string, any>) => void;
  pageParams: Record<string, any>;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>("home");
  const [params, setParams] = useState<Record<string, any>>({});

  const navigate = useCallback((newPage: Page, newParams: Record<string, any> = {}) => {
    setPage(newPage);
    setParams(newParams);
    window.scrollTo(0, 0);
  }, []);

  return (
    <NavigationContext.Provider
      value={{ currentPage: page, navigate, pageParams: params }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};