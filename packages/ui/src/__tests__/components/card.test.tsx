import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '../../components/card';

describe('Card', () => {
    it('renders Card correctly', () => {
        render(<Card data-testid="card">Card Content</Card>);
        expect(screen.getByTestId('card')).toHaveTextContent('Card Content');
    });

    it('renders with neo-brutalism styles', () => {
        render(<Card data-testid="card">Card</Card>);
        const card = screen.getByTestId('card');
        expect(card).toHaveClass('border-3');
        expect(card).toHaveClass('border-black');
    });

    it('renders full card structure', () => {
        render(
            <Card>
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardDescription>Description</CardDescription>
                </CardHeader>
                <CardContent>Content</CardContent>
                <CardFooter>Footer</CardFooter>
            </Card>
        );

        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });

    it('applies custom className to Card', () => {
        render(
            <Card data-testid="card" className="custom-card">
                Content
            </Card>
        );
        expect(screen.getByTestId('card')).toHaveClass('custom-card');
    });

    it('renders CardTitle with correct styles', () => {
        render(<CardTitle data-testid="title">Title</CardTitle>);
        const title = screen.getByTestId('title');
        expect(title).toHaveClass('font-black');
        expect(title).toHaveClass('text-2xl');
    });

    it('renders CardDescription with correct styles', () => {
        render(<CardDescription data-testid="desc">Description</CardDescription>);
        const desc = screen.getByTestId('desc');
        expect(desc).toHaveClass('text-gray-600');
    });
});
