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
    // Function for formatting date for API 
    const formatDate = (inputDate) => {
        const dateString= inputDate.toLocaleDateString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'});
        return (dateString.slice(6) + '-' + dateString.slice(0, 2) + '-' + dateString.slice(3, 5))
    }
    // Function for left and right date pickers
    const dateSetter = (direction) => {
        let currentDate = new Date(date);
        // For some reason when converting the dates, it converts to the day before the current day
        if (direction === 'left') {
            return formatDate(currentDate);
        } else if (direction === 'right') {
            currentDate.setDate(currentDate.getDate() + 2)
            return formatDate(currentDate);
        }
    }
    console.log(dateSetter('right'));
    return(
        <section className='photo-container'>
            <Photo src={data.url} title={data.title}/>
            <Description date={data.date} desc={data.explanation} hd={data.hdurl} />
        </section>
    )
}

export default PhotoContainer;