
import { FC, PropsWithChildren, useState } from 'react';
import ThemeContext from './ThemeContext';

 
 const ThemeContextProvider:FC = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState('dark');
 
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider