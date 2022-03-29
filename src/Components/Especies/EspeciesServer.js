const API_URL = "http://127.0.0.1:8000/api/especies/";


export const listEspecies = async () => {
    return await fetch(API_URL, {method: 'GET'});
};