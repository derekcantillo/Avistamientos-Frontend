const API_URL = "http://127.0.0.1:8000/api/avistamientos/";


export const listAvistamientos = async () => {
    return await fetch(API_URL, {method: 'GET'});
};

export const deleteAvistamiento = async (avistamientoId) => {
    return await fetch(`${API_URL}${avistamientoId}`, {
        method: 'DELETE'
    });
};