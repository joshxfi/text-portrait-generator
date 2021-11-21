import React, { useMemo } from 'react';

interface OutputProps {
  file: File | null;
  textBg: string;
}

const Output: React.FC<OutputProps> = ({ file, textBg }) => {
  const photoUrl = useMemo(() => file && URL.createObjectURL(file), [file]);

  return (
    <div className='w-full h-full flex items-center justify-center bg-black overflow-hidden'>
      <p
        style={{ backgroundImage: `url(${photoUrl})` }}
        className='leading-[10px] bg-clip-text bg-fixed bg-cover bg-no-repeat bg-center'
      >
        {Array(100)
          .fill(0)
          .map(() =>
            textBg
              ? textBg
              : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
          )}
      </p>
    </div>
  );
};

export default Output;
