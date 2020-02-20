import React from 'react';
import DatePicker from './DatePicker';
import styled from 'styled-components';

const DescriptionSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    .date {
        font-size: 1.2rem;
        margin: 1% 0 0;
    }
    p {
        max-width: 80%;
        align-self: center;
        text-align: center;
    }
`

const Description = (props) => {
    return (
        <DescriptionSection className='description'>
            <DatePicker function={props.pickerFunction} />
            <p className='date'>Photo of the day for {props.date}</p>
            <p className='description-text'>{props.desc}</p>
            <p className='hd-link'>View HD version <a href={props.hd}>here</a></p>
        </DescriptionSection>
    )
} 

export default Description;