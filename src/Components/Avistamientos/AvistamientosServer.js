const API_URL = "http://127.0.0.1:8000/api/avistamientos/";


export const listAvistamientos = async () => {
    return await fetch(API_URL, {method: 'GET'});
};

export const deleteAvistamiento = async (avistamientoId) => {
    return await fetch(`${API_URL}${avistamientoId}`, {
        method: 'DELETE'
    });
};

export const addAvistamiento = async (newAvistamiento) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(newAvistamiento.name).trim(),
            "autor": String(newAvistamiento.autor).trim(),
            "nota": String(newAvistamiento.nota).trim(),
            "latitud": String(newAvistamiento.latitud).trim(),
            "longitud": String(newAvistamiento.longitud).trim(),
            "id_lugar_id": parseInt(newAvistamiento.id_lugar_id),
            "id_especie_id": parseInt(newAvistamiento.id_especie_id)
        })
    });
};