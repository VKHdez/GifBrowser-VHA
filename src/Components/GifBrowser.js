import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifBrowser = () =>{

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];

    
    const [categorias, setCategorias] = useState(['']);

    return(

        <>
            <div className='contentWrapper'>
                <h2>Gif Browser</h2>
                <AddCategory categorias={categorias} setCategorias={setCategorias}/>
                
                <ol>
                    {
                        //categorias.map( categoria => {
                            
                            <GifGrid key={categorias[0]} categoria={categorias[0]} />
                        //})
                    }
                </ol>

            </div>

            <footer>Gif Browser App made in React</footer>
        </>
    );

}