import React from 'react';
import styled from 'styled-components';

const DirectionalButton = styled.button`
    font-size: 5rem;
    font-family: 'IBM Plex Sans', sans-serif;
    background-color: transparent;
    border: none;
    width: 10%;
    &:hover {
        background-color: grey;
        color: white;
    }
`

const Controls = (props) => {
    return (
        <DirectionalButton className={props.direction} onClick={props.function}>
            {props.text}
        </DirectionalButton>
    )
}

export default Controls;