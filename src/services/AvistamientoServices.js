import http from './http-commons'

 const getAllAvistamientos =()=>{
 return   http.get("/avistamientos");
}
 const getAvistamientos =(id)=>{
 return  http.get(`/avistamientos/${id}`);
}
 const createAvistamientos=(data)=>{
 return   http.post("/avistamientos", data);
}
 const updateAvistamientos=(id, data)=>{
 return   http.put(`/avistamientos/${id}`, data);
}
 const deleteAvistamientos=(id)=>{
    return http.delete(`/avistamientos/${id}`);
}
export default{
    getAllAvistamientos, getAvistamientos, createAvistamientos, updateAvistamientos, deleteAvistamientos
};