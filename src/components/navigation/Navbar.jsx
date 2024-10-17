import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NavMenu, ProfileMenu, FullScreenPopup } from '..';
import { BurgerIcon, LogoIcon, UserIcon } from '..';
import { throttle } from '../../utils';
import { useProfileStore, useTeamMemberStore } from '../../store';

export const Navbar = () => {
  const navigate = useNavigate();

  const { email } = useProfileStore((state) => state.currentUser);
  const { photo } = useTeamMemberStore((state) => state.currentTeamMember);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavMenuOpen, setNavMenuPopupOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleNavMenu = () => setNavMenuPopupOpen((prev) => !prev);
  const toggleProfileMenu = () => setProfileMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollPosition(window.scrollY);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolledBeyondOffset = scrollPosition > 40;
  const navBgClass = isScrolledBeyondOffset ? 'bg-blue-dark' : 'transparent';
  const navEdgeClass = isScrolledBeyondOffset
    ? 'bg-gradient-to-b from-blue-dark to-transparent'
    : 'transparent';

  return (
    <>
      <div
        className={`h-4 z-20 fixed top-16 left-0 right-0 w-full ${navEdgeClass}`}
      />
      <nav
        className={`z-20 fixed top-0 left-0 right-0 w-full text-white/40 ${navBgClass}`}
      >
        <div className='flex justify-between h-16 external-container pt-3'>
          <div className='flex grow items-center justify-between'>
            <div id='burger-menu' className='flex h-12 ml-1 xs:ml-2 lg:hidden'>
              <button
                className='text-white hover:text-purple-300'
                onClick={toggleNavMenu}
              >
                <BurgerIcon />
              </button>
            </div>

            <NavLink
              to='/'
              className='flex flex-shrink-0 items-center text-white hover:text-white/70 rounded-full bg-gradient-to-r from-white/25'
            >
              <LogoIcon />
              <span className='text-white ml-1 xs:font-bold xs:tracking-widest'>
                SV Meissner Gasse e.V.
              </span>
            </NavLink>
            <NavMenu
              classList='hidden lg:flex items-center gap-6'
              isScrolled={isScrolledBeyondOffset}
            />
            <button
              className={`${
                email ? 'text-purple-600' : 'text-white'
              } hover:text-purple-300`}
              onClick={email ? toggleProfileMenu : () => navigate('/auth')}
            >
              {photo ? (
                <img
                  src={photo}
                  alt='team-member-photo'
                  className='h-8 w-8 xs:h-10 xs:w-10 rounded-full object-cover object-top hover:outline-none hover:ring-2 hover:ring-purple-300'
                />
              ) : (
                <UserIcon />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isNavMenuOpen && (
        <FullScreenPopup onClose={toggleNavMenu} closeButtonPlace='right'>
          {(handleClose) => (
            <NavMenu
              classList='flex flex-col gap-8 mb-12'
              onClose={handleClose}
            />
          )}
        </FullScreenPopup>
      )}
      {isProfileMenuOpen && (
        <FullScreenPopup onClose={toggleProfileMenu} closeButtonPlace='left'>
          {(handleClose) => <ProfileMenu onClose={handleClose} />}
        </FullScreenPopup>
      )}
    </>
  );
};
