import React, { FC, ReactNode, useRef } from 'react';
import Header from './header';
import Footer from './footer';
import './styles.scss';
import Hero from './hero';
import Details from './details';
import Waitlist from './waitlist';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = () => {
  const myRef = useRef<HTMLElement | null>(null);
  return (
    <div className="">
      <div className="">
        <Header buttonRef = {myRef} />
        <Hero />
      </div>
      <Details />
      <Waitlist waitlistRef={myRef} />
      <Footer />
    </div>
  );
};

export default Layout;
