import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Navbar, Modal } from '../components';
import { authApi } from '../api';
import { useModalStore, useProfileStore } from '../store';

const MainLayout = () => {
  const { pathname } = useLocation();
  const update = useProfileStore((state) => state.update);
  const isModalOpen = useModalStore((state) => state.isModalOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const reloadCurrentUser = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await authApi.refresh(refreshToken);

          const {
            accessToken,
            refreshToken: newRefreshToken,
            user,
          } = response.data;

          update({ email: user.email, role: user.role });

          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', newRefreshToken);
        }
      } catch (error) {
        console.error('error:', error);
      }
    };

    reloadCurrentUser();
  }, []);

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

      <Modal open={isModalOpen} />
    </div>
  );
};

export default MainLayout;
