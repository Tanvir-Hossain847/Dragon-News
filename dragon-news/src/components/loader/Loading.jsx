import React from 'react';
import { LineWave } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
             <LineWave
  visible={true}
  height="150"
  width="150"
  color="#00000"
  ariaLabel="line-wave-loading"
  wrapperStyle={{}}
  wrapperClass=""
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
  />
        </div>
    );
};

export default Loading;