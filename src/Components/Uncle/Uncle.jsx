import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMomey] = useContext(MoneyContext);
    return (
        <div className='grandpa'>
            <h2>Uncle</h2>
            <p><small>Grandpa money: {money}</small></p>
            <button onClick={()=> setMomey(money + 10000)}>Send 10000 TK</button>
            <section className='flex'>
                <Cousin>Sumaiya</Cousin>
                <Cousin>Rijwan</Cousin>
            </section>
        </div>
    );
};

export default Uncle;