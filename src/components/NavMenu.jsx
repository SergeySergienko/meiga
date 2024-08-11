import { useEffect, useState } from 'react';
import { ImpressumPopup } from '.';

const links = [
  { path: '#home', label: 'Startseite' },
  { path: '#team', label: 'Team' },
  { path: '#fotos', label: 'Fotos' },
  { path: '#events', label: 'Veranstaltungen' },
  { path: 'impressum', label: 'Impressum' },
  { path: '#contacts', label: 'Kontakt' },
  // { path: 'formulare', label: 'Formulare' },
];

export const NavMenu = ({ classList, onClose }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openImpressumPopup = () => {
    setIsPopUpOpen(true);
  };

  const closeImpressumPopup = () => {
    setIsPopUpOpen(false);
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const handleNavClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - 60;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    const navLinks = document.querySelectorAll('nav ul a');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <>
      <ul className={classList}>
        {links.map((link) => {
          if (link.label === 'Impressum') {
            return (
              <li key={link.path}>
                <span onClick={openImpressumPopup} className='nav-menu-item'>
                  {link.label}
                </span>
              </li>
            );
          }

          return (
            <li key={link.path}>
              <a href={link.path} onClick={onClose} className='nav-menu-item'>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
      {isPopUpOpen && <ImpressumPopup onClose={closeImpressumPopup} />}
    </>
  );
};
