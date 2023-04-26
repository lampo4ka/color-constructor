import {useMemo, useState} from 'react';
import Square from '../square'
import './styles.css'

function Scarf() {
    const [unitState, setUnitState] = useState([
        {
          name: 'square4',
          backgroundColor: 'initial',
        },
        {
          name: 'square3',
          backgroundColor: 'initial',
        },
        {
          name: 'square2',
          backgroundColor: 'initial',
        },
        {
          name: 'square1',
          backgroundColor: 'initial',
        }
    ])

    const square = 
        (
            <Square />
        )


    const scarf = useMemo(
        () => new Array(6).fill(square),
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