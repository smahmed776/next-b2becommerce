import React from 'react'

const LiveStreams = ({ show }) => {
    return (
        <div className={show ? 'd-block' : "d-none"}>
            <h4>Live</h4>
        </div>
    )
}

export default LiveStreams
