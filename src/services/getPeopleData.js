import {
    HTTP, HTTPS, SWAPI__ROOT,  SWAPI__PEOPLE, 
    GUIDE_IMG_EXTENSION, URL_IMG_PERSON, 
    SWAPI__PARAM_PAGE
} from '@constants/api';

export const getPeoplePageId = url => {
    //SWAPI__PARAM_PAGE
    const pos = url.lastIndexOf(SWAPI__PARAM_PAGE);
    const id = url.slice(pos+SWAPI__PARAM_PAGE.length, url.length);

    return Number(id);
}


const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return  HTTPS;
    }

    return HTTP;
}

const getId = (url, category) => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol+SWAPI__ROOT+category, '')
        .replace(/\//g, '');

    return id;
}

export const getPeopleId = url => getId(url, SWAPI__PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;