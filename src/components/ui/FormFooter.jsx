import React from 'react';
import { SpinIcon } from '../icons';

export const FormFooter = ({ loading, onCancel, isEditMode = false }) => {
  return (
    <div id='form-footer' className='flex justify-between mt-12'>
      <button type='button' className='btn-secondary' onClick={onCancel}>
        Abbrechen
      </button>
      <button
        type='submit'
        disabled={loading}
        className='btn-primary disabled:opacity-50 disabled:bg-purple-700 disabled:text-white'
      >
        {loading ? (
          <span className='flex items-center'>
            <SpinIcon />
            <span>Aufbereitung...</span>
          </span>
        ) : (
          <span>{isEditMode ? 'Aktualisieren' : 'Einreichen'}</span>
        )}
      </button>
    </div>
  );
};
