import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from './Photo'
import Description from './Description';

const PhotoContainer = (props) => {
    const [data, setData] = useState({});
    const [date, setDate] = useState('');
    // Get current date in correct format using API call
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ka3skeqen91igEUbNUDEzw6m3639xJhqlBxlGhyu`)
            .then(response => setDate(response.data.date))
    }, [])
    // Get data for photo at 'date'
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ka3skeqen91igEUbNUDEzw6m3639xJhqlBxlGhyu&date=${date}`)
            .then(response => setData(response.data))
            
    }, [date]);
    return(
        <section className='photo-container'>
            <Photo src={data.url} title={data.title}/>
            <Description date={data.date} desc={data.explanation} hd={data.hdurl} />
        </section>
    )
}

export default PhotoContainer;