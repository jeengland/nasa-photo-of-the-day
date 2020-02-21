import React from 'react';
import styled from 'styled-components';

const NasaPhoto = styled.img`
    max-width: 80%
`

const Photo = (props) => {
    return(
        <NasaPhoto src={props.src} alt={props.title} title={props.title} />
    )
}

export default Photo;