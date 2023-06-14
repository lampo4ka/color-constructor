import {useContext} from 'react';
import {SquaresContext} from '../../data/SquaresContext';
import './styles.css'

export type Square = {
  size: any,
  style?: any
}

function Square({size, style}: Square) {
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
      <div className={`${style} square ${size}`}>
        {square}
      </div>
    )

}

export default Square;