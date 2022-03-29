
import React from 'react';

import { GifHistoryItem } from './GifHistoryItem';

export const GifHistory = ({categorias, handleAutoCompletion}) => {

    console.log(categorias);

    if(categorias[0] != '' ){
        console.log('Array vacío');
        return(
            <div className='gifHistory'>
                {
                    categorias.map( cat =>(
                        <GifHistoryItem key={cat}  titulo={cat} autocompletion ={handleAutoCompletion}  />
                    ))       
                }
            </div>   
        );
    }else{
        return(
            <></>
        );
    }
 
}