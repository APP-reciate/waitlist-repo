import { FC } from 'react';
import './styles.scss';
import footerLogo from '../images/footerLogo.svg';
import alx from '../images/alx.svg';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-side">
          <img className='left-side-logo' src={footerLogo} alt="appreciate logo text" />
          <p className='first-text'>Appreciating your investment...</p>
          <p className='second-text'>APPreciate is dedicated to making Africans succeed in their long-term wealth building goals.</p>
          <p className='partnered'>Partnered with</p>
          <img src={alx} alt="alx ventures logo" />
        </div>
        <div className="right-side">
          <div className="socials">
            <h1 className="heading">Socials</h1>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Youtube</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
          <div className="reach-out">
            <h1 className="heading">Reach Out</h1>
            <ul>
              <li><a href="#">+234-888-8888-888</a></li>
              <li><a href="#">askus@appreciate.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright &copy; APPreciate Investement Limited {new Date().getFullYear()} <span>- All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
