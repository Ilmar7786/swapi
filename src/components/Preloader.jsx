import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Preloader = () => {
    return <Spinner animation='border' className='center position-absolute top-50 start-50'/>
}