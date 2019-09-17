import React from 'react';
import { render } from '@testing-library/react';

import Controls from '../controls/Controls';
import Display from '../display/Display';

test('shows the controls and display', () => {
    render(<Display/>);
    render(<Controls />);
})