import {useState} from "react";

function useForm(valoresIniciais){
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
      function clearForm(){
        setValues(valoresIniciais);
      }
  
      return {
        values,
        handleChange,
        clearForm
      }
    
  }
  export default useForm;