import {useContext} from 'react';
import {SquaresContext} from '../../data/SquaresContext';
import './styles.css'

export type Square = {
  size: any,
  isResult?: boolean
}

function Square({size, isResult}: Square) {
const context = useContext(SquaresContext);
const {state, handleSquareChose} = context;


    const square = state.map((unit, index) => 
        (
          <div
            key={unit.name}
            className={unit.name}
            style={{
              backgroundColor: unit.backgroundColor,
              border: state[index].borderColor
              }}
            onClick={() => handleSquareChose(index)}  
          
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