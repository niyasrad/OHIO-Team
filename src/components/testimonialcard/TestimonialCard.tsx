import React from "react";
import './TestimonialCard.css';

function TestimonialCard(props: any) {
    return(
        <div className='test-card'>
            <img src={props.img}  alt={props.name}/>
            <p>{props.desc}</p>
            <h1>{props.name}</h1>
        </div>
    )
}

export default TestimonialCard;