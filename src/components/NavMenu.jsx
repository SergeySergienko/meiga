import { useEffect } from 'react';

export const links = [
  { path: '#home', label: 'Startseite' },
  { path: '#team', label: 'Team' },
  { path: '#fotos', label: 'Fotos' },
  { path: '#events', label: 'Veranstaltungen' },
  { path: '#contacts', label: 'Kontakt' },
];

export const NavMenu = ({ classList, onClose }) => {
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
    <ul className={classList}>
      {links.map((link) => (
        <li key={link.path}>
          <a
            href={link.path}
            onClick={onClose}
            className='transition cursor-pointer font-bold text-xl text-white hover:text-purple-300'
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
