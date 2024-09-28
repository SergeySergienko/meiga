import { DownloadButton } from '../components';

const PDF_STORAGE_URL = import.meta.env.VITE_PDF_STORAGE_URL;

const formularList = [
  {
    label: 'Mitgliederwerbung',
    desc: 'Informationen und Erklärungen zur Aufnahme in unseren Verein',
    path: `${PDF_STORAGE_URL}Mitgliederwerbung-SV-Meiszner-Gasse-e.V.pdf`,
  },
  {
    label: 'Aufnahmeantrag',
    desc: 'Aufnahmeantrag SV Meissner Gasse e.V.',
    path: `${PDF_STORAGE_URL}Aufnahmeantrag-SV-Meiszner-Gasse-e.V.pdf`,
  },
  {
    label: 'Satzung',
    desc: 'Satzung SV Meissner Gasse e.V.',
    path: `${PDF_STORAGE_URL}Satzung-SV-Meissner-Gasse-e.V..pdf`,
  },
];

export const DownloadsPage = () => {
  return (
    <div
      id='downloads-page'
      className='bg-gray-200 p-4 sm:py-10 mt-32 mb-12 mx-2 xs:mx-4 sm:mx-8'
    >
      <h2 className='mb-4 text-center font-accent text-lg'>
        <p className='text-purple-700'>Downloads</p>
      </h2>
      <p className='my-8 text-center text-xl md:text-2xl font-extrabold'>
        Hier habt ihr die Möglichkeit zum Download diverser Formulare!
      </p>
      <div className='flex flex-col justify-evenly gap-12 xs:gap-24 my-4 md:my-16 md:mx-16'>
        {formularList.map(({ label, desc, path }) => (
          <div
            key={label}
            className='flex flex-col md:flex-row md:items-center justify-between gap-2 xs:gap-8'
          >
            <DownloadButton label={label} fileUrl={path} />
            <p className='text-center font-semibold md:max-w-sm'>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
