import { DocMenu } from './navigation';

export const Footer = () => (
  <div
    id='footer'
    className='px-2 sm:px-3 lg:px-8 py-6 sm:py-8 bg-blue-dark text-white/50 text-xs xs:text-sm border-t-2 border-white/10'
  >
    <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
      <DocMenu />
      <p>© SV Meissner Gasse e.V. All rights reserved.</p>
    </div>
  </div>
);
