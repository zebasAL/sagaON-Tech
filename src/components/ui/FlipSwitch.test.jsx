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
      isOn: true,
      setisOn: mockEventHandler,
    }
  
    render(  <FlipSwitch {...props} />);
    const button = screen.getByTestId('flip-switch');
    fireEvent.click(button);
    expect(button.classList.contains('off')).toBe(false);
  });
});
