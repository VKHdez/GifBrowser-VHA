import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const {data:gifs, loading} = useFetchGifs(categoria);

    if(categoria.length === 0){
        return (
            <>
                 <h3 className='GridCatTitle'> Comienza por hacer una búsqueda... {categoria}</h3>
            </>
        );
    }else{
        return (
            <>
                <h3 className='GridCatTitle'>Resultados para ... {categoria}</h3>
    
                { loading && <p>Cargando</p>}
                
                <div className='GifGrid'>    
                    {
                        gifs.map( img => (
                            <GifGridItem key={img.id} {...img} />
                        ))
                    }
                </div>
            </>
        )
    }
    
    
    
    
}
