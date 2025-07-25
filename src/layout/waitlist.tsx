import { FC, forwardRef, RefObject } from 'react';
import './styles.scss';
import Form from './form';

interface WaitlistProps {
  waitlistRef: RefObject<HTMLElement>;
}

const Waitlist: FC<WaitlistProps> = forwardRef<HTMLElement, WaitlistProps>(( { waitlistRef }: WaitlistProps ) => {

  return (
    <section  ref={waitlistRef} className="waitlist">
        <div className="waitlist-heading">
            <p>
            We’re creating a whole new different wealth building experience
            </p>
        </div>
        <div className='waitlist-header'>Join our Waitlist</div>
        <Form />
    </section>
  );
});

export default Waitlist;
