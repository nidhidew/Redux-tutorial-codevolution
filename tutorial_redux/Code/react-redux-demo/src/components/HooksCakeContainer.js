import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h3>Num of cakes - {numOfCakes}</h3>
        <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
    </div>
  )
}

export default HooksCakeContainer