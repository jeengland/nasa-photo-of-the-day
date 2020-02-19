import React from 'react';

const Photo = (props) => {
    return(
        <img src={props.src} alt={props.title} title={props.title} />
    )
}

export default Photo;