import {useMemo, useState} from 'react';
import './styles.css'

export type Square = {
  size: any,
  // setCurrentIndex: any,
  state: any,
  onClick?: any,
  isResult?: boolean
}

function Square({size, state, onClick, isResult}: Square) {
  // const [currentIndex, setCurrentIndex] = useState(0);
//   const [squareState, setSquareState] = useState([
//     {
//       name: 'square4',
//       backgroundColor: 'initial',
//       isChose: false
//     },
//     {
//       name: 'square3',
//       backgroundColor: 'initial',
//       isChose: false
//     },
//     {
//       name: 'square2',
//       backgroundColor: 'initial',
//       isChose: false
//     },
//     {
//       name: 'square1',
//       backgroundColor: 'initial',
//       isChose: false
//     }
// ])

    const square = state.map((unit, index) => 
        (
          <div
            key={unit.name}
            className={unit.name}
            style={{
              backgroundColor: unit.backgroundColor,
              border: state[index].isChose && !isResult ? 'white 2px dashed' : '#888 solid 2px'
              }}
            onClick={(e) => onClick(index, e)}  
          
          />
        )

      )

    return (
      <div className={`square ${size}`}>
        {square}
      </div>
    )

}

export default Square;