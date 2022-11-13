import s from './Batton.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export default function LoadMore({ onLoadMore }) {
  return (
    <div className="wrapper">
      <button className={s.button} type="button" onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
}

LoadMore.propTypes = {
  onLoadMore: PropTypes.func,
};