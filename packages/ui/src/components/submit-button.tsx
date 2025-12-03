'use client';

import { useFormStatus } from 'react-dom';
import { Button, type ButtonProps } from './button';

export interface SubmitButtonProps extends ButtonProps {
    pendingText?: string;
}

/**
 * A button that automatically shows loading state when inside a form
 * that is being submitted via Server Actions (React 19 feature)
 */
function SubmitButton({ children, pendingText, disabled, ...props }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={disabled || pending} loading={pending} {...props}>
            {pending && pendingText ? pendingText : children}
        </Button>
    );
}

SubmitButton.displayName = 'SubmitButton';

export { SubmitButton };
