import React from 'react';
import styled from 'styled-components';

const DirectionalButton = styled.button`
    font-size: 5rem;
`

const Controls = (props) => {
    return (
        <DirectionalButton className={props.direction} onClick={props.function}>
            {props.text}
        </DirectionalButton>
    )
}

export default Controls;