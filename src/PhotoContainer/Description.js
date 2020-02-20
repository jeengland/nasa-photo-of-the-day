import React from 'react';
import DatePicker from './DatePicker';

const Description = (props) => {
    return (
        <section className='description'>
            <p className='date'>Photo of the day for {props.date}</p>
            <DatePicker function={props.pickerFunction} />
            <p className='description-text'>{props.desc}</p>
            <p className='hd-link'>View HD version <a href={props.hd}>here</a></p>
        </section>
    )
} 

export default Description;