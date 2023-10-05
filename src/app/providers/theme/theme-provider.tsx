import { IProviderProps } from '@app/providers/i-provider-props';
import { ThemeContext } from '@app/providers/theme/theme-context';
import { useTheme } from '@app/providers/theme/useTheme';
import { useEffect } from 'react';

export const ThemeProvider = (props: IProviderProps) => {
  const { theme, setReverseTheme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.add('light');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, setReverseTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
