import moment from 'moment-timezone';

moment.tz.setDefault('Europe/Paris');

// Set moment locale to french on global project
moment.updateLocale('fr', {
  // For french, use french short form for weekdays
  weekdaysShort: [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
  weekdays: [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ],
  // For french, use french short form for months
  monthsShort: [
    'Jan',
    'Fév',
    'Mar',
    'Avr',
    'Mai',
    'Jui',
    'Juil',
    'Aoû',
    'Sep',
    'Oct',
    'Nov',
    'Déc',
  ],
  // For french, use french long form for months
  months: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Julliet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  // For french, use french ordinal form for
  ordinal: function (number) {
    return number + (number === 1 ? 'er' : '');
  },
  // For french, use french relative time form
  relativeTime: {
    future: 'dans %s',
    past: 'il y a %s',
    s: 'quelques secondes',
    m: 'une minute',
    mm: '%d minutes',
    h: 'une heure',
    hh: '%d heures',
    d: 'un jour',
    dd: '%d jours',
    M: 'un mois',
  },
  /*
   * For french, change the LL format to d MMMM YYYY
   * Ex: 27 Avril 2019
   * See https://momentjs.com/docs/#/displaying/format/ for more information
   */
  longDateFormat: {
    LTS: 'HH:mm:ss',
    LT: 'HH:mm',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY à HH:mm',
    LLLL: 'dddd D MMMM YYYY à HH:mm',
  },
});
