import React from 'react';

const Description = (props) => {
    return (
        <section className='description'>
            <p className='date'>Photo of the day for {props.date}</p> 
            <p className='description-text'>{props.desc}</p>
            <p className='hd-link'>View HD version <a href={props.hd}>here</a></p>
        </section>
    )
} 

export default Description;