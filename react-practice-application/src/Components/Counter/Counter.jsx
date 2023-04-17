import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { incrementTheNumber, decrementTheNumber } from '../../actions/index';
import "./styles.css"



function Counter() {
    const value = useSelector( (state) => state.upDown );
    const dispatch = useDispatch()

    return (
        <div className='container'> 
            <div className='container__texts'>
                <h1 className='container__heading'>Incrementer and Decrementer</h1>
            </div>
            <div className='container__main'>
                <button className='container__button' onClick={() => dispatch(decrementTheNumber())} > - </button>
                <input className='container__text' type="text" value= {value} />
                <button className='container__button' onClick={() => dispatch(incrementTheNumber())}> + </button>
            </div>
        </div>
    )
}

export default Counter ;