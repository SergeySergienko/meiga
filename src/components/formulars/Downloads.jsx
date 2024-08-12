import { DownloadButton } from '../DownloadButton';

const STORAGE_URL = import.meta.env.VITE_STORAGE_URL;

const formularList = [
  {
    label: 'Mitgliederwerbung',
    desc: 'Informationen und Erklärungen zur Aufnahme in unseren Verein',
    path: `${STORAGE_URL}Mitgliederwerbung-SV-Meiszner-Gasse-e.V.pdf`,
  },
  {
    label: 'Aufnahmeantrag',
    desc: 'Aufnahmeantrag SV Meissner Gasse e.V.',
    path: `${STORAGE_URL}Aufnahmeantrag-SV-Meiszner-Gasse-e.V.pdf`,
  },
  {
    label: 'Satzung',
    desc: 'Satzung SV Meissner Gasse e.V.',
    path: `${STORAGE_URL}Satzung-SV-Meissner-Gasse-e.V..pdf`,
  },
];

const Formulare = () => {
  return (
    <>
      <p className='my-8 text-center text-xl md:text-3xl font-extrabold'>
        Hier habt ihr die Möglichkeit zum Download diverser Formulare!
      </p>
      <div className='w-full flex-grow'>
        <div className='h-full flex flex-col justify-evenly md:mx-16'>
          {formularList.map(({ label, desc, path }) => (
            <div
              key={label}
              className='flex flex-col md:flex-row md:items-center justify-between gap-4'
            >
              <DownloadButton label={label} fileUrl={path} />
              <p className='text-center font-semibold md:max-w-sm'>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Formulare;
