import React from "react";
import './card.css'
class Card extends React.Component{
    render(){
        return(
            <div className="card-inline">
                <img src={this.props.imgSrc} alt={this.props.cardTittle}>
                </img>
               <div style={{    position: "absolute",marginLeft:"10%",paddingTop:"130px",fontSize:"200%"}}>{this.props.cardTittle}</div>
            </div>
        );
    }
}
export default Card;