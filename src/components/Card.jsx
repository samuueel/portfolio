import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <a data-aos="flip-up" href={props.link} target={'_blank'} >
            <div className='card'>
                <img src={props.img}></img>
                <div className='cardInfos'>
                    <h3>{props.title}</h3>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default Card