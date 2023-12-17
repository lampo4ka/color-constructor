import { useState, useContext, useEffect, ReactEventHandler, useCallback } from 'react'
import {SquaresContext} from '../data/SquaresContext';
import './Pallete.css'

// const Palettes = {
//   one: 'palleteOne',
//   two: 'palleteTwo'
// } as const;


// type PalleteName = typeof Palettes[keyof typeof Palettes];
const PALLETE_ONE = 'palleteOne';

type PalleteName = typeof PALLETE_ONE | 'palleteTwo' | 'palleteThree';

function Pallete() {
  const context = useContext(SquaresContext)

  const { handleChangeColorSquare, currentColor } = context

  const [selected, setSelected] = useState<number | null>(null);
  const [colors, setColors] = useState<Array<string>>([]);
  const [option, setOption] = useState<string>('Pallete One');

  console.log(currentColor)


  const fetchColors = useCallback((name:PalleteName) => import('../data/colors').then((colors) => setColors(colors[name])), [])



  useEffect(() => {
    fetchColors('palleteThree')  
  }, [fetchColors])



    const togglePallete = (e:React.ChangeEvent<HTMLSelectElement>) => {
      setOption(e.target.value)
      if(e.target.value === 'Pallete One') {
        
        fetchColors('palleteOne')
        
      }
      if(e.target.value === 'Pallete Two') {
        fetchColors('palleteTwo')  
      }
    }
 

  // const colors = [
  //   'white',
  //   'blue',
  //   'green',
  //   'fuchsia',
  //   'yellow',
  //   'aqua',
  //   'navy',
  //   'black',
  //   'purple',
  //   'red',
  //   "#546597",
  //   "#b9427c",
  //   "#f64d33",
  //   "#f9ca65",
  //   "#f78b53",
  //   "#986e85",
  //   "#e79953",
  //   "#ee394a",
  //   "#d18e80",
  //   "#e76949",
  //   "#5f4377",
  //   "#da326f",
  //   "#fa5d48",
  //   "#fe5790",
  //   "#7a3878",
  //   "#e23234",
  //   "#f69c53",
  //   "#314776",
  //   "#7b9997",
  //   "#b21331",
  //   "#c36334"
  // ]


  const handleColorPick = (color: string, i: number) => {
    if(selected === i) {
      setSelected(null)
      handleChangeColorSquare(null)
      return;
    }

    setSelected(i)
    handleChangeColorSquare(color)

  }

  return (
    <>
      <h2>Pallete</h2>
      <select onChange={togglePallete}>
        <option value="Pallete One">Pallete One</option>
        <option value="Pallete Two">Pallete Two</option>
        <option value="Pallete Three" selected>Pallete Three</option>
      </select>


      <div className='colors'>
        {
          colors.map((color, indexColor) =>
            <div
              className='color'
              style={{
                backgroundColor: color,
                border: color === currentColor ? 'white 2px dashed' : 'inherit'
              }}
              onClick={() => handleColorPick(color, indexColor)}
              ></div>
        )}
      </div>
    </>
  )
}

export default Pallete
