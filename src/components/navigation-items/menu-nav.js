import React, { useState } from 'react';
import './menu-nav.css';
const dataLi=[
    "hamburguesa carne","sandwiches","bebidas"
];

export default function MenuNav() { 
    const changeSlectedLi = (e) =>{
        let newID = e.target.id.replace("a-","") ;
        newID =parseInt( newID.replace("li-",""));
        setSelIndex(newID); 
    }
    const [selectecIndex,setSelIndex]=useState(0);
    let liElementos=[];
    dataLi.map((el,index)=>{
        let bColor = ""
        let tColor = ""
        if (index === selectecIndex) {
            bColor = "#e03b3b"
            tColor = "whitesmoke";
        }
        let li = <li  id={`li-${index}`} key={index} style={{backgroundColor:bColor}} onClick={(e)=>changeSlectedLi(e)}><a style={{color:tColor}} href={`#products-${index+1}`} id={`a-${index}`}>{el}</a></li>;
        liElementos.push(li);
    });
    return(
        <nav id="nav-menu">
            <ul >
                {liElementos}
            </ul> 
        </nav>
    );
}
