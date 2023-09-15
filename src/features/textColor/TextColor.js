import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from './textColorSlice';
import { useState } from 'react';

export default function TextColor() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const color = useSelector((state) => state.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeColor(input));
    setInput('');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md'>
        <h1 className='text-2xl font-bold mb-4' style={{ color: color }}>
          Hello World!
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={input}
            type='text'
            placeholder='Enter text color...'
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded'
            type='submit'
          >
            Change text color
          </button>
        </form>
      </div>
    </div>
  );
}
