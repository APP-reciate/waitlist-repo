import { FC, useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

import logoIcon from '../images/appreciate.svg';
import bgImg from '../images/rhone.svg';
import './styles.scss';

const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <>
    <div className="image-container">
      <img src={bgImg} alt="Rotated Image" />
    </div>

      <header className="header">
        <div className="header-content">
          <a href="/" className="logo-section">
            <img src={logoIcon} alt="logo" />
          </a>
        </div>
        <button className='header-button'>
            Join the waitlist
        </button>
      </header>
      <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'dark'}
            />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
    </>
  );
};

export default Header;
