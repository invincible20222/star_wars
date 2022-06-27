import { HTTP, HTTPS } from '@constants/api';

/** 
 * Изменяет URL c HTTP на HTTPS 
 * @param {String} url - url для изменения
 * @return {String} - url c HTTPS 
*/

export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}   

/**
 * Отправляет запрос fetch
 * @param {String} url - url для запроса 
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

// getApiResource(SWAPI__ROOT + SWAPI__PEOPLE)
//     .then(body => console.log(body));

// (async () => {
//     const body = await getApiResource(SWAPI__ROOT + SWAPI__PEOPLE);
//     console.log(body);
// })();

export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json());
    }));

    return res;
}
