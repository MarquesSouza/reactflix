import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import {Link} from 'react-router-dom';

function CadastroCategoria(){
  const valoresIniciais ={
    nome:'',
    descricao:'',
    cor:'',
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
  return (
      <PageDefault>
         <h1>Cadastro de Categoria {values.nome}</h1>
         <form onSubmit={
           function handleSubmit(inputHanle){
             inputHanle.preventDefault();
             setCategorias({
               ...categorias,
               values
             })
             setValues(valoresIniciais)
           }
         }> 
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
              type="text"
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
           <button>Cadastrar</button>
         </form>
         <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
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