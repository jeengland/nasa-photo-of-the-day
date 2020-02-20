import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from './Photo'
import Description from './Description';
import Controls from './Controls';
import styled from 'styled-components';

const ContainerSection = styled.section`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 1px 2px black, -2px 1px 2px black;
`

const TopSection = styled.div`
    display: flex;
    justify-contents: space-around;
`

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
            .catch(response => console.log(response))
    }, [date]);
    // Function for formatting date for API 
    const formatDate = (inputDate) => {
        const dateString= inputDate.toLocaleDateString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'});
        return (dateString.slice(6) + '-' + dateString.slice(0, 2) + '-' + dateString.slice(3, 5))
    }
    // Function for left and right date pickers
    const nextDate = () => {
        // For some reason when converting the dates, it converts to the day before the current day
        let currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + 1);
        // Store today's date for equality checking
        const presentDate = new Date();
        // Make sure that the button does not let you go past the present day
        const dayMatch = (currentDate.getDate() === presentDate.getDate());
        const monthMatch = (currentDate.getMonth() === presentDate.getMonth());
        const yearMatch = (currentDate.getFullYear() === presentDate.getFullYear());
        if (dayMatch && monthMatch && yearMatch) {
            console.log('You cannot choose a day after today\'s date!')
        } else {
            currentDate.setDate(currentDate.getDate() + 1)
            setDate(formatDate(currentDate));
        }
    }
    const prevDate = () => {
        // For some reason when converting the dates, it converts to the day before the current day
        let currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + 1);
        // Set minimum date - the API lists this as June 16, 1995 but testing shows errors occuring at 
        // dates before June 20, 1995 so I'm setting that as the minimum instead
        const minimumDate = new Date('1995-06-20');
        // Make sure that the date cannot go below the minimum date
        const dayMatch = (currentDate.getDate() === minimumDate.getDate());
        const monthMatch = (currentDate.getMonth() === minimumDate.getMonth());
        const yearMatch = (currentDate.getFullYear() === minimumDate.getFullYear());
        if (dayMatch && monthMatch && yearMatch) {
            console.log('You cannot choose a day before June 20th, 1995!')
        } else {
            currentDate.setDate(currentDate.getDate() - 1)
            setDate(formatDate(currentDate));
        }
    }
    // Function for datepicker 
    const dateChange = (event) => {
        event.preventDefault();
        setDate(document.querySelector('#datepicker').value)
    }
    return(
        <ContainerSection className='photo-container'>
            <h1>NASA Photo of the Day</h1>
            <TopSection>
                <Controls function={prevDate} direction='last' text='<'/>
                <Photo src={data.url} title={data.title} />
                <Controls function={nextDate} direction='next' text='>'/>
            </TopSection>
            <Description date={data.date} desc={data.explanation} hd={data.hdurl} pickerFunction={dateChange} />
        </ContainerSection>
    )
}

export default PhotoContainer;