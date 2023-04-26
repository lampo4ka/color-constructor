import {useMemo, useState} from 'react';
import Square from '../square'
import './styles.css'

function Scarf({size}: {size: any}) {

    const square = 
        (
            <Square size={size.l.name}/>
        )


    const scarf = useMemo(
        () => new Array(size.l.count).fill(square),
        [square]
    );


    return (
        <div className='result'>
            <div className='scarf'>
                {scarf}
            </div>
        </div>
    )

}

export default Scarf;