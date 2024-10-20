import { useState } from 'react';
import { useProfileStore } from '../../../store';
import { FormFooter } from '../..';

export const TeamMemberForm = ({ teamMember, loading, onSubmit, onCancel }) => {
  const isEditMode = !!teamMember;

  const currentUser = useProfileStore((state) => state.currentUser);

  const [fileError, setFileError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (isEditMode) {
      formData.append('id', teamMember.id);
    } else {
      formData.append('userId', currentUser.id);
    }

    const file = formData.get('upload');
    if (file?.name && !file.type.startsWith('image/')) {
      setFileError('Es sind nur Bilder erlaubt!');
      return;
    }

    const maxSizeInBytes = 500 * 1024;
    if (file?.size > maxSizeInBytes) {
      setFileError('Die Dateigröße darf 500kB nicht überschreiten!');
      return;
    }

    setFileError('');
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-center text-xl font-bold my-4 sm:my-8 text-purple-300'>
        {isEditMode
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
            {!isEditMode && <span className='text-red-600'>&#42;</span>}
          </label>
          <input
            id='upload'
            name='upload'
            type='file'
            required={!isEditMode}
            accept='image/*'
            className='text-sm'
          />

          <div className='text-xs leading-4 mt-2'>
            <p>Nur im Bildformat bis 500kB</p>
            {isEditMode && (
              <>
                <p>Keine Wahl – alte Foto bleibt.</p>
                <p>Neue Foto ersetzt das alte.</p>
              </>
            )}
          </div>
          {fileError && <p className='bg-red-600'>{fileError}</p>}
          {isEditMode && (
            <>
              <p className='mt-2 text-sm'>Current Photo:</p>
              <img
                src={teamMember.photo}
                alt='team-member-photo'
                className='h-10 w-10 xs:h-20 xs:w-20 object-cover object-top'
              />
            </>
          )}
        </div>
        <FormFooter
          loading={loading}
          onCancel={onCancel}
          isEditMode={isEditMode}
        />
      </div>
    </form>
  );
};
