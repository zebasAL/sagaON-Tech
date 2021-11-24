import React from 'react';
import PropTypes from 'prop-types';

const InputFIeld = ({
  value,
  setValue,
  type
}) => (
  <>
     <input
        data-testid="input"
        className="input-field"
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
  </>
);

InputFIeld.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  type: PropTypes.string.isRequired,
};

InputFIeld.defaultProps = {
  setValue: () => {},
};

export default InputFIeld;
