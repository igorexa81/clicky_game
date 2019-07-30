import React from "react";
import "./style.css";

const Card = props => (

			<div onClick={() => props.setClicked(props.id)} className="card col-md-3" style={{"background-image": `url(${props.image})`}}>
				{/* <div className="img-container">
					<img alt={props.name} src={props.image} />
					
				</div> */}
			</div>
);

export default Card;