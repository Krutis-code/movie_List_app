import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
const Loader = () => {
    return (
        <div>
            <BallTriangle heigth="100" width="100" color="white" ariaLabel="loading-indicator" />
        </div>
    );
};

export default Loader;
