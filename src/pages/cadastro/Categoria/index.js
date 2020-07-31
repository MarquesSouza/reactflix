import React, { useState, useEffect } from "react";
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import {Link} from 'react-router-dom';
import Button from "../../../components/Button";

function CadastroCategoria(){
  const valoresIniciais ={
    nome:'',
    descricao:'',
    cor:'#000',
  }  
  const [categorias,setCategorias] =useState([]);
  const [values,setValues]=useState(valoresIniciais);

  function setValue(chave,valor){
    setValues({
      ...values,
      [chave]:valor,
    })
  }
  function handleChange(inputHanle){
    setValue(
    inputHanle.target.getAttribute('name'),
    inputHanle.target.value
    )}
    useEffect(()=>{
      const URL = 'http://localhost:8080/categorias';

      fetch(URL).then(async (req)=>{
        const respota = await req.json();
        setCategorias([
          ...respota,
        ]);
      })
    /*  setTimeout(()=>{
        setCategorias([
          ...categorias,
          {
            "id":1,
            "nome": "Front End",
            "descricao":"Uma Categoria",
            "cor":"#cbd1ff"
            },
            {
                "id":2,
                "nome": "Back End",
                "descricao":"Uma Categoria",
                "cor":"#cbd1ff"
                }
          ])
      },4*1000) */
    },[])

  return (
      <PageDefault>
         <h1>Cadastro de Categoria {values.nome}</h1>

         <form onSubmit={function handleSubmit(subitHandle) {
          subitHandle.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
             setValues(valoresIniciais)
           }}> 
           <FormField 
              label="Nome da Categoria"
              name="nome"
              type="text"
              value={values.nome}
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
            <li key={`${categoria.nome}${indice}`}>
              {categoria.nome}
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