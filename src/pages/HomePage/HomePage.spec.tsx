import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './';

describe('HomePage', () => {
    test('renders input form', () => {
        render(<HomePage />);
        const inputForm = screen.getByRole('textbox');
        expect(inputForm).toBeInTheDocument();
    });

    test('renders QR code', () => {
        render(<HomePage />);
        const qrCode = screen.getByRole('img');
        expect(qrCode).toBeInTheDocument();
    });
});
