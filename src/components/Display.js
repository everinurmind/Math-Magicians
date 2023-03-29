import React from 'react';
import PropTypes from 'prop-types';

function Display({ value }) {
  return (
    <div className="display">
      <span>{value}</span>
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
