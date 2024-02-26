import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'



const Cardcontainer = () => {
    const {task} = useSelector((state)=> state.todo)
  return (
    <div>
      {task.map((item)=> <Card key={nanoid()} {...item}/>)}
    </div>
  )
}

export default Cardcontainer
