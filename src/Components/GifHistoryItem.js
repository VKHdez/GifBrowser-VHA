import React from 'react';

export const GifHistoryItem = (props) => {


    console.log('Render from GifHistoryItem');

    return (
        <button className='historyItem' onClick={props.handleAutoCompletion}>
            { props.titulo }
        </button>
    )


}