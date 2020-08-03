import React, { useState, useEffect } from "react";
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import {Link} from 'react-router-dom';
import Button from "../../../components/Button";
import useForm from '../../../hooks/useForm';
function CadastroCategoria(){
  const valoresIniciais ={
    titulo:'',
    descricao:'',
    cor:'#000',
  }  
  const {handleChange,values, clearForm}= useForm(valoresIniciais)
  const [categorias,setCategorias] =useState([]);
  
  useEffect(()=>{
    const URL = 'http://localhost:8080/categorias';

    fetch(URL).then(async (req)=>{
      const respota = await req.json();
      setCategorias([
        ...respota,
      ]);
    })
  },[])

  return (
      <PageDefault>
         <h1>Cadastro de Categoria {values.titulo}</h1>

         <form onSubmit={function handleSubmit(subitHandle) {
          subitHandle.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
             clearForm()
           }}> 
           <FormField 
              label="Titulo da Categoria"
              name="titulo"
              type="text"
              value={values.titulo}
              onChange={handleChange}
           />
           <FormField 
              label="Descrição"
              name="descricao"
              type="textarea"
              value={values.descricao}
              onChange={handleChange}
           />
           <FormField 
              label="Cor"
              name="cor"
              type="color"
              value={values.cor}
              onChange={handleChange}
           />
           <Button>Cadastrar</Button>
         </form>
        {categorias.length===0 &&(
          <div>
            Loading...
          </div>

        )}
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria.titulo}${indice}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>
      
         <Link to ="/">
           Ir para home
         </Link>
      </PageDefault>
    )
  
  }
export default CadastroCategoria;