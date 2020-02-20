import React from 'react';

const DatePicker = (props) => {
  return (  
    <form>
        <label htmlFor='datepicker'>Choose another date:</label>
        <input id='datepicker' type='date'/>
        <button onClick={props.function}>Submit</button>
    </form>
  )
}

export default DatePicker;