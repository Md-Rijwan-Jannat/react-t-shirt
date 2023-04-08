import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {

    const aungty = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Ring: {aungty}</p>
        </div>
    );
};

export default Special;