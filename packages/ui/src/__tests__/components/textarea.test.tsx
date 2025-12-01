import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea } from '../../components/textarea';

describe('Textarea', () => {
    it('renders correctly', () => {
        render(<Textarea placeholder="Enter text" />);
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('handles value changes', () => {
        const handleChange = vi.fn();
        render(<Textarea onChange={handleChange} />);

        const textarea = screen.getByRole('textbox');
        fireEvent.change(textarea, { target: { value: 'test content' } });

        expect(handleChange).toHaveBeenCalled();
    });

    it('renders with neo-brutalism styles', () => {
        render(<Textarea data-testid="textarea" />);
        const textarea = screen.getByTestId('textarea');
        expect(textarea).toHaveClass('border-3');
        expect(textarea).toHaveClass('border-black');
    });

    it('renders as disabled', () => {
        render(<Textarea disabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('applies custom className', () => {
        render(<Textarea className="custom-textarea" data-testid="textarea" />);
        expect(screen.getByTestId('textarea')).toHaveClass('custom-textarea');
    });

    it('forwards ref correctly', () => {
        const ref = vi.fn();
        render(<Textarea ref={ref} />);
        expect(ref).toHaveBeenCalled();
    });

    it('supports rows attribute', () => {
        render(<Textarea rows={5} data-testid="textarea" />);
        expect(screen.getByTestId('textarea')).toHaveAttribute('rows', '5');
    });
});
