import { EventFormField } from './EventFormField';
import { formFields } from './eventFormFields';

export const EventForm = ({ onSubmit, onCancel, event, errors }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (event) {
      formData.append('id', event.id);
    }
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-center text-xl font-bold my-4 sm:my-8 text-purple-300'>
        {event?.id
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

      <div className='flex justify-between mt-12'>
        <button
          type='button'
          className='py-3 px-9 bg-white font-bold rounded-full shadow-xl hover:bg-gray-300 hover:shadow-none focus:outline-none transition-all'
          onClick={onCancel}
        >
          Abbrechen
        </button>
        <button type='submit' className='btn-primary'>
          {event?.id ? 'Aktualisieren' : 'Einreichen'}
        </button>
      </div>
    </form>
  );
};
