import {useContext, useMemo, useState} from 'react';
import Square from '../square'
import './styles.css'
import { SquaresContext } from '../../data/SquaresContext';
import { sizes } from '../../data/Sizes';

function Scarf() {
    const context = useContext(SquaresContext);
    const {squareSize} = context;


    const square = 
        (
            <Square size={sizes[squareSize].name} isResult={true}/>
        )


    const scarf = useMemo(
        () => new Array(sizes[squareSize].count).fill(square),
        [square]
    );


    return (
        <div className='result'>
            <h2>Hey, I'm your scarf :) Color me, please</h2>
            <div className='scarf'>
                {scarf}
            </div>
        </div>
    )

}

export default Scarf;