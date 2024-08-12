export const DownloadButton = ({ label, fileUrl }) => {
  return (
    <div className='flex justify-center items-center'>
      <a
        href={fileUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='bg-purple-700 text-white font-bold w-48 text-center py-2 px-4 rounded-lg hover:bg-purple-500'
      >
        {label}
      </a>
    </div>
  );
};
