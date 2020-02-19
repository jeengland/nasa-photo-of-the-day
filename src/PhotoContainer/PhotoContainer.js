import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoContainer = (props) => {
    const [date, setDate] = useState(new Date);
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=Ka3skeqen91igEUbNUDEzw6m3639xJhqlBxlGhyu')
            .then(response => setData(response.data))
    }, [])
    console.log(date)
    return(
        <div>Photo Container</div>
    )
}

export default PhotoContainer;