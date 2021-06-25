import React, { useState } from 'react';
import './listCircle.css';
const CircleList = (props) =>{
    const [boldCircle,setBoldCircle]=useState(props.indexOfItem-1);
    const numbOfLi = props.numbOfLi;
    let arrayOfLi=[];
    for (let index = 0; index < numbOfLi; index++) {
        let bColor;
        if(index===boldCircle){
            bColor="black"
        }
        let element=<li key={index} ><a onClick={()=>{setBoldCircle(index);props.handleTransition(index);}}><div style={{backgroundColor:bColor}} className="li-cir"></div></a></li>;
        arrayOfLi.push(element);
    }
    return (
        <div className="sec-li">
            {arrayOfLi}          
        </div>  
    );
}
export default CircleList;