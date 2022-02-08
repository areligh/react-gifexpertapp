import React, {useState} from 'react';
import PropTypes from 'prop-types';



export const AddCategory = ({setCategory}) => {
    //useState() //estado actual es undefined
    const [inputValue,setIputValue] = useState(''); // estado actual es '' para evitar error  A component is changing an uncontrolled
    const handledInputChange = (e) => {
        setIputValue(e.target.value);
    }

    const handleSubmit = (e) => {
           e.preventDefault();
           if(inputValue.trim().length>2){
                setCategory(cats => [inputValue,...cats]);
                setIputValue('');
           }
    }

    return <form onSubmit= {handleSubmit}>
        <input 
            type="text" 
            value = {inputValue}
            onChange = { handledInputChange}
        />
    </form>
} 

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
