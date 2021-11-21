import React from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

interface OptionProps {
  setOption: React.Dispatch<React.SetStateAction<number>>;
  displayValue: string;
}

const Option: React.FC<OptionProps> = ({ setOption, displayValue }) => {
  return (
    <div className='grid grid-cols-6 w-full gap-2'>
      <button
        onClick={() => setOption(op => op - 1)}
        className='btn border border-red-500'
      >
        <MdArrowDropDown className='text-2xl' />
      </button>

      <p className='col-span-4 btn'>{displayValue}</p>

      <button
        onClick={() => setOption(op => op + 1)}
        className='btn border border-green-500'
      >
        <MdArrowDropUp className='text-2xl' />
      </button>
    </div>
  );
};

export default Option;
