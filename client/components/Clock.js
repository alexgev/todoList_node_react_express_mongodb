import React from 'react';
import { connect } from 'react-redux';

const Clock = (props) => {

    const date = new Date();
    
    const timerId = setInterval(() => {
        props.onChangeTime(date.toLocaleTimeString());
        clearInterval(timerId);
    }, 1000);
    

    return (
        <h3>{props.time}</h3>
    )
}

export default connect(
    state => ({
        time: state.time
    }),
    dispatch => ({
        onChangeTime: (time) => {
            dispatch({ type: "CHANGE_TIME", payload: time });
        }
    })
    
)(Clock);