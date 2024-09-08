import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'; 

export const GifGrid = ({categoria}) => {
    const {images, isLoading} = useFetchGifs(categoria); 
    return (
    <>
      <h3>{categoria}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className='card-grid'>
        {
          images.map((image)=> 
                (<GifItem key={image.id}
                  {...image} />))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  categoria: PropTypes.string.isRequired,
}