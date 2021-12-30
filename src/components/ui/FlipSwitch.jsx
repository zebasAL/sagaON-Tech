import React from 'react';
import PropTypes from 'prop-types';

const FlipSwitch = ({
  challenge,
  setChallenge,
  label
}) => {
const handleChallenge = () => {
  switch (challenge.number) {
    case 1:
      setChallenge({ marginLeft: '60px', number: 2 })
      break;
    case 2:
      setChallenge({ marginLeft: '120px', number: 3 })
      break;
    case 3:
      setChallenge({ marginLeft: '0px', number: 1 })
      break;
    default:
      setChallenge({ marginLeft: '0px', number: 1 })
      break;
  }
};

  return (
    <>
      <button className="flip-switch" onClick={handleChallenge}>
          <div className="flip-switch-container">
            <div data-testid="switch" style={{ width: challenge.marginLeft  }} className="flip-switch-container flip-switch-progress">
              <div style={challenge} type="button" className="flip-button">
                <p className="button-label">{challenge.number}</p>
              </div>
            </div>
          </div>
          <p className="label">{label}</p>
      </button>
    </>
  );
};

FlipSwitch.propTypes = {
  challenge: PropTypes.shape({
    marginLeft: PropTypes.string,
    number: PropTypes.number,
  }).isRequired,
  setChallenge: PropTypes.func.isRequired,
  label: PropTypes.string,
};

FlipSwitch.defaultProps = {
  label: '',
}

export default FlipSwitch;
