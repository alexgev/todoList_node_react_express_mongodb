import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        console.log("Items", this.props.items);
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        return <a href={item.link} key={index}>{item.label}</a>
                    })
                }
            </div> 
        )    
    }
}

Header.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    submit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['news'], ['photos']),
    user: PropTypes.shape({
        name: PropTypes.string,
        age: propTypes.number
    }),
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            age: propTypes.number
        })
    )
}