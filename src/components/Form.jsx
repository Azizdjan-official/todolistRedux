import React, { useState } from 'react'
import { add } from '../redux/reducer/todo'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

const Form = () => {
    const [input,setInput] = useState("")
    const dispatch = useDispatch();
    const submit = (e) =>{
        e.preventDefault();
        dispatch(add({taskName: input, id:nanoid()}));
        setInput("");
    }
  return (
    <form className='mt-12 flex items-center justify-center'  onSubmit={submit}>
        <input className='bg-slate-50 rounded-md w-[60%] py-2 outline-none px-3' value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Type here...' />
        <button className='bg-cyan-400 px-4 py-2 rounded-md text-white font-bold' type='submit'>Submit</button>
    </form>
  )
}

export default Form
