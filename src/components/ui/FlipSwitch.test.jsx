import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import FlipSwitch from './FlipSwitch';

afterEach(cleanup);


describe('handles switch', () => {
  it('renders switchflip', () => {
    const mockEventHandler = jest.fn();
    const props = {
      challenge: { marginLeft: '0px', number: 1 },
      label: 'lorem',
      setChallenge: mockEventHandler,
    }
  
    render(  <FlipSwitch {...props} />);
    const button = screen.getByTestId('switch');
    fireEvent.click(button);
    expect(getComputedStyle(button).marginLeft).not.toBe(props.challenge.marginLeft);
  });
});
