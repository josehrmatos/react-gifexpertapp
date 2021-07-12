import React,{useEffect,useState} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';s
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) =>
{
    // const [images, setimages] = useState([])

    const {data:images,loading} = useFetchGifs(category);

 



    

    return(
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            
            <div className="card-grid">
                {
                images.map( imagen =>
                    (
                        <GifGridItem 
                            key = {imagen.id}
                            // imagen = {imagen}
                            {...imagen }
                        />
                        // <li key = {id}>{title}</li>
                        // <li key = {imagen.id}>{imagen.title}</li>
                    ))
                }
            </div>
        </>
    );
    
};