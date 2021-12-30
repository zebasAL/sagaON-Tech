import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  value,
  setValue,
  handleClick,
  placeholder,
  id,
  type,
  required,
  disabled,
}) => {

  return (
    <div className="todo-field">
      <input
        data-testid="input"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && value) {
            handleClick();
          }
        }}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

InputField.propTypes = {
  id:  PropTypes.string.isRequired,
  value:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  handleClick: () => {},
  setValue: () => {},
  placeholder: '',
  type: 'text',
  required: false,
  value: '',
  disabled: false,
};

export default InputField;
