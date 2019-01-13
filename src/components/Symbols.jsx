import React from 'react';

export const DegreeFahrenheit = (props) => <span>&#x2109;</span>;

export const DegreeCelsius = (props) => <span>&#x2103;</span>;

const AM = (props) => <span>AM</span>;

const PM = (props) => <span>PM</span>;

export const symbolMapper = {
    'f': <DegreeFahrenheit/>,
    'c': <DegreeCelsius/>,
    'am': <AM/>,
    'pm': <PM/>,
    '%' : '%'
};