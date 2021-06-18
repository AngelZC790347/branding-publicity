import React from 'react';
import './listCircle.css'
const CircleList = (props) =>{
    console.log(props.numbOfLi);
    console.log(props.indexOfItem);
    const numbOfLi = props.numbOfLi;
    let arrayOfLi=[];
    for (let index = 0; index < numbOfLi; index++) {
        let bColor;
        if(index===props.indexOfItem){
            bColor="black"
        }
        let element=<li key={index} ><a><div style={{backgroundColor:bColor}} className="li-cir"></div></a></li>;
        arrayOfLi.push(element);
    }
    return (
        <div className="sec-li">
            {arrayOfLi}          
        </div>  
    );
}
export default CircleList;