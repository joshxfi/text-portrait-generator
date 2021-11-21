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
      <p
        style={{
          backgroundImage: `url(${photoUrl})`,
          fontSize,
          lineHeight: `${lineHeight}px`,
          WebkitTextFillColor: 'transparent',
        }}
        className={`${
          grayscale && 'grayscale'
        } leading-[10px] bg-clip-text bg-fixed bg-cover bg-no-repeat bg-center text-justify md:text-left`}
      >
        {Array(showFull ? 100 : multiplyText)
          .fill(0)
          .map(
            () =>
              textBg ||
              'Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye'
          )}
      </p>
    </div>
  );
};

export default Output;
