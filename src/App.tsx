import React, { useState, useRef } from 'react';
import Output from './components/Output';
import { BsImageFill, BsEyeFill, BsPenFill } from 'react-icons/bs';

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showFull, setShowFull] = useState(false);
  const [textBg, setTextBg] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);

  if (showFull) return <Output file={file} />;
 
  return (
    <main className='flex mx-auto justify-center mt-8 space-x-4'>
      <div className='p-8 bg-secondary text-gray-200 rounded-lg flex flex-col items-center w-[360px]'>
        <div className='flex justify-between w-full'>
          <button
            onClick={() => fileRef.current?.click()}
            className='btn primary-bg'
          >
            <p>Choose File</p>
            <BsImageFill />
          </button>

          <button
            className={`${
              !file ? 'bg-gray-500 cursor-not-allowed' : 'primary-bg'
            } btn`}
            onClick={() => file && setShowFull(true)}
          >
            <p>Show Full</p>
            <BsEyeFill />
          </button>
        </div>

        <textarea
          value={textBg}
          onChange={e => setTextBg(e.target.value)}
          placeholder='Input text background'
          className='text-black mt-3 resize-none w-full outline none p-4 h-[250px] outline-none'
        ></textarea>

        <button
          onClick={() => setIsGenerated(true)}
          className={`${
            !file ? 'bg-gray-500 cursor-not-allowed' : 'primary-bg'
          } btn w-full mt-3`}
        >
          <p>Generate</p>
          <BsPenFill />
        </button>

        <input
          ref={fileRef}
          className='hidden'
          type='file'
          onChange={e => {
            const file = e.target.files;
            if (file) setFile(file[0]);
          }}
          accept='image/png, image/gif, image/jpeg'
        />
      </div>

      <div
        className={`${
          !isGenerated && 'p-8'
        } bg-secondary rounded-lg w-[600px] h-[600px] grid place-items-center overflow-hidden`}
      >
        {isGenerated ? (
          <Output file={file} />
        ) : (
          <p className='text-gray-200 text-2xl'>Text Portrait Generator</p>
        )}
      </div>
    </main>
  );
};

export default App;
