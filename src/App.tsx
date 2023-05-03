import {
  useState,
  createContext,
  useEffect,
  useCallback} from 'react'
import './App.css'
import Pallete from './components/Pallete'
import { useSelector, useDispatch } from './redux';
import Clear from './components/Clear';
import Scarf from './components/result';
import Square from './components/square';
import {squaresDefaultState} from './data/DefaultSquaresState';
import {SquaresContext} from './data/SquaresContext';

// const catsSelector = (state: any) => state.cats;
// const dogsSelector = (state: any) => state.dogs;
// const nameSelector = (state: any) => state.name;


const size = {
  xl: {
    name: 'squareXL',
    count: 1
  },
  l: {
    name: 'squareL',
    count: 9
  },
  m: {
    name: 'squareM',
    count: 24
  },
  s: {
    name: 'squareS',
    count: 54
  },
}

function App() {
  // const cats = useSelector(catsSelector);
  // const dogs = useSelector(dogsSelector);
  // const name = useSelector(nameSelector);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const id = setTimeout(
  //     () => {
  //       dispatch({ type: 'changeName', payload: 'Vlad' });
  //       console.log('changeName');
  //     },
  //     1000
  //   );

  //   return () => clearTimeout(id);
  // }, [dispatch]);

  // console.log({cats, dogs, name})

  const [color, setColor] = useState('#4a4a48');
  const [isChose, setIsChose] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [squareState, setSquareState] = useState(squaresDefaultState)

  const handleSquareChose = (index: number) => {

    setSquareState(prev => prev.map(
        (item, i) => i === index
          ? {...item, isChose: !item.isChose}
          : {...item, isChose: false}
        )
      
    );

    setCurrentIndex(index);

  }

  const handleChangeColorSquare = (index: number) => (color: string) => {
    setSquareState(prev => 
      prev.map((item, i) =>
        i === index ? {...item, backgroundColor: color} : item))
  }

  const handleClearSquare = () => {
    setSquareState(prev => 
      prev.map((item) => 
        ({
          ...item,
          backgroundColor: '#4a4a48',
          isChose: false
        })
      ))
  }

  return (
    <SquaresContext.Provider value={{
      state: squareState,
      handleSquareChose,
      handleChangeColorSquare: handleChangeColorSquare(currentIndex),
      handleClearSquare
    }}>
      <div className="content">
        <div className="unit">
          <h1>Granny square element</h1>
          <Square
            size={size.xl.name}
          />
          <Clear/>
        </div>
        <Pallete/>
        
          <Scarf size={size}/>
      </div>   
    </SquaresContext.Provider>
  )
}

export default App
