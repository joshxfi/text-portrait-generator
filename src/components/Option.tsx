import React from 'react';

interface OptionProps {
  setOption: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  label: string;
}

const Option: React.FC<OptionProps> = ({ setOption, value, label }) => {
  return (
    <div className='w-full text-sm space-y-2'>
      <p>
        {label}: {value}
      </p>

      <input
        className='w-full'
        onChange={e => setOption(Number(e.target.value))}
        type='range'
        value={value}
        min={1}
        max={100}
      />
    </div>
  );
};

export default Option;
