import { useContext } from 'react'
import {SquaresContext} from '../../data/SquaresContext';
import './Save.css'

function Save() {
    const context = useContext(SquaresContext);
    const {state} = context;
    const isReadyToSave = state.every(square => square.isFilled)
    return (
        <button
            type="button"
            className="buttonSave"
            onClick={context.handleClearSquare}
            disabled={!isReadyToSave}
        >
            Save scarf
        </button>
    )

}

export default Save