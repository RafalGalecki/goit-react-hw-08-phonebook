import React from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <Circles
      height="45vh"
      width="45vw"
      color="magenta"
      ariaLabel="circles-loading"
      wrapperClass={css.spinner}
      visible={true}
    />
  );
};

export default Loader;
