import { useContext } from 'react'
import {SquaresContext} from '../../data/SquaresContext';
import './Save.css'

function Save() {
    const context = useContext(SquaresContext);
    const { state, handleSaveButton, squareSize } = context;
    const isReadyToSave = state.every(square => square.isReadyToSave);

    // const colors = state.map(square => square.backgroundColor);

    // const urlParams = {
    //     colors,
    //     size: squareSize
    // };

    return (
        <button
            type="button"
            className="buttonSave"
            onClick={handleSaveButton}
            disabled={!isReadyToSave}
        >
            Save scarf
        </button>
    )

}

export default Save