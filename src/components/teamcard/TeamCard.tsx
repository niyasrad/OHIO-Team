import React from "react";
import './TeamCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function TeamCard(props: any) {
    return (
        <>
            <div className='teamcard-total'>
                <div className='teamcard-card' >
                    <LazyLoadImage effect='blur' src={props.img} placeholderSrc={props.img}/>
                    <div className='teamcard-card-p'>
                        <p>{props.name}</p>
                    </div>
                </div>
                <p>{props.post}</p>
            </div>
        </>
    );
}

export default TeamCard;