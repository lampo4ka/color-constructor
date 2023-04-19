import { useState, useEffect, useCallback } from 'react'
// import './App.css'
import './AppWithSeparateSquares.css'
import Pallete from './Pallete'
import { useSelector, useDispatch } from './redux';

const catsSelector = (state: any) => state.cats;
const dogsSelector = (state: any) => state.dogs;
const nameSelector = (state: any) => state.name;

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
      backgroundColor: 'initial',
      isChose: false
    },
    {
      backgroundColor: 'initial',
      isChose: false
    },
    {
      backgroundColor: 'initial',
      isChose: false
    },
    {
      backgroundColor: 'initial',
      isChose: false
    }
])

  const handleColorChange = (index: number, e: any) => {
    e.stopPropagation();

    // setIsChose(isChose => !isChose);

    setSquareState(prev => prev.map(
        (item, i) => i === index
          ? {...item, isChose: !item.isChose}
          : {...item, isChose: false}
        )
      
    );

    setCurrentIndex(index);

  }

  const changeColorSquare = (index: number) => (color: string) => {
    // setColor(color)
    setSquareState(prev => 
      prev.map((item, i) =>
        i === index ? {...item, backgroundColor: color} : item))
  }

  const colors = ['white', 'blue', 'green']


  // with inserted squeres

  // return (
  //   <div className="content">
  //     <div className="unit">
  //       <h1>Granny square element</h1>
  //       <div className="square four">
  //         <div className="square three">
  //           <div
  //             className="square two"
  //             style={{
  //                 backgroundColor: squareState[1].backgroundColor,
  //                 border: squareState[1].isChose ? 'white 2px dashed' : '#888 solid 2px'
  //                 }}
  //             onClick={(e) => handleColorChange(1, e)}
  //           >
  //             <div
  //               className="square one"
  //               style={{
  //                   backgroundColor: squareState[0].backgroundColor,
  //                   border: squareState[0].isChose ? 'white 2px dashed' : '#888 solid 2px'
  //                   }}
  //               onClick={(e) => handleColorChange(0, e)}
  //             ></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <Pallete onClick={changeColorSquare(currentIndex)}/>
  //   </div>   
  // )

  // with separate squeres
  return (
    <div className="content">
      <div className="unit">
        <h1>Granny square element</h1>
        <div className="square">
        <div className="square four">
        </div>
        <div className="square three">
        </div>
        <div
              className="square two"
              style={{
                  backgroundColor: squareState[1].backgroundColor,
                  border: squareState[1].isChose ? 'white 2px dashed' : '#888 solid 2px'
                  }}
              onClick={(e) => handleColorChange(1, e)}
            >
        </div>
        <div
                className="square one"
                style={{
                    backgroundColor: squareState[0].backgroundColor,
                    border: squareState[0].isChose ? 'white 2px dashed' : '#888 solid 2px'
                    }}
                onClick={(e) => handleColorChange(0, e)}
              >
        </div>
        </div>
      </div>
      <Pallete onClick={changeColorSquare(currentIndex)}/>
    </div>   
  )
}

export default App
