import React, { useState } from 'react'
import { deleteTask,editTask } from '../redux/reducer/todo';
import { useDispatch } from 'react-redux';


const Card = ({taskName,id}) => {
    const [show,setShow] = useState(false);
    const [input,setInput] = useState(taskName);
    const dispatch = useDispatch();
    const deleteItem = ()=>{
        dispatch(deleteTask({id}))
    }
    const submit = (e) =>{
        e.preventDefault();
        dispatch(editTask({taskName:input,id}))
        setShow(false)
    }
  return (
    <div className='m-5 border bg-slate-400 rounded-md p-5 flex items-center justify-center flex-col gap-3 '>
        {show ? <form className='border p-4 bg-cyan-300' onSubmit={submit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='type here' />
        </form> : <h2 className='text-3xl'>{taskName}</h2>}
        

      {!show && <>
        <div className='flex '>
        <button className='bg-red-500 mr-4   px-4 py-3 text-white rounded-lg' onClick={deleteItem}>delete</button>
        <button className='bg-blue-500 px-4  py-3  text-white rounded-lg' onClick={() => setShow(true)}>edit</button>
        </div>
      </>}
    </div>
  )
}

export default Card
