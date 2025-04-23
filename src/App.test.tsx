import React from 'react';
import {
    render,
    fireEvent,
    screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';

const Balance = ({ balance }: { balance: string }) => (
    <div>
        <span id="total">Total: </span>
        <span aria-labelledby="total">{balance}</span>
    </div>
);

test('renders a message', () => {
    const { asFragment, getByText, getByLabelText } = render(<Balance balance='$100.00' />)
    expect(screen.getByLabelText(/Total/)).toHaveTextContent('$100.00');
    expect(getByLabelText(/Total/)).toHaveTextContent('$100.00');
})
