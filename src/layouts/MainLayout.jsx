import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import { useProfileStore, useTeamMemberStore } from '../store';

export const MainLayout = () => {
  const { pathname } = useLocation();
  const update = useProfileStore((state) => state.update);
  const updateTeamMember = useTeamMemberStore(
    (state) => state.updateTeamMember
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const teamMember = JSON.parse(localStorage.getItem('teamMemberInfo'));

    if (user) {
      update({ id: user.id, email: user.email, role: user.role });
    }
    if (teamMember) {
      updateTeamMember(teamMember);
    }
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
    </div>
  );
};
