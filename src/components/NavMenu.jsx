import logo from '../assets/images/logo.svg';

export const links = [
  { path: '#startseite', label: 'Startseite' },
  { path: '#team', label: 'Team' },
  { path: '#fotos', label: 'Fotos' },
  { path: '#events', label: 'Veranstaltungen' },
  { path: '#contacts', label: 'Kontakt' },
];

export const NavMenu = () => {
  return (
    <>
      <a
        href='#startseite'
        className='flex flex-shrink-0 items-center mr-4 md:mr-12'
      >
        <img className='h-10 mr-2' src={logo} alt='Freiberger Maulwürfe' />
        <span className='text-white font-accent tracking-widest'>
          SV Meissner Gasse e.V.
        </span>
      </a>

      <ul className='flex items-center hidden lg:flex'>
        {links.map((link) => (
          <li key={link.path}>
            <a
              href={link.path}
              className='mr-10 transition cursor-pointer text-white hover:text-purple-300'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
