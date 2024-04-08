'use client'
import React from 'react'
import { useState } from 'react'
import Button from './ui/Button'

const Counter = () => {
    const [counter, setCounter]= useState(1)

    const increase =()=>{
        setCounter(counter+1)
    }
    const decrease =()=>{
        setCounter(counter-1)
    }
  return (
    <div className='flex justify-center items-center gap-3'>
        <Button onClick={decrease}>-</Button>
        <p>{counter}</p>
        <Button onClick={increase}>+</Button>
    </div>
  )
}

export default Counter