import { useContext } from 'react'
import {SquaresContext} from '../data/SquaresContext';
import './Clear.css'

function Clear() {
    const context = useContext(SquaresContext);
    return (
        <button
            className="button"
            onClick={context.handleClearSquare}
        >
            Clear whole square
        </button>
    )

}

export default Clear