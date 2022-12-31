import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue,setInputValue] = useState()
    
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onEnter = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1 )return;
        //setCategories(categories => [...categories,inputValue]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }
    return(
    <form onSubmit={onEnter}>
        <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
    )
}