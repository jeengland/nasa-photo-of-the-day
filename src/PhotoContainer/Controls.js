import React from 'react';

const Controls = (props) => {
    return (
        <button className={props.direction} onClick={props.function}>
            Go to {props.direction} picture
        </button>
    )
}

export default Controls;