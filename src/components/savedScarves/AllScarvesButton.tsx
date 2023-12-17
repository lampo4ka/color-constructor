import { useContext } from 'react'
import {SquaresContext} from '../../data/SquaresContext';
import Square from '../../components/square';
import './AllScarvesButton.css'

function AllScarvesButton() {
    const context = useContext(SquaresContext);
    const { handleShowSavedScarves, isScarfReady } = context;
    const square = (
        <Square
            size='squareXS'
            style='squareWrapper'
        />
    )

    const buttonContent = isScarfReady
    ? square
    : 0

    return (
        <button
            type="button"
            className="allScarvesButton"
            onClick={handleShowSavedScarves}
            disabled={!isScarfReady}
        >
            {buttonContent}
            <span className="tooltiptext">Сохраненные шарфы</span>
        </button>
    )

}

export default AllScarvesButton