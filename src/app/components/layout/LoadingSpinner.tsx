import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = ({ size = 50 }) => (
  <div className="flex h-full w-full flex-1 flex-grow items-center justify-center">
    <ClipLoader size={size} color={'#FFFFFF99'} />
  </div>
);

export default LoadingSpinner;
