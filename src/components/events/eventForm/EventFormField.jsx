export const EventFormField = ({ field, event, errors }) => {
  const { name, label, type = 'text', placeholder, minLength } = field;

  const isEditMode = !!event?.id;
  const isUploadField = name === 'upload';
  const isRequired = !(isUploadField && isEditMode);
  const isDisabled = name === 'date' && isEditMode;
  const inputDefaultValue = isUploadField
    ? undefined
    : name === 'date'
    ? event?.date.split('T')[0]
    : event?.[name];

  return (
    <div className='col-span-2'>
      <label
        htmlFor={name}
        className='block text-white text-sm font-medium mb-1 sm:font-bold sm:mb-2'
      >
        {label}
        {isRequired && <span className='text-red-600'>&#42;</span>}
      </label>
      {name === 'description' ? (
        <textarea
          id={name}
          name={name}
          type={type}
          defaultValue={event?.[name]}
          placeholder={placeholder}
          required
          minLength={minLength}
          className='w-full px-3 py-1 sm:py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
        />
      ) : (
        <>
          <input
            id={name}
            name={name}
            type={type}
            defaultValue={inputDefaultValue}
            placeholder={placeholder}
            autoComplete={name}
            required={isRequired}
            minLength={minLength}
            multiple={isUploadField}
            min={1}
            disabled={isDisabled}
            className={`text-sm py-2 ${
              isUploadField
                ? 'text-white'
                : 'text-sm py-2 px-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
            }`}
          />
          {isUploadField && (
            <div className='text-xs leading-4 text-white'>
              <p>PNG, JPG, GIF bis zu 20 Fotos</p>
              {isEditMode && (
                <>
                  <p>Keine Wahl – alte Fotos bleiben.</p>
                  <p>Neue Fotos ersetzen vollständig die alten.</p>
                </>
              )}
            </div>
          )}
        </>
      )}
      {errors?.[name] && (
        <div className='text-white bg-red-600'>{errors[name]}</div>
      )}
    </div>
  );
};
