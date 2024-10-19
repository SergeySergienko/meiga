import { FormFooter } from '../..';
import { EventFormField } from './EventFormField';
import { formFields } from './eventFormFields';

export const EventForm = ({ event, loading, errors, onSubmit, onCancel }) => {
  const isEditMode = !!event;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (isEditMode) {
      formData.append('id', event.id);
    }
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-center text-xl font-bold my-4 sm:my-8 text-purple-300'>
        {isEditMode
          ? 'Veranstaltung aktualisieren'
          : 'Neue Veranstaltung erstellen'}
      </h2>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-1 sm:gap-y-8'>
        {formFields.map((field) => (
          <EventFormField
            key={field.name}
            field={field}
            event={event}
            errors={errors}
          />
        ))}
      </div>
      <FormFooter
        loading={loading}
        onCancel={onCancel}
        isEditMode={isEditMode}
      />
    </form>
  );
};
