import { useState } from 'react';
import { useProfileStore } from '../../../store';

export const TeamMemberForm = ({ onSubmit, onCancel, teamMember }) => {
  const currentUser = useProfileStore((state) => state.currentUser);

  const [fileError, setFileError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (teamMember) {
      formData.append('id', teamMember.id);
    }
    if (!teamMember) {
      formData.append('userId', currentUser.id);
    }

    const file = formData.get('upload');
    if (!file?.type.startsWith('image/')) {
      setFileError('Es sind nur Bilder erlaubt!');
      return;
    }

    const maxSizeInBytes = 500 * 1024;
    if (file && file.size > maxSizeInBytes) {
      setFileError('Die Dateigröße darf 500kB nicht überschreiten!');
      return;
    }

    setFileError('');
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-center text-xl font-bold my-4 sm:my-8 text-purple-300'>
        {teamMember
          ? 'Teammitglied aktualisieren'
          : 'Bewerben Sie sich für das Team'}
      </h2>

      <div className='flex flex-col gap-4 sm:gap-8 text-white'>
        <div>
          <label
            className='block text-sm font-medium mb-1 sm:font-bold sm:mb-2'
            htmlFor='name'
          >
            Name
            <span className='text-red-600'>&#42;</span>
          </label>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Geben Sie den Namen oder Spitznamen ein'
            defaultValue={teamMember?.name}
            className='text-sm text-black py-2 px-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
        </div>

        <div>
          <label
            className='block text-sm font-medium mb-1 sm:font-bold sm:mb-2'
            htmlFor='position'
          >
            Spielposition
            <span className='text-red-600'>&#42;</span>
          </label>
          <select
            id='position'
            name='position'
            defaultValue={teamMember?.position || ''}
            className='text-sm text-black py-2 px-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          >
            <option value='' disabled>
              Wählen Sie Ihre Spielposition
            </option>
            <option value='UNIVERSAL'>UNIVERSAL</option>
            <option value='LIBERO'>LIBERO</option>
            <option value='SETTER'>SETTER</option>
            <option value='HITTER'>HITTER</option>
          </select>
        </div>

        <div>
          <label
            className='block text-sm font-medium mb-1 sm:font-bold sm:mb-2'
            htmlFor='slogan'
          >
            Slogan
            <span className='text-red-600'>&#42;</span>
          </label>
          <input
            id='slogan'
            name='slogan'
            type='text'
            placeholder='Ein paar Worte zu Dir oder Deiner Rolle im Team'
            defaultValue={teamMember?.slogan}
            className='text-sm text-black py-2 px-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
        </div>

        <div>
          <label
            className='block text-sm font-medium mb-1 sm:font-bold sm:mb-2'
            htmlFor='upload'
          >
            Foto hochladen
            {!teamMember && <span className='text-red-600'>&#42;</span>}
          </label>
          <input
            id='upload'
            name='upload'
            type='file'
            required={!teamMember}
            accept='image/*'
            className='text-sm'
          />

          <div className='text-xs leading-4 mt-2'>
            <p>Nur im Bildformat bis 500kB</p>
            {teamMember && (
              <>
                <p>Keine Wahl – alte Foto bleibt.</p>
                <p>Neue Foto ersetzt das alte.</p>
              </>
            )}
          </div>
          {fileError && <p className='bg-red-600'>{fileError}</p>}
          {teamMember && (
            <p className='mt-2'>Current Photo: {teamMember.photo}</p>
          )}
        </div>

        <div className='flex justify-between mt-12'>
          <button
            type='button'
            className='py-3 px-9 bg-white text-black font-bold rounded-full shadow-xl hover:bg-gray-300 hover:shadow-none focus:outline-none transition-all'
            onClick={onCancel}
          >
            Abbrechen
          </button>
          <button type='submit' className='btn-primary'>
            {teamMember ? 'Aktualisieren' : 'Einreichen'}
          </button>
        </div>
      </div>
    </form>
  );
};
