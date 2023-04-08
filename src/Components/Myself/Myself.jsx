import React from 'react';
import Special from '../Speacil/Special';

const Myself = ({ring}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;