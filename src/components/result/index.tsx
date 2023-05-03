import {useMemo, useState} from 'react';
import Square from '../square'
import './styles.css'

function Scarf({size}: {size: any}) {
    const square = 
        (
            <Square size={size.s.name} isResult={true}/>
        )


    const scarf = useMemo(
        () => new Array(size.s.count).fill(square),
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