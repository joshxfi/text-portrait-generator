import React, { useState, useRef } from 'react';
import { Output, Option } from './components';
import { MdFilter, MdRestartAlt } from 'react-icons/md';
import { BsImageFill, BsEyeFill, BsStarFill } from 'react-icons/bs';

export interface OutputProps {
  file: File | null;
  textBg: string;
  fontSize: number;
  lineHeight: number;
  grayscale: boolean;
  multiplyText: number;
  showFull: boolean;
}

const App: React.FC = () => {
  const [textBg, setTextBg] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(10);
  const [multiplyText, setMultiplyText] = useState(1);

  const [showFull, setShowFull] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const fileRef = useRef<HTMLInputElement>(null);

  const outputProps: OutputProps = {
    file,
    textBg,
    fontSize,
    lineHeight,
    grayscale,
    multiplyText,
    showFull,
  };

  const resetOptions = () => {
    setTextBg('');
    setFontSize(16);
    setLineHeight(10);
    setMultiplyText(1);
    setGrayscale(false);
  };

  if (showFull) return <Output {...outputProps} />;

  return (
    <main className='flex mx-auto items-center lg:justify-center mt-3 lg:mt-8 lg:space-x-4 space-y-4 lg:space-y-0 flex-col lg:flex-row lg:h-[690px]'>
      <div className='p-8 bg-secondary text-gray-200 rounded-lg flex flex-col items-center w-[95%] h-full lg:w-[360px] space-y-2'>
        <a
          className='btn bg-green-600  hover:bg-green-600/90 hover:shadow-lg'
          href='https://github.com/joshxfi/text-portrait-generator'
          target='_blank'
          rel='noreferrer noopener'
        >
          <p>Star on GitHub</p>
          <BsStarFill />
        </a>

        <div className='flex justify-between w-full space-x-2'>
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
          spellCheck={false}
          value={textBg}
          onChange={e => setTextBg(e.target.value)}
          placeholder='Input text background'
          className='text-black resize-none w-full outline none p-4 h-[250px] outline-none rounded-lg'
        />

        <Option
          setOption={setFontSize}
          displayValue={`Font Size: ${fontSize}px`}
        />
        <Option
          setOption={setLineHeight}
          displayValue={`Spacing: ${lineHeight}px`}
        />
        <Option
          setOption={setMultiplyText}
          displayValue={`Multiply Text: ${multiplyText}x`}
        />

        <div className='space-x-3 flex w-full pt-4 lg:flex-col lg:space-x-0 lg:space-y-3'>
          <button
            onClick={() => setGrayscale(!grayscale)}
            className={`${
              grayscale
                ? 'bg-green-600 hover:bg-green-600/90'
                : 'bg-gray-500 hover:bg-gray-500/90'
            } btn hover:shadow-lg`}
          >
            <p>Grayscale</p>
            <MdFilter />
          </button>

          <button onClick={resetOptions} className='btn primary-bg'>
            <p>Reset Options</p>
            <MdRestartAlt />
          </button>
        </div>
      </div>

      <div
        className={`${
          !file && 'p-8'
        } bg-secondary rounded-lg w-[95%] lg:w-[690px] h-[500px] lg:h-[690px] grid place-items-center overflow-hidden shadow-lg`}
      >
        {file ? (
          <Output {...outputProps} />
        ) : (
          <p className='text-gray-200 text-2xl'>Text Portrait Generator</p>
        )}
      </div>

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
    </main>
  );
};

export default App;
