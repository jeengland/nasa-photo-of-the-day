import React from 'react';
import styled from 'styled-components';

const PickerForm = styled.form`
  align-self: center;
  margin-top: 1%;
`

const DatePicker = (props) => {
  return (  
    <PickerForm>
        <label htmlFor='datepicker'>Choose another date:</label>
        <input id='datepicker' type='date' max={new Date().toISOString().substr(0, 10)} min='1995-06-20'/>
        <button onClick={props.function}>Submit</button>
    </PickerForm>
  )
}

export default DatePicker;