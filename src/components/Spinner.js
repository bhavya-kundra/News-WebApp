import React from 'react';
import loading from './loading.svg'

const Spinner = () => {

  return <div className='text-center'>
      <img className='my-3' src={loading} alt="loading" srcSet="" />
  </div>;

}

export default Spinner;
