import {createContext} from 'react';
import {squaresDefaultState} from './DefaultSquaresState';
import { SizeKey } from './Sizes';

export const SquaresContext = createContext({
    state: squaresDefaultState,
    handleSquareChose: (index: number) => {},
    handleChangeColorSquare: (color: string) => {},
    handleClearSquare: () => {},
    squareSize: 'l' as SizeKey,
    handleChoseSize: (size: SizeKey) => {},
    // isReadyToSave: false,
    // handleReadyToSave: (isReady: boolean) => {}
  });