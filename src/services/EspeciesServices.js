import http from './http-commons'

 const getAllEspecies =()=>{
 return   http.get("/especies");
}
 const getEspecies =(id)=>{
 return  http.get(`/especies/${id}`);
}
 const createEspecies=(data)=>{
 return   http.post("/especies", data);
}
 const updateEspecies=(id, data)=>{
 return   http.put(`/especies/${id}`, data);
}
 const deleteEspecies=(id)=>{
    return http.delete(`/especies/${id}`);
}
export default{
    getAllEspecies, getEspecies, createEspecies, updateEspecies, deleteEspecies
};