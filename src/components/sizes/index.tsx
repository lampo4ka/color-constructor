import { useContext } from 'react'
import {SquaresContext} from '../../data/SquaresContext';
import { SizeKey, sizes } from '../../data/Sizes';
import './styles.css'

function Sizes() {
    const context = useContext(SquaresContext);

    const sizesButtons = Object.keys(sizes).map((size) => (
        <button
            className="size"
            onClick={() => context.handleChoseSize(size)}
        >
            {size}
        </button>
    ));


    return (
        <div className='sizeWrapper'>
            <h2>Choose size</h2>
            {sizesButtons}
        </div>
    )
        
    

}

export default Sizes