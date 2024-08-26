import { FC } from 'react';
// import { ThemeContext } from '../contexts/theme-context';

import logoImg from '../images/logoImg.svg';
import './styles.scss';
import Form from './form';

const Hero: FC = () => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   const handleThemeChange = () => {
//     const isCurrentDark = theme === 'dark';
//     setTheme(isCurrentDark ? 'light' : 'dark');
//     localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
//   };

  return (
    <section className="hero">
      <div className="hero-content">
        <a href="/" className="hero-logo">
          <img src={logoImg} alt="logo image" />
        </a>
        <h2 className='hero-header'>
        Real estate so profitable, simple, and enjoyable
        </h2>
        <p className='hero-text'><span>Join our waitlist!</span> Get early access today, and get notified when we launch.</p>
        <Form />
        <p className='hero-textBottom'>Appreciate mobile app is currently in- build, we’re coming with a blast!</p>
      </div>
    </section>
  );
};

export default Hero;
