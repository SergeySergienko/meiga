import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
import { NavMenu, MenuPopup } from '..';
import { BurgerIcon, LogoIcon, UserIcon } from '..';
import { throttle } from '../../utils';

export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [showSearchInput, setShowSearchInput] = useState(false);
  const [isMenuPopupOpen, toggleMenuPopup] = useState(false);

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
        <div className='flex items-baseline justify-between h-16 external-container pt-3'>
          <div className='flex grow items-center justify-between p-1 rounded-full bg-gradient-to-r from-white/15 to-40% '>
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
            <div className='p-1'>
              <NavLink to='/auth' className='text-white hover:text-purple-300'>
                <UserIcon />
              </NavLink>
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
