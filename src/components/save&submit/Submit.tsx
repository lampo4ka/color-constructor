import { useContext } from 'react'
import {SquaresContext} from '../../data/SquaresContext';
import './Save.css'

function Submit() {
    const context = useContext(SquaresContext);
    const { state, handleSaveButton } = context;
    return (
        <button
            type="button"
            className="buttonSave"
            onClick={handleSaveButton}
        >
            Submit scarf
        </button>
    )

}

export default Submit