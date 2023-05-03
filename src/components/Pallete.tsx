import { useState, useContext } from 'react'
import {SquaresContext} from '../data/SquaresContext';
import './Pallete.css'


function Pallete() {
  const context = useContext(SquaresContext)

  const [isChose, setIsChose] = useState(false);
  const [index, setIndex] = useState(0);

  const colors = [
    'white',
    'blue',
    'green',
    'fuchsia',
    'yellow',
    'aqua',
    'navy',
    'black',
    'purple',
    'red'
  ]


  const handleColorPick = (color: string, i: number) => {
    setIndex(i)
    setIsChose(isChose => i !== index ? isChose : !isChose)
    context.handleChangeColorSquare(color)
  }

  return (
      <div className='pallete'>
        <h1>Pallete</h1>
        <div className='colors'>
          {
            colors.map((color, indexColor) =>
              <div
                className='color'
                style={{
                  backgroundColor: color,
                  border: isChose && indexColor === index ? 'white 2px dashed' : 'inherit'
                }}
                onClick={() => handleColorPick(color, indexColor)}
                ></div>
          )}
        </div>
      </div> 
  )
}

export default Pallete
