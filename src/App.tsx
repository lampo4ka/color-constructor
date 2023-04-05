import { useState, useEffect } from 'react'
import './App.css'
import Pallete from './Pallete'

function App() {
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



  return (
    <div className="content">
      <div className="unit">
        <h1>Granny square element</h1>
        <div className="square four">
          {/* <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p> */}
          <div className="square three">
            <div
              className="square two"
              style={{
                  backgroundColor: squareState[1].backgroundColor,
                  border: squareState[1].isChose ? 'white 2px dashed' : '#888 solid 2px'
                  }}
              onClick={(e) => handleColorChange(1, e)}
            >
              <div
                className="square one"
                style={{
                    backgroundColor: squareState[0].backgroundColor,
                    border: squareState[0].isChose ? 'white 2px dashed' : '#888 solid 2px'
                    }}
                onClick={(e) => handleColorChange(0, e)}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Pallete onClick={changeColorSquare(currentIndex)}/>
    </div>
 
    
  )
}

export default App
