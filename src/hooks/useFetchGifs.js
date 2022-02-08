import { useState, useEffect } from 'react';
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {
 // const [imgs, setImgs] = useState([]);
 const [state,setState] = useState({
     data:[],
     loading: true
 })

 //Permite ejecutar cierto código de manera condicional
 //recibe como primer parameto una funcion
 //recibe como segundo parametro un arreglo de dependencias
 //arreglo vacio de segundo parametro indica que quiero que el codigo se ejecute solo una vez
 //los efectos no pueden ser async
    useEffect(() => {
        getGifs(category)
        .then(imgs => {
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                });
            }, 3000);
        });
    },[category]);
 
    return state;
}
