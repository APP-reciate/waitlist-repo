import { FC } from 'react';
import './styles.scss';
import smallLogo from '../images/logoSmall.svg';
import iphone from '../images/iPhone15.svg'
import Form from './form';

const Waitlist: FC = () => {

  return (
    <section className="waitlist">
        <div className="waitlist-heading">
            <p>
            We’re creating a whole new different wealth building experience
            </p>
        </div>
        <div className='waitlist-header'>Join our Waitlist</div>
        <Form />
    </section>
  );
};

export default Waitlist;
