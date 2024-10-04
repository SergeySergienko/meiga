const formFields = [
  {
    name: 'title',
    label: 'Titel',
    placeholder: 'Geben Sie Titel ein',
    minLength: 3,
  },
  {
    name: 'description',
    label: 'Beschreibung',
    placeholder: 'Schreiben Sie ein paar Sätze über neue Veranstaltung',
    minLength: 20,
  },
  {
    name: 'location',
    label: 'Ort',
    placeholder: 'Geben Sie Ort ein',
    minLength: 3,
  },
  {
    name: 'date',
    label: 'Datum',
    type: 'date',
    placeholder: 'Geben Sie Datum ein',
    className: 'col-span-1',
  },
  {
    name: 'teamPlace',
    label: 'Teamplatz',
    type: 'number',
    placeholder: 'Geben Sie Teamplatz ein',
    required: false,
    className: 'col-span-1',
  },
  {
    name: 'upload',
    label: 'Fotos hochladen',
    type: 'file',
  },
];

export const CreateEventForm = ({ onSubmit, onCancel }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-center text-xl font-bold my-4 sm:my-8 text-purple-300'>
        Neue Veranstaltung erstellen
      </h2>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-1 sm:gap-y-8'>
        {formFields.map(
          ({
            name,
            label,
            type = 'text',
            placeholder,
            required = true,
            minLength,
            className = 'col-span-2',
          }) => (
            <div key={name} className={className}>
              <label
                htmlFor={name}
                className='block text-white text-sm font-medium mb-1 sm:font-bold sm:mb-2'
              >
                {label}
                {required && <span className='text-red-600'>&#42;</span>}
              </label>
              {name === 'description' ? (
                <textarea
                  id={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  required={required}
                  minLength={minLength}
                  className='w-full px-3 py-1 sm:py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                />
              ) : (
                <>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={name}
                    required={required}
                    minLength={minLength}
                    multiple
                    min={1}
                    className={`text-sm py-2 ${
                      name !== 'upload' &&
                      'text-sm py-2 px-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                    }`}
                  />
                  {name === 'upload' && (
                    <p className='text-xs leading-5 text-white'>
                      PNG, JPG, GIF bis zu 20 Fotos
                    </p>
                  )}
                </>
              )}
            </div>
          )
        )}
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
          Einreichen
        </button>
      </div>
    </form>
  );
};
