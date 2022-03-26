const API_URL = "http://localhost/api/avistamientos/";

export const listAvistamientos = async () => {
    return await fetch(API_URL);
};

export const getAvistamiento = async (avistamiendoId) => {
    return await fetch(`${API_URL}${avistamiendoId}`);
};

export const registerAvistamiento = async (newAvistamiento) => {
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
            "id_lugar_id":String(newAvistamiento.id_lugar_id).trim(),
            "id_especie_id": String(newAvistamiento.id_especie_id).trim(),
            
        })
    });
};



export const deleteAvistamiento = async (avistamientoId) => {
    return await fetch(`${API_URL}${avistamientoId}`, {
        method: 'DELETE'
    });
};