import { useState, useContext } from 'react'
// import {SquaresContext} from '../data/SquaresContext';
import Clear from '../Clear';
import Pallete from '../Pallete';
import Sizes from '../sizes';
import './styles.css'
import Save from '../save&submit/Save';


function Sandbox() {
  // const context = useContext(SquaresContext);


  return (
      <div className='sandbox'>
        <Pallete />
        <Clear/>
        <Save />
        <Sizes />
      </div> 
  )
}

export default Sandbox
