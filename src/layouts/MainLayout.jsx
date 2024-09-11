import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='app'>
      <div id='img-bg' className='fixed inset-0 bg-cover'></div>
      <header className='relative'>
        <Navbar />
      </header>

      <div className='relative min-h-screen flex flex-col'>
        <main className='flex-grow'>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
