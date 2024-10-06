export const formFields = [
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
  },
  // {
  //   name: 'teamPlace',
  //   label: 'Teamplatz',
  //   type: 'number',
  //   placeholder: 'Geben Sie Teamplatz ein',
  //   required: false,
  //   className: 'col-span-1',
  // },
  {
    name: 'upload',
    label: 'Fotos hochladen',
    type: 'file',
  },
];
