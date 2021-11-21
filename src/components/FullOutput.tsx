import React, { useMemo } from 'react';

interface OutputProps {
  file: File | null;
}

const Output: React.FC<OutputProps> = ({ file }) => {
  const photoUrl = useMemo(() => file && URL.createObjectURL(file), [file]);

  return (
    <div className='h-screen flex items-center justify-center bg-black overflow-hidden'>
      <p
        style={{ backgroundImage: `url(${photoUrl})` }}
        className='leading-[10px] text-justify bg-clip-text bg-fixed bg-cover bg-no-repeat bg-center'
      >
        {Array(100)
          .fill(0)
          .map(
            () =>
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
          )}
      </p>
    </div>
  );
};

export default Output;
