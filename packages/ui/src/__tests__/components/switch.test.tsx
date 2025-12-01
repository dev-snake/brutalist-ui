import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from '../../components/switch';

describe('Switch', () => {
    it('renders correctly', () => {
        render(<Switch aria-label="test switch" />);
        expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('handles toggle', () => {
        const onCheckedChange = vi.fn();
        render(<Switch aria-label="test switch" onCheckedChange={onCheckedChange} />);

        const switchEl = screen.getByRole('switch');
        fireEvent.click(switchEl);

        expect(onCheckedChange).toHaveBeenCalledWith(true);
    });

    it('renders as checked', () => {
        render(<Switch aria-label="test switch" checked />);
        expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'checked');
    });

    it('renders as unchecked', () => {
        render(<Switch aria-label="test switch" checked={false} />);
        expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'unchecked');
    });

    it('renders as disabled', () => {
        render(<Switch aria-label="test switch" disabled />);
        expect(screen.getByRole('switch')).toBeDisabled();
    });

    it('applies custom className', () => {
        render(<Switch aria-label="test switch" className="custom-switch" />);
        expect(screen.getByRole('switch')).toHaveClass('custom-switch');
    });

    it('has neo-brutalism styles', () => {
        render(<Switch aria-label="test switch" />);
        const switchEl = screen.getByRole('switch');
        expect(switchEl).toHaveClass('border-3');
        expect(switchEl).toHaveClass('border-black');
    });
});
