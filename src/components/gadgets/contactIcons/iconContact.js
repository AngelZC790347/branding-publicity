import React from "react";
export default class ContactI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            srcIcon:"",
            style:null
        };
    }
    static getDerivedStateFromProps(props){
        return({srcIcon:props.srcIcon,style:props.style});
    }
    render(){
        return(
            <div className={this.state.style} >
                <img src={this.state.srcIcon}></img>
            </div>
        );
    }
}