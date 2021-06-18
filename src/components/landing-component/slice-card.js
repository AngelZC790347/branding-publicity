import React from "react";
const Slice = (props) => {
    const sliceStyle={
        height:"100%",
        width:"100%" ,
        backgroundColor:"white"   
    }
    const contentStyle={    
        textAlign:"center",        
    }
    return (
        <div style={sliceStyle} key={props.indexOfSlice} id={`slice-${props.indexOfSlice}`}>
            <img alt={props.tittle} src={props.bImgSrc} style={{maxWidth:"100%",width:"auto",verticalAlign:"middle"}}></img>
            {/* <CircleList indexOfItem={props.indexOfSlice} numbOfLi={props.numbSlices}></CircleList>  */}
        </div>
    );
}
 export default Slice;