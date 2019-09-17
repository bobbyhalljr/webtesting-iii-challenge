import React from 'react';
import { render, className } from '@testing-library/react';

import Display from './Display';

test('if gate is open/closed or locked/unlocked', () => {
    const { queryByText } = render(<Display />)

    const locked = queryByText('locked')
    const closed = queryByText('closed')
})


