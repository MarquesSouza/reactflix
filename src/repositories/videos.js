import config from '../config';
const URL_VIDEOS = `${config.URL_BACKEND}/videos`
function create(objetoDoVideo){
    return fetch(`${URL_VIDEOS}?_embed=videos`,{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(objetoDoVideo),
    }
    ).then(async (req)=>{
        if(req.ok){
        const respota = await req.json();        
        return respota;
        }
        throw new Error('Não foi possivel cadastrar retorna pagina')
    })

  
}

export default {
    create,
}