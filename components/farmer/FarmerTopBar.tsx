import Image from 'next/image';
import React from 'react';

const FarmerTopBar = () => {
  return (
    <div>
      <div>TopBar</div>
      <div>
      <div className='ml-auto cursor-pointer'>
        <Image
          src="/assets/blank-profile.jpg"
          width={56}
          height={56}
          alt='blank profile'
        />
      </div>
      </div>
    </div>
  );
}

export default FarmerTopBar;
