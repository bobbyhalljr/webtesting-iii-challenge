import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';
import { toggleLocked, toggleClosed } from './Controls';
import { fireEvent } from 'react-testing-library';

test('buttons toggle closed and locked',  () => {
    const toggleLocked = jest.fn();
    const toggleClosed = jest.fn();

    const { getByText } = render(<Controls toggleLocked={toggleLocked} toggleClosed={toggleClosed} />)

})