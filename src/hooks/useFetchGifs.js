import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( categoria ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() =>{
        getGifs(categoria)
        .then(gifs => {
            setTimeout(() => {
                setState({ data: gifs, loading: false });
            }, 1000);
            
        });
    }, [categoria]);

    return state;
}