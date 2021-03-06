import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = ()=>
{
    const [categories,setCategories] = useState(['One Punch']);
    
    // const handleAdd = (e)=>
    // {
    //     // setCategories (['HunterxHunter',...categories])
    //     setCategories(cats=> [...cats,'HunterxHunter'])
    // }
    
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />

        {/* <button onClick = {handleAdd}>Agregar</button> */}
        <ol>
           {
               categories.map(category=>{
                //    return <li key={category}>{category}</li>
                    return <GifGrid 
                        key= {category}
                        category = {category} 
                    />
                
               })
           }
        </ol>
        {/* {categories} */}
        </>
    )
};

export default GifExpertApp;
