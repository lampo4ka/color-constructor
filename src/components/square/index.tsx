import {useMemo, useState} from 'react';
import './styles.css'

export type Square = {
  size: any
}

function Square() {

  const [squareState, setSquareState] = useState([
    {
      name: 'square4',
      backgroundColor: 'initial',
      isChose: false
    },
    {
      name: 'square3',
      backgroundColor: 'initial',
      isChose: false
    },
    {
      name: 'square2',
      backgroundColor: 'initial',
      isChose: false
    },
    {
      name: 'square1',
      backgroundColor: 'initial',
      isChose: false
    }
])

    const square = squareState.map((unit:any) => 
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

    return (
      <div className="square">
        {square}
      </div>
    )

}

export default Square;