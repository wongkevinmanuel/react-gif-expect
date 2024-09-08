import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ onNuevaCategoria }) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmit = (event)=>{
        console.log('Se disparo el submit del formulario')
        //Evitar refrescar el navegador web
        event.preventDefault();

        const input = inputValue.trim();
        if(input.length <= 1 ) return;
        
        onNuevaCategoria(input );
        setInputValue('');
    }
    {/* <form> es el unico elemento root */}
  return (
    <form aria-label='form'
    onSubmit={ (event) => onSubmit(event) }>
        <input
            type='text'
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={ (event)=>onInputChange(event) }></input>
    </form>
    )
}

AddCategory.propTypes = {
    //La funcion debe de ser requerida
    onNuevaCategoria: PropTypes.func.isRequired,
}