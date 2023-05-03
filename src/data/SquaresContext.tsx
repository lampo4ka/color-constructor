import {createContext} from 'react';
import {squaresDefaultState} from './DefaultSquaresState';

export const SquaresContext = createContext({
    state: squaresDefaultState,
    handleSquareChose: (index: number) => {},
    handleChangeColorSquare: (color: string) => {},
    handleClearSquare: () => {}
  });