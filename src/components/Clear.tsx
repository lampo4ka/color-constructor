import { useContext } from 'react'
import {SquaresContext} from '../data/SquaresContext';
import './Clear.css'

function Clear() {
    const context = useContext(SquaresContext);
    const { handleClearSquare } = context

    return (
        <button
            className="button"
            onClick={handleClearSquare}
        >
            Clear whole square
        </button>
    )

}

export default Clear