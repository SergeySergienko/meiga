import { LastEvent } from '.';
import { PastEvents } from '.';

const getPublicUrl = (url) => url.replace('/public', '');

const photos_08_26_2023 = import.meta.glob('/public/events/08_26_2023/*');
const photos_07_03_2024 = import.meta.glob('/public/events/07_03_2024/*');
const photos_07_17_2024 = import.meta.glob('/public/events/07_17_2024/*');
const photos_08_17_2024 = import.meta.glob('/public/events/08_17_2024/*');

const events = [
  {
    title: 'Unvergessliches Wochenende im Freien',
    date: '08/17/2024',
    location: 'Freiberg, Beachclub',
    description: (
      <>
        <p>
          Das vergangene Wochenende bescherte uns eines der schönsten Ereignisse
          dieses Sommers – ein Freundschaftsturnier und Picknick mit unseren
          langjährigen Freunden aus Dresden. Traditionell trafen wir uns in
          unserem geliebten Beachclub am Stadtrand von Freiberg, wo Sonne, Sand
          und gute Laune unsere besten Begleiter des Tages waren.
        </p>
        <p>
          Es ist kein Geheimnis, dass es nichts Besseres gibt, als aktive
          Erholung im Freien mit Freunden. Und obwohl die Spielergebnisse in den
          Hintergrund traten, gaben alle Teilnehmer ihr Bestes, um ihre
          Fähigkeiten zu zeigen. Lachen und gegenseitige Unterstützung waren
          überall zu hören, was das Turnier zu einem echten Vergnügen machte.
        </p>
        <p>
          Nach den intensiven Spielen erwartete uns ein ebenso
          abwechslungsreiches Picknick. Bei leckerem Essen und Getränken
          tauschten wir lustige Geschichten aus, machten Witze und genossen die
          angenehme Atmosphäre. Heiße Diskussionen über Spielszenen wechselten
          sich mit lockeren Gesprächen ab, und die Zeit verging wie im Flug.
        </p>
        <p>
          Am Ende des Tages, als die Sonne bereits unterging, waren sich alle
          einig: Solche Veranstaltungen stärken unsere Freundschaft und machen
          uns noch enger verbunden. Denn das Wichtigste ist nicht der Sieg,
          sondern die Freude am Beisammensein und die gemeinsamen Erinnerungen,
          die uns noch lange begleiten werden.
        </p>
        <p>
          <b>
            Vielen Dank an alle, die an diesem Tag dabei waren! Bis zum nächsten
            Mal auf dem Spielfeld und am Tisch!
          </b>
        </p>
      </>
    ),
    photos: Object.keys(photos_08_17_2024).map(getPublicUrl),
  },
  {
    title: 'Beachvolleyball-Training',
    date: '07/17/2024',
    location: 'Irgendwo im Raum Freiberg',
    description: 'Typisches Samstagstraining im Sand.',
    photos: Object.keys(photos_07_17_2024).map(getPublicUrl),
  },
  {
    title: 'Training',
    date: '07/03/2024',
    location: 'Raum Freiberg',
    description: 'Gewöhnliches Samstagstraining im Freien.',
    photos: Object.keys(photos_07_03_2024).map(getPublicUrl),
  },
  {
    title: 'Freundschaft turnier',
    date: '08/26/2023',
    location: 'Raum Freiberg',
    description:
      'Abschluss der Freiluftsaison mit einem Turnier mit Teilnahme unserer Volleyball - Freunde aus Dresden.',
    photos: Object.keys(photos_08_26_2023).map(getPublicUrl),
  },
];

export const Events = () => {
  const copiedEvents = [...events];
  const lastEvent = copiedEvents.shift();
  return (
    <div id='events'>
      <div className='relative'>
        <LastEvent event={lastEvent} />
      </div>
      <div className='relative'>
        <PastEvents events={copiedEvents} />
      </div>
    </div>
  );
};
