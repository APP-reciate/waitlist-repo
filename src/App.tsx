import { FC, useEffect, useState } from 'react';
import { ThemeContext } from './contexts/theme-context';
import Layout from './layout';

import './App.scss';

const App: FC = () => {
  // Detecting the default theme
  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  useEffect(() => {
    console.log('Theme changed:', theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Layout>
          {/* <div className="content-wrapper">
            
          </div> */}
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
