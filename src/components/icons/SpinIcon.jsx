export const SpinIcon = ({ size = '1.5em' }) => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 24 24'
    height={size}
    width={size}
    xmlns='http://www.w3.org/2000/svg'
    className='animate-spin -ml-2 mr-3 text-white'
  >
    <circle
      className='opacity-0'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    ></circle>
    <path
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    ></path>
  </svg>
);
