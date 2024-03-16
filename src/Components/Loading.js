import React from 'react';
import loading from './loading.gif';

const Loading = () => {
    return (
        <div className="text-center">
            <img className="my-3" src={loading} alt="loading..." style={{ width: '50vh', height: '50hh',borerRadius:'50%',border:'50%'}} />
            <h1 style={{color:'#ffffff'}}>Loading your latest NEWS!!</h1>
        </div>
    );
}

export default Loading;
