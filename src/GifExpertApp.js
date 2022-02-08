import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid'

const GifExpertApp = () => {

    //const categories = ['Love', 'kitty','pikachu'];

    const [categories,setCategories] = useState(['Pikachu']);
    
       return <> 
            <h2>GifExpertApp</h2>
            <AddCategory setCategory = {setCategories}/>
            <hr />
            
            <ol>
            {

                categories.map(category =>
                     //<li key={category}>{category}</li>
                     <GifGrid  
                        key={category}
                        category = {category} 
                    />
                )
            }
            </ol>
    </>
}


export default GifExpertApp;