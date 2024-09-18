import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
import { NavMenu, MenuPopup, ProfileMenu } from '..';
import { BurgerIcon, LogoIcon, UserIcon } from '..';
import { throttle } from '../../utils';
import { useProfileStore } from '../../store';

export const Navbar = () => {
  const { login } = useProfileStore((state) => state.currentUser);

  const profilemenuRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  // const [showSearchInput, setShowSearchInput] = useState(false);
  const [isMenuPopupOpen, toggleMenuPopup] = useState(false);
  const [isProfilemenuOpen, setProfilemenuOpen] = useState(false);

  const toggleProfilemenu = () => setProfilemenuOpen((prev) => !prev);

  const closeProfilemenu = () => {
    setProfilemenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profilemenuRef.current &&
        !profilemenuRef.current.contains(event.target)
      ) {
        closeProfilemenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfilemenuOpen]);

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
      <nav
        className={`z-20 fixed top-0 left-0 right-0 w-full text-white/40 ${navBgClass}`}
      >
        <div className='flex justify-between h-16 external-container pt-3'>
          <div className='flex grow items-center justify-between rounded-full bg-gradient-to-r from-white/15 to-40% '>
            <NavLink
              to='/'
              className='flex flex-shrink-0 items-center mr-4 md:mr-12 text-white hover:text-white/70'
            >
              <LogoIcon />
              <span className='text-white ml-2 xs:font-bold xs:tracking-widest'>
                SV Meissner Gasse e.V.
              </span>
            </NavLink>
            <NavMenu
              classList='hidden lg:flex items-center gap-6'
              isScrolled={isScrolledBeyondOffset}
            />
            <div
              ref={profilemenuRef}
              className={`relative px-3 lg:px-5 ${
                isProfilemenuOpen && 'bg-blue-dark'
              }`}
            >
              {!login ? (
                <NavLink
                  to='/auth'
                  className='text-white hover:text-purple-300'
                >
                  <UserIcon />
                </NavLink>
              ) : (
                <button
                  className='text-purple-600 hover:text-purple-300 pt-2'
                  onClick={toggleProfilemenu}
                >
                  <UserIcon />
                </button>
              )}

              {isProfilemenuOpen && <ProfileMenu onClose={closeProfilemenu} />}
            </div>
          </div>
          <div className='flex h-12 p-1 ml-1 xs:ml-2 sm:ml-4 lg:hidden'>
            <button
              className='text-white hover:text-purple-300'
              onClick={() => toggleMenuPopup((prevState) => !prevState)}
            >
              <BurgerIcon />
            </button>
          </div>

          {/* <div className='hidden sm:flex items-center h-12 py-1 px-4 rounded-full bg-white/10'>
          <input
            className={`input-search-reset  placeholder:text-white/40 text-white  transition-all duration-1000
          ${showSearchInput ? 'w-48 opacity-100' : 'w-0 opacity-0'}`}
            type='search'
            placeholder='suchen...'
          />
          <FaSearch
            className='fill-white/70 cursor-pointer transition hover:fill-white/50'
            onClick={() => setShowSearchInput((prevState) => !prevState)}
          />
        </div> */}
        </div>
      </nav>
      <div
        className={`h-4 z-20 fixed top-16 left-0 right-0 w-full ${navEdgeClass}`}
      />
      {isMenuPopupOpen && (
        <MenuPopup onClose={() => toggleMenuPopup((prevState) => !prevState)} />
      )}
    </>
  );
};
