//common
export const HTTPS = 'https://';
export const HTTP = 'http://';

//swapi
export const SWAPI__ROOT = 'swapi.dev/api/';
export const SWAPI__PEOPLE = 'people';
export const SWAPI__PARAM_PAGE = '/?page=';
export const SWAPI__PARAM_SEARCH = '/?search=';

export const API_PEOPLE = HTTPS+SWAPI__ROOT+SWAPI__PEOPLE+SWAPI__PARAM_PAGE;
export const API_PERSON = HTTPS+SWAPI__ROOT+SWAPI__PEOPLE;
export const API_SEARCH = HTTPS+SWAPI__ROOT+SWAPI__PEOPLE+SWAPI__PARAM_SEARCH;

// visualguide
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
export const GUIDE_IMG_EXTENSION = '.jpg';

export const URL_IMG_PERSON = GUIDE_ROOT_IMG+GUIDE_PEOPLE;