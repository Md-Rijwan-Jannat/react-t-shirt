import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const RingContext = createContext('Gold');
export const MoneyContext = createContext('0')
const Grandpa = () => {

    const ring = 'Diamond'
    const [money, setMomey] = useState(0)
    return (
        <div className='gandpa'>
            <h2>Grandpa</h2>
            <p>Grandpa money: {money}</p>
            <MoneyContext.Provider value={[money, setMomey]}>
                <RingContext.Provider value='Golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/*
* Create Context and export
* Create a Provider and pass a value
* Use Context to receive
*/ 