import sv2 from '../assets/images/SV2.jpg';

export const Team = () => {
  return (
    <div
      id='team'
      className='external-container p-6 sm:py-12 lg:py-20 bg-gray-200'
    >
      <article className='bg-white p-2 mb-4'>
        <p className='text-3xl sm:text-4xl font-bold'>Wer sind wir?</p>
        <p>
          Wir sind ein kleiner dynamischer Verein aus Freiberg (Mittelsachsen).
          Bei unserem Team handelt es sich um eine Volleyball Mixed-Mannschaft,
          die mit viel Spaß regelmäßig trainiert und beständig mit spielerischer
          Leidenschaft an gelegentlichen Freizeitturnieren in der Region
          teilnehmt.
        </p>
      </article>
      <article className='bg-white p-2 mb-4'>
        <p className='text-3xl sm:text-4xl font-bold'>Wir suchen dich!</p>
        <p>
          Hast du Interesse an einer ungezwungenen und sportlichen
          Freizeitgestaltung? Dann komm zu uns. Immer Mittwochs von 19:30 bis
          21:30 Uhr in der Turnhalle der "Winklerschule" am Franz-Kögler-Ring
          sind wir aktiv. Besuche uns zum Schnuppertraining oder einfach mal zum
          Zuschauen. Eine Voranmeldung ist nicht zwingend notwendig, wäre aber
          vorteilhaft. Wir freuen uns auf dich/euch!
        </p>
      </article>
      <article className='bg-white p-2 mb-4'>
        <p className='text-3xl sm:text-4xl font-bold'>Das bieten wir:</p>
        <p>
          Egal, ob jung, alt, groß, klein, Mann oder Frau, dünn oder etwas
          kräftiger... all das ist für uns kein Problem, denn von den meisten
          dieser Eigenschaften haben wir bereits Mitglieder im Verein. Wir
          betreiben keinen Wettkampfsport, spielen einfach aus Spaß an der
          Freude. Wir haben keine Profis im Verein, alle Mitglieder kennen aber
          die Volleyballregeln und können mehr oder weniger mit dem Ball
          umgehen. Bei uns steht eher Spaß und Bewegung im Vordergrund als
          Ehrgeiz und unbedingter Siegeswillen. In den Sommermonaten spielen wir
          unter freiem Himmel, in der restlichen Zeit haben wir immer Mittwochs
          für zwei Stunden eine Turnhalle in Freiberg zur Verfügung. Ein- bis
          zweimal im Jahr fahren wir zu einem Freiluft-Volleyballturnier zu
          einem befreundeten Verein.
        </p>
      </article>
      {/* <div className='flex-column sm:flex sm:items-start'>
          <div className='sm:flex-shrink-0 sm:mr-2'>
            <img src={sv2} alt='sv2' />
          </div>
          <div className='bg-white p-2 mt-4 sm:mt-0 sm:flex-grow'>
            <p className='text-3xl sm:text-4xl font-bold'>Das bieten wir:</p>
            <p>
              Egal, ob jung, alt, groß, klein, Mann oder Frau, dünn oder etwas
              kräftiger... all das ist für uns kein Problem, denn von den
              meisten dieser Eigenschaften haben wir bereits Mitglieder im
              Verein. Wir betreiben keinen Wettkampfsport, spielen einfach aus
              Spaß an der Freude. Wir haben keine Profis im Verein, alle
              Mitglieder kennen aber die Volleyballregeln und können mehr oder
              weniger mit dem Ball umgehen. Bei uns steht eher Spaß und Bewegung
              im Vordergrund als Ehrgeiz und unbedingter Siegeswillen. In den
              Sommermonaten spielen wir unter freiem Himmel, in der restlichen
              Zeit haben wir immer Mittwochs für zwei Stunden eine Turnhalle in
              Freiberg zur Verfügung. Ein- bis zweimal im Jahr fahren wir zu
              einem Freiluft-Volleyballturnier zu einem befreundeten Verein.
            </p>
          </div>
        </div> */}
    </div>
  );
};
