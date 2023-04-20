import { useState, useEffect } from 'react'
import './Pallete.css'

function Pallete(props: any) {
  const {onClick} = props;

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
    onClick(color)
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
