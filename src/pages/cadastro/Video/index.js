import React, {useEffect, useState}from 'react';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField';
import {Link, useHistory} from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo(){
  const history= useHistory();
  const [categorias,setCategorias]=useState([]);
  const categoryTitles = categorias.maps(({titulo})=>titulo);
  const {handleChange,values} = useForm({
    titulo: 'video padrao',
    url:'https://www.youtube.com/watch?v=hhQ3RtvmfEg',
    categoria:'Front End',
  })
  useEffect(()=>{
      categoriasRepository.getAll().then((categoriasFromServe)=>{
        setCategorias(categoriasFromServe)
      })
  },[])
  
    return (
      <PageDefault>
         <h1>Cadastro de Video</h1>
         <form onSubmit={(event)=>{
           event.preventDefault();
           const categoriaEscolhida=categorias.find((categoria)=>{
             return categoria.titulo === values.categoria;
           });
           videosRepository.create({
             titulo:values.titulo,
             url:values.url,
             categoriaId:categoriaEscolhida.id,
           }).then(()=>{
              console.log('cadastrou com sucesso!')
              history.push('/');
           });
           
         }}>
            <FormField 
              label="Titulo do Video"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
           />
             <FormField 
              label="URL"
              name="url"
              value={values.url}
              onChange={handleChange}
           />
           <FormField 
              label="Categoria"
              name="categoria"
              suggestions={categoryTitles}
              value={values.categoria}
              onChange={handleChange}
           />
          
          <Button type="submit">Cadastrar</Button>
         </form>
         <Link to ="/cadastro/categoria">
           Cadastrar Categoria
         </Link>
      </PageDefault>
    )
  
  }
export default CadastroVideo;