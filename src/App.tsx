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
        {/* <div className="square4">
        </div>
        <div className="square3">
        </div>
        <div
              className="square2"
              style={{
                  backgroundColor: squareState[1].backgroundColor,
                  border: squareState[1].isChose ? 'white 2px dashed' : '#888 solid 2px'
                  }}
              onClick={(e) => handleColorChange(1, e)}
            >
        </div>
        <div
                className="square1"
                style={{
                    backgroundColor: squareState[0].backgroundColor,
                    border: squareState[0].isChose ? 'white 2px dashed' : '#888 solid 2px'
                    }}
                onClick={(e) => handleColorChange(0, e)}
              >
        </div> */}
        </div>
      </div>
      <Pallete onClick={changeColorSquare(currentIndex)}/>
    </div>   
  )
}

export default App
