import { useEffect, useState, Suspense, lazy } from 'react';
import { BackIcon } from './icons';
import ErrorBoundary from './ErrorBoundary';
import { Skeleton } from './Skeleton';

export const FullScreenPopup = ({ formularName, onClose }) => {
  const [Component, setComponent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  useEffect(() => {
    const LoadedComponent = lazy(() =>
      import(`./formulars/${formularName}.jsx`)
    );
    setComponent(() => LoadedComponent);
  }, [formularName]);

  return (
    <div
      className={`fixed inset-0 z-30 transition-opacity duration-500 ${
        isVisible ? 'opasity-100' : 'opacity-0'
      }`}
    >
      <div className='flex flex-col justify-between h-screen p-8 overflow-y-auto bg-white text-main-dark'>
        <button
          className='place-self-start hover:text-main-dark/70'
          onClick={onClose}
        >
          <BackIcon />
        </button>
        <ErrorBoundary>
          <Suspense fallback={<Skeleton />}>
            {Component && <Component />}
          </Suspense>
        </ErrorBoundary>
        <button
          className='place-self-end bg-transparent border border-purple-300 font-semibold hover:bg-purple-100 text-purple-700 py-1 px-2 rounded'
          onClick={onClose}
        >
          Zurück zur Startseite
        </button>
      </div>
    </div>
  );
};
