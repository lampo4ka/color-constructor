import { useState, useEffect } from 'react'
import './App.css'
import Pallete from './Pallete'

function App() {
  const [withColor, setWithColor] = useState(false);
  const [color, setColor] = useState('initial');
  const [isChose, setIsChose] = useState(false);
  const [name, setName] = useState('')

  const handleColorChange = () => {
  //  setWithColor(withColor => !withColor)
  setIsChose(isChose => !isChose)
  }

  const changeColorSquare = (color:string) => {
    setColor(color)
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
            <div className="square two">
              <div
                className="square one"
                style={{
                  backgroundColor: isChose ? color : 'initial',
                  border: isChose ? 'white 2px dashed' : 'inherit'
                }}
                onClick={handleColorChange}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Pallete onClick={changeColorSquare}/>
    </div>
 
    
  )
}

export default App
