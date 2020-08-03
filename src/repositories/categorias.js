import config from '../config';
const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`
function getAll(){
    return fetch(`${URL_CATEGORIES}`).then(async (req)=>{
        if(req.ok){
        const respota = await req.json();        
        return respota;
        }
        throw new Error('Não foi possivel retorna pagina')
    })

  
}
function getAllWithVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (req)=>{
        if(req.ok){
        const respota = await req.json();        
        return respota;
        }
        throw new Error('Não foi possivel retorna pagina')
    })

  
}

export default {
    getAllWithVideos,
    getAll,
}