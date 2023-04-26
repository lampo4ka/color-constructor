import { useState, useEffect, useCallback } from 'react'
import './App.css'
import Pallete from './components/Pallete'
import { useSelector, useDispatch } from './redux';
import Clear from './components/Clear';
import Scarf from './components/result';
import Square from './components/square'

const catsSelector = (state: any) => state.cats;
const dogsSelector = (state: any) => state.dogs;
const nameSelector = (state: any) => state.name;


const size = {
  0: 'template',
  1: 'small',
  2: 'medium',
  3: 'big',
}

function App() {
  const cats = useSelector(catsSelector);
  const dogs = useSelector(dogsSelector);
  const name = useSelector(nameSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(
      () => {
        dispatch({ type: 'changeName', payload: 'Vlad' });
        console.log('changeName');
      },
      1000
    );

    return () => clearTimeout(id);
  }, [dispatch]);

  console.log({cats, dogs, name})

  const [color, setColor] = useState('initial');
  // const [isChose, setIsChose] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleColorChange = (index: number, e: any) => {
    e.stopPropagation();

    setSquareState(prev => prev.map(
        (item, i) => i === index
          ? {...item, isChose: !item.isChose}
          : {...item, isChose: false}
        )
      
    );

    setCurrentIndex(index);

  }

  const changeColorSquare = (index: number) => (color: string) => {
    setSquareState(prev => 
      prev.map((item, i) =>
        i === index ? {...item, backgroundColor: color} : item))
  }

  const clearSquare = () => {
    setSquareState(prev => 
      prev.map((item) => 
        ({
          ...item,
          backgroundColor: 'initial',
          isChose: false
        })
      ))
  }

  return (
    <div className="content">
      <div className="unit">
        <h1>Granny square element</h1>
        <Square />
        {/* <div className="square">
          {
            squareState.map((square, index) => 
              (
                <div
                  className={square.name}
                  style={{
                    backgroundColor: squareState[index].backgroundColor,
                    border: squareState[index].isChose ? 'white 2px dashed' : '#888 solid 2px'
                    }}
                  onClick={(e) => handleColorChange(index, e)}
                
                />
              )

            )
          }
        </div> */}
        <Clear onClick={clearSquare}/>
      </div>
      <Pallete onClick={changeColorSquare(currentIndex)}/>
      <Scarf />
    </div>   
  )
}

export default App
