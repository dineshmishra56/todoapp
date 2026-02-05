import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

export const TodoInput = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch();
    console.log(input);

    const handleSubmit = () => {
        dispatch(addTodo(input));
    };

  return (
    <div className='flex gap-2'>
        <input type='text' className='bg-gray-200 p-2 rounded-lg w-[300px]' 
        placeholder='Add tasks...' 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button onClick={handleSubmit} className='bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer'>Add</button>
    </div>
  )
}
