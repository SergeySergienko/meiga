export const Skeleton = () => {
  return (
    <div
      id='skeleton'
      className='flex flex-col h-5/6 justify-between animate-pulse'
    >
      <div className='h-4 bg-gray-400 rounded w-3/4 self-center'></div>
      <div className='flex flex-col gap-2'>
        <div className='h-8 bg-gray-300 rounded'></div>
        <div className='h-16 bg-gray-300 rounded'></div>
      </div>
      <div className='h-4 bg-gray-400 rounded w-3/4'></div>
      <div className='h-4 bg-gray-400 rounded w-1/4'></div>
      <div className='flex flex-col gap-2'>
        <div className='h-4 bg-gray-300 rounded'></div>
        <div className='h-20 bg-gray-300 rounded'></div>
        <div className='h-4 bg-gray-300 rounded'></div>
        <div className='h-4 bg-gray-300 rounded'></div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='h-16 bg-gray-300 rounded'></div>
        <div className='h-8 bg-gray-300 rounded'></div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='h-6 bg-gray-300 rounded'></div>
        <div className='h-4 bg-gray-300 rounded'></div>
      </div>
    </div>
  );
};
