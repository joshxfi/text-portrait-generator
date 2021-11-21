import React, { useMemo } from 'react';
import { OutputProps } from '../App';

const Output: React.FC<OutputProps> = ({
  file,
  textBg,
  fontSize,
  lineHeight,
  grayscale,
  multiplyText,
  showFull,
}) => {
  const photoUrl = useMemo(() => file && URL.createObjectURL(file), [file]);

  return (
    <div className='w-full h-full flex items-center justify-center bg-black overflow-hidden shadow-lg'>
      {!textBg && (
        <div className='text-gray-200'>
          <p>Start Typing...</p>
        </div>
      )}
      <p
        style={{
          backgroundImage: `url(${photoUrl})`,
          fontSize,
          lineHeight: `${lineHeight}px`,
          WebkitTextFillColor: 'transparent',
        }}
        className={`${
          grayscale && 'grayscale'
        } leading-[10px] bg-clip-text bg-fixed bg-cover bg-no-repeat bg-center`}
      >
        {Array(showFull ? 100 : multiplyText)
          .fill(0)
          .map(() => textBg)}
      </p>
    </div>
  );
};

export default Output;
