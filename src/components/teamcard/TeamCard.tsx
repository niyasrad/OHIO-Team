import React from "react";
import './TeamCard.css';

function TeamCard(props: any) {
    return (
        <>
            <div className='teamcard-total'>
                <div className='teamcard-card' >
                    <img src={props.img} />
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