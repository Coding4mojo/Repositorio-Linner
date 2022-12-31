import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import {GifGrid} from "./Components/GifGrid";

export const GifExpertApp = () => {
const [categories , setCategories] = useState ([]);

const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory))return;
    setCategories([newCategory, ...categories]);
    console.log(categories)
}

return ( 
    <>
        {/*TITLE*/}
        <h1>GifExpertApp</h1>
        {/*INPUT*/}
        <AddCategory onNewCategory={onAddCategory}/>
        <br />
        <ol>
        {/*Listado de los GIFS */}        
            {categories.map( category => 
                (
                <GifGrid 
                Key={category}
                category={category}
                />
                ))}
        </ol>
        {/*Gif item */}
    </>
        )
    }