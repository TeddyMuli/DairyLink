import React from 'react';
import { SquareChevronLeft } from 'lucide-react';

const MessageComponent = ({ message, setShowPreview } : { message: any, setShowPreview: any }) => {
  return (
    <div>
      <button type="button" onClick={() => setShowPreview(true)}>
        <SquareChevronLeft />
      </button>
      <div>
        <div className='flex w-full justify-between'>
          <p className='font-semibold text-lg text-black'><span className='text-customDarkGrey font-medium'>From:</span> {message?.from}</p>
          <p className='font-semibold text-lg text-black'><span className='text-customDarkGrey font-medium'>Time:</span> {message?.time}</p>
        </div>
        <p className='font-semibold text-lg text-black'><span className='text-customDarkGrey font-medium'>Subject:</span> {message?.header}</p>
        {/** Body  */}
        <div className='border border-black p-3 my-4 rounded-xl'>
          <p className='text-lg font-medium'>{message?.body}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
