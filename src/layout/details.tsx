import { FC } from 'react';
import './styles.scss';
import smallLogo from '../images/logoSmall.svg';
import iphone from '../images/iPhone15.svg'

const Details: FC = () => {

  return (
    <section className="details">
      <h3 className='details-header'>
        The best way to <span className='invest'>invest</span> in <span className='real'>real estate</span>
      </h3>
      <div className='details-main'>
        <div className="left">
            <div>
                <img src={smallLogo} alt="small logo" />
                <h3 className='details-main-header'>A different kind of investment</h3>
                <p className='details-main-text'>You don’t have to understand what real estate is to start 
                    investing with us. We make it so easy to grow financially through real estate.
                </p>
            </div>
            <div className='second'>
                <img src={smallLogo} alt="small logo" />
                <h3 className='details-main-header'>Affordable investment, great returns</h3>
                <p className='details-main-text'>Not everyone can afford to buy a property or land right now. 
                    With APPreciate you can start building your way with our unit investment.
                </p>
            </div>
        </div>
        <div className="right">
            <img src={iphone} alt="Mockup of How the mobile app will look with an Iphone 15" />
        </div>
      </div>
    </section>
  );
};

export default Details;
