import { useState, useEffect } from 'react'
import './Clear.css'

function Clear({onClick}:{onClick: () => void}) {
    return (
        <button
            className="button"
            onClick={onClick}
        >
            Clear whole square
        </button>
    )

}

export default Clear