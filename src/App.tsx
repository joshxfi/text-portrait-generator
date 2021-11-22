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
  const [multiplyText, setMultiplyText] = useState(100);

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
    setMultiplyText(100);
    setGrayscale(false);
  };

  if (showFull) return <Output {...outputProps} />;

  return (
    <main className='grid place-items-center h-screen px-2 md:px-4 lg:px-8'>
      <div className='lg:grid md:gap-4 gap-2 w-full 2xl:grid-cols-4 grid-cols-5 flex flex-col mt-2 md:mt-4 lg:mt-0 pb-2 md:pb-4 lg:pb-0'>
        <div className='2xl:col-auto col-span-2 p-8 bg-secondary text-gray-200 rounded-lg flex flex-col items-center space-y-2 lg:mt-0 lg:h-[690px]'>
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
              <p>Fullscreen</p>
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

          <div className='space-x-3 flex w-full lg:flex-col lg:space-x-0 lg:space-y-3'>
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

          <p className='text-sm pt-4'>
            © Josh Daniel 2021 • All Rights Reserved
          </p>
        </div>

        <div
          className={`${
            !file && 'p-8'
          } bg-secondary rounded-lg overflow-hidden shadow-lg 2xl:col-span-3 col-span-3 grid place-items-center h-[500px] lg:h-[690px]`}
        >
          {file ? (
            <Output {...outputProps} />
          ) : (
            <div className='text-gray-200 text-center'>
              <h2 className='text-3xl font-medium'>Text Portrait Generator</h2>

              <button
                onClick={() => fileRef.current?.click()}
                className='text-primary'
              >
                select a file to get started
              </button>
            </div>
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
      </div>
    </main>
  );
};

export default App;
