import React from 'react';

const Description = (props) => {
    return (
        <section className='description'>
            <p>Photo of the day for {props.date}</p> 
            <p>{props.desc}</p>
            <p>View HD version at {props.hd}</p>
        </section>
    )
} 

export default Description;