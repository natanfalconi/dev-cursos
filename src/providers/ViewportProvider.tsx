import { breakpoints, ScreenSizes } from '../../stitches.config';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ViewportProviderProps {
  children: React.ReactNode;
}

interface ViewportContextProps {
  width: number;
  height: number;
  screenSize: ScreenSizes;
  isMobile: boolean;
}

export const ViewportContext = createContext<ViewportContextProps>(
  {} as ViewportContextProps
);

export function ViewportProvider({ children }: ViewportProviderProps) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const screenSize = useMemo(() => {
    if (width <= breakpoints.sm) return 'xs';
    if (width <= breakpoints.md) return 'sm';
    if (width >= breakpoints.sm && width <= breakpoints.lg) return 'md';
    if (width >= breakpoints.lg && width <= breakpoints.xl) return 'lg';
    if (width > breakpoints.xl) return 'xl';
    return 'xs';
  }, [width]);

  const isMobile = useMemo(() => {
    if (screenSize === 'xs' || screenSize === 'sm') return true;
    return false;
  }, [screenSize]);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width, height, screenSize, isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
}

export function useViewport() {
  const context = useContext(ViewportContext);
  return context;
}
