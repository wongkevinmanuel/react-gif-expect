import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categorias, setcategorias] = useState(['inuyasha']);
  
  const onAgregarCategoria = ( nuevaCategoria)=> {
    if(categorias.includes(nuevaCategoria)) return;
    setcategorias([...categorias, nuevaCategoria ]);
  }

  return (
    <>
        <h1> GifExpertApp by Kevin W.. </h1>
        <AddCategory 
          onNuevaCategoria ={ (event) => onAgregarCategoria(event) } />
        {
          categorias.map( (categoria)=> {
            return <GifGrid 
                    key={categoria} 
                    categoria={categoria} ></GifGrid>
          })
        }
    </>
  )
}
