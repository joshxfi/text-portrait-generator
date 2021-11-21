import React, { useState, useRef } from 'react';
import Output from './components/Output';
import { BsImageFill, BsEyeFill, BsPenFill, BsStar } from 'react-icons/bs';

const App: React.FC = () => {
  const [textBg, setTextBg] = useState('');
  const [showFull, setShowFull] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isGenerated, setIsGenerated] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);

  if (showFull) return <Output textBg={textBg} file={file} />;

  const canGenerate = file && !isGenerated;

  return (
    <main className='flex mx-auto justify-center mt-8 space-x-4'>
      <div className='p-8 bg-secondary text-gray-200 rounded-lg flex flex-col items-center w-[360px] space-y-3'>
        <a
          className='btn bg-green-600 w-full hover:bg-green-600/90 hover:shadow-lg'
          href='https://github.com/joshxfi/text-portrait-generator'
          target='_blank'
          rel='noreferrer noopener'
        >
          <p>Star on GitHub</p>
          <BsStar />
        </a>

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
          className='text-black resize-none w-full outline none p-4 h-[250px] outline-none rounded-lg'
        />

        <button
          onClick={() => canGenerate && setIsGenerated(true)}
          className={`${
            !canGenerate ? 'bg-gray-500 cursor-not-allowed' : 'primary-bg'
          } btn w-full`}
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
        } bg-secondary rounded-lg w-[650px] h-[650px] grid place-items-center overflow-hidden`}
      >
        {isGenerated ? (
          <Output textBg={textBg} file={file} />
        ) : (
          <p className='text-gray-200 text-2xl'>Text Portrait Generator</p>
        )}
      </div>
    </main>
  );
};

export default App;
