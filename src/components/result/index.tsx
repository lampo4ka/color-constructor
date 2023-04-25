import {useMemo, useState} from 'react';
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

    const square = unitState.map((unit:any) => 
        (
          <div
            key={unit.name}
            className={unit.name}
            style={{
              backgroundColor: unit.backgroundColor,
              }}
          
          />
        )

      )

    const scarf = useMemo(
        () => new Array(6).fill(
            <div className='square'>{square}</div>
            ),
        [square]
    );


    return (
        <div className='scarf'>
            {scarf}
        </div>
    )

}

export default Scarf;