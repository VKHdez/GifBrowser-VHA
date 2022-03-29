import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {GifHistory} from './GifHistory';

export const AddCategory = ({categorias, setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e ) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if( inputValue.trim().length > 2 ){

            if( categorias == '' ){
                //console.log('ARRAY VACIO');
                setCategorias( cats =>  [inputValue] );
            }else{

                setCategorias( cats => [inputValue, ...cats] );
            }

        }
    }

    const handleAutoCompletion = () => {
        const field = document.querySelector('.inputSearch');
        console.log("BOTON presionado!!!");
    }

    return (

        <div className="search">
            <form onSubmit={handleSubmit}>
                <input className='inputSearch' type="text" value = { inputValue } onChange={ handleInputChange } />
            </form> 
        
            {
                // TODO : Render de HISTORY Component
                <GifHistory key={'history'} categorias={categorias} autocompletion ={handleAutoCompletion} />
            }
        
        </div>

            
    );
}


AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}


