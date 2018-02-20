import React from 'react';
import { connect } from 'react-redux';

const Track = ({ track }) => <div>{track.name}</div>;

const mapStateToProps = (state, ownProps) => {
    return {
        track: state.tracks.find(track => track.id === +ownProps.params.id)
    }
}

export default connect(mapStateToProps)(Track);