import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin ring={ring} hasFriend={true}>Abir</Cousin>
                <Cousin>Abira</Cousin>
            </section>
        </div>
    );
};

export default Aunty;