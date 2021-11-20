import React, { useState, useRef } from 'react';
import Output from './components/Output';
import { BsImageFill, BsEyeFill, BsPenFill } from 'react-icons/bs';

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showOutput, setShowOutput] = useState(false);
  const [textBg, setTextBg] = useState('');

  const photoUrl = file && URL.createObjectURL(file);
  const fileRef = useRef<HTMLInputElement>(null);

  if (showOutput) return <Output setShowOutput={setShowOutput} file={file} />;

  return (
    <main className='flex mx-auto justify-center mt-8 space-x-4'>
      <div className='p-8 bg-secondary text-gray-200 rounded-lg flex flex-col items-center w-[360px] shadow-lg'>
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
            onClick={() => file && setShowOutput(!showOutput)}
          >
            <p>Show Full</p>
            <BsEyeFill />
          </button>
        </div>

        <textarea
          placeholder='Input text background'
          className='resize-none w-full outline-none mt-3 h-[200px] bg-gray-200 text-black p-4'
        ></textarea>

        <button className='btn primary-bg w-full mt-3'>
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
          !file && 'p-8'
        } bg-secondary rounded-lg w-[600px] h-[600px] grid place-items-center overflow-hidden shadow-lg`}
      >
        {file ? (
          <div className=' w-full h-full flex items-center justify-center bg-black overflow-hidden'>
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
        ) : (
          <p className='text-gray-200'>Choose a File!</p>
        )}
      </div>
    </main>
  );
};

export default App;
