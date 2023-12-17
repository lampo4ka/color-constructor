import {
  useState,
  createContext,
  useEffect,
  useCallback} from 'react'
import './App.css'
import Pallete from './components/Pallete'
import { useSelector, useDispatch } from './redux';
import Scarf from './components/result';
import Square from './components/square';
import {squaresDefaultState} from './data/DefaultSquaresState';
import {SquaresContext, urlParams} from './data/SquaresContext';
import {sizes, SizeKey} from './data/Sizes';
import Sizes from './components/sizes';
import Sandbox from './components/sandbox';
import Submit from './components/save&submit/Submit'
import AllScarvesButton from './components/savedScarves/AllScarvesButton';

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

  const [isScarfReady, setIsScarfReady] = useState(false);
  const [isShownScarves, setIsShownScarves] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const [squareState, setSquareState] = useState(squaresDefaultState);
  const [squareSize, setSquareSize] = useState<SizeKey>('l');
  const [urlParams, setUrlParams] = useState<urlParams>({
    colors: [],
    size: "l"
  });


  const handleSquareChose = (index: number) => {
    setCurrentIndex(index);
  

    setSquareState(prev => prev.map(
        (item, i) => i === index
        ? {
          ...item, 
          borderColor: 'white 2px dashed'
        }
        :{
            ...item,
            borderColor: '#888 solid 2px',
          }
        )
      
    );

  }

  const handleChangeColorSquare = (index: number) => (color: string | null) => {

    setSquareState(prev => 
      prev.map((item, i) =>
        i === index ? {
          ...item,
          backgroundColor: color ?? '#4a4a48',
          isReadyToSave: true
        } : item))
  }

  const handleClearSquare = () => {
    setSquareState(prev => 
      prev.map((item) => 
        ({
          ...item,
          backgroundColor: '#4a4a48',
          borderColor: '#888 solid 2px',
          isReadyToSave: !item.isReadyToSave
        })
      ))
  }

  const handleChoseSize = (size: SizeKey) => {
    setSquareSize(size)
  }

  const handleSaveButton = () => {
    setIsScarfReady(true);

    const colors = squareState.map(square => square.backgroundColor);

    const urlParams = {
        colors,
        size: squareSize
    };

    setUrlParams(urlParams)
  }

  const handleShowSavedScarves = () => {
    if(isScarfReady) {
      setIsShownScarves(true);

      const currentUrl = window.location.href;

      let params = new URLSearchParams(currentUrl);
      params.set('size', urlParams.size);
      
      console.log(currentUrl)
    }
    return;
  }

  return (
    <SquaresContext.Provider value={{
      state: squareState,
      handleSquareChose,
      handleChangeColorSquare: handleChangeColorSquare(currentIndex) ,
      handleClearSquare,
      squareSize,
      handleChoseSize,
      handleSaveButton,
      isScarfReady,
      currentColor: currentIndex !== null ? squareState[currentIndex].backgroundColor : null ,
      handleShowSavedScarves
    }}>
      {!isShownScarves && (
        <div className="content">
          <AllScarvesButton />
          <div className='result'>
            <h2 className="">Hey, I'm your scarf :) Color me, please</h2>
            <Scarf/>
          </div>
        <div className="unit">
          <h2>Granny square element</h2>
          <Square
            size='squareXL'
          />
        </div>
        <Sandbox />
      </div> 
      )}

      {isShownScarves && (
        <>
          <h2>Если тебе всё нравится, то нажимай отправить. Макет шарфа улетит мне на почту</h2>
          <Scarf/>
          <Submit />
        </>
      )}


    </SquaresContext.Provider>
  )
}

export default App
