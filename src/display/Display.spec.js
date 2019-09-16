import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe('describe proper colors', () => {
    it('displayed and green', () => {
        const display = render(<Display closed={false} locked={false} />)
        display.getByText('open')
        display.getByText('Unlocked')

        expect(display.getByText('open').className).toContain('green-led')
        expect(display.getByText('Unlocked').className).toContain('green-led')
    })
    it('have a green unlock and a red closed', () => {
        const display = render(<Display closed={true} locked={false}/>)

        display.etByText('closed')
        display.getByText('Unlocked')

        expect(display.getByText('closed').className).toContain('red-led')
        expect(display.getByText('Unlocked').className).toContain('green-led')

    })
})


