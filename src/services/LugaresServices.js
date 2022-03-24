import http from './http-commons'

 const getAllLugares =()=>{
 return   http.get("/lugares");
}
 const getLugares =(id)=>{
 return  http.get(`/lugares/${id}`);
}
 const createLugares=(data)=>{
 return   http.post("/lugares", data);
}
 const updateLugares=(id, data)=>{
 return   http.put(`/lugares/${id}`, data);
}
 const deleteLugares=(id)=>{
    return http.delete(`/lugares/${id}`);
}
export default{
    getAllLugares, getLugares, createLugares, updateLugares, deleteLugares
};