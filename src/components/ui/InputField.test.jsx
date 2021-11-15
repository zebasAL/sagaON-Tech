import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import InputField from './InputFIeld';

afterEach(cleanup);

describe('handles InputField', () => {
  it('renders InputField and handles on change event', () => {
    const mockEventHandler = jest.fn();
    const props = {
      type: 'text',
      value: 'lorem',
      setValue: mockEventHandler,
    };
      render(<InputField {...props} />);


    const input = screen.getByTestId('input');
    expect(input.value).toBe('lorem')
    fireEvent.change(input, { target: { value: 'lorem ipsum' } });
    expect(mockEventHandler).toHaveBeenCalledTimes(1);
  });
});
