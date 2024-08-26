import { FC, ReactNode } from 'react';
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
  return (
    <div className="">
      <div className="">
        <Header />
        <Hero />
      </div>
      <Details />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Layout;
