import { createContext } from 'react';

interface IPreloaderContext {
  isVisible: boolean;
  setVisible: (value: boolean) => void;
  onVisibleTemp: () => void;
}

export const PreloaderContext = createContext<IPreloaderContext>({
  isVisible: false,
  setVisible: () => {},
  onVisibleTemp: () => {},
});
