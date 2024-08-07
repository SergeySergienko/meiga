import { useState, useEffect } from 'react';
// import { FaSearch } from 'react-icons/fa';
import { NavMenu, MenuPopup } from './';
import { BurgerIcon, LogoIcon } from './icons';

export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [showSearchInput, setShowSearchInput] = useState(false);
  const [isMenuPopupOpen, toggleMenuPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navBgClass = scrollPosition > 40 ? 'bg-blue-dark' : 'transparent';
  const navEdgeClass =
    scrollPosition > 40
      ? 'bg-gradient-to-b from-blue-dark to-transparent'
      : 'transparent';

  return (
    <>
      <nav
        className={`z-20 fixed top-0 left-0 right-0 w-full text-white/40 ${navBgClass}`}
      >
        <div className='flex items-start justify-between h-16 external-container pt-3'>
          <div className='flex grow items-center justify-between p-1 rounded-full bg-gradient-to-r from-white/15 to-40% '>
            <a
              href='#home'
              className='flex flex-shrink-0 items-center mr-4 md:mr-12 text-white hover:text-white/70'
            >
              <LogoIcon />
              <span className='text-white ml-2 font-bold tracking-widest'>
                SV Meissner Gasse e.V.
              </span>
            </a>
            <NavMenu classList='hidden lg:flex gap-6' />
          </div>
          <div className='flex items-center h-12 p-1 lg:hidden'>
            <button
              className='text-white hover:text-white/70'
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
