import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../components/button';

describe('Button', () => {
    it('renders correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('handles click events', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders with default variant', () => {
        render(<Button>Default</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-white');
    });

    it('renders with primary variant', () => {
        render(<Button variant="primary">Primary</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-[#FF6B6B]');
    });

    it('renders with secondary variant', () => {
        render(<Button variant="secondary">Secondary</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-[#4ECDC4]');
    });

    it('renders with accent variant', () => {
        render(<Button variant="accent">Accent</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-[#FFE66D]');
    });

    it('renders with different sizes', () => {
        const { rerender } = render(<Button size="sm">Small</Button>);
        expect(screen.getByRole('button')).toHaveClass('h-9');

        rerender(<Button size="lg">Large</Button>);
        expect(screen.getByRole('button')).toHaveClass('h-13');

        rerender(<Button size="xl">Extra Large</Button>);
        expect(screen.getByRole('button')).toHaveClass('h-16');
    });

    it('renders as disabled', () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('renders with custom className', () => {
        render(<Button className="custom-class">Custom</Button>);
        expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('renders as child component with asChild prop', () => {
        render(
            <Button asChild>
                <a href="/test">Link Button</a>
            </Button>
        );
        expect(screen.getByRole('link')).toHaveTextContent('Link Button');
    });
});
