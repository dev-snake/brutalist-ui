import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '../../components/checkbox';

describe('Checkbox', () => {
    it('renders correctly', () => {
        render(<Checkbox aria-label="test checkbox" />);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('handles check/uncheck', () => {
        const onCheckedChange = vi.fn();
        render(<Checkbox aria-label="test checkbox" onCheckedChange={onCheckedChange} />);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(onCheckedChange).toHaveBeenCalledWith(true);
    });

    it('renders as checked', () => {
        render(<Checkbox aria-label="test checkbox" checked />);
        expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'checked');
    });

    it('renders as unchecked', () => {
        render(<Checkbox aria-label="test checkbox" checked={false} />);
        expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'unchecked');
    });

    it('renders as disabled', () => {
        render(<Checkbox aria-label="test checkbox" disabled />);
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('applies custom className', () => {
        render(<Checkbox aria-label="test checkbox" className="custom-checkbox" />);
        expect(screen.getByRole('checkbox')).toHaveClass('custom-checkbox');
    });

    it('has neo-brutalism styles', () => {
        render(<Checkbox aria-label="test checkbox" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveClass('border-3');
        expect(checkbox).toHaveClass('border-black');
    });
});
