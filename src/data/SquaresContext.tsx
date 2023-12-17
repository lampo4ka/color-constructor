import {createContext} from 'react';
import {squaresDefaultState} from './DefaultSquaresState';
import { SizeKey } from './Sizes';

export interface urlParams {
  colors: string[];
  size: SizeKey
}

export const SquaresContext = createContext({
    state: squaresDefaultState,
    handleSquareChose: (index: number) => {},
    handleChangeColorSquare: (color: string | null) => {},
    handleClearSquare: () => {},
    squareSize: 'l' as SizeKey,
    handleChoseSize: (size: SizeKey) => {},
    handleSaveButton: () => {},
    isScarfReady: false,
    currentColor: null as string | null,
    handleShowSavedScarves: () => {}
  });