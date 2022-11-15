import s from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import React from 'react';

function loader() {
    return (
      <div className={s.loader}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          display="block"
          margin="0 auto"
          visible={true}
        />
      </div>
    );
}


loader.propTypes = {
  onLoader: PropTypes.func,
};

export default loader;