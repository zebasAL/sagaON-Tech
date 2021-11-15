import React from 'react';
import PropTypes from 'prop-types';

const FlipSwitch = ({
  isOn,
  setisOn,
  label
}) => (
  <>
    <div className="flip-switch">
      <p className="label">{label}</p>
      {isOn
        ? (
          <>
            <button type="button" data-testid="flip-switch" className="switch-background on" onClick={() => setisOn(!isOn)}>
              <div className="switch-on"><p>1</p></div>
            </button>
          </>
        )
        : (
          <>
            <button type="button" className="switch-background off" onClick={() => setisOn(!isOn)}>
              <div className="switch-off"><p>2</p></div>
            </button>
          </>
        )}
    </div>
  </>
);

FlipSwitch.propTypes = {
  label: PropTypes.string,
  isOn: PropTypes.bool,
  setisOn: PropTypes.func.isRequired,
};

FlipSwitch.defaultProps = {
  isOn: true,
  label: '',
};

export default FlipSwitch;
