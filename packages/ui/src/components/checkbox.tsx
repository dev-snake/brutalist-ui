import * as React from 'react';
import { cn } from '../lib/utils';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, onCheckedChange, checked, defaultChecked, ...props }, ref) => {
        const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
        const actualChecked = checked !== undefined ? checked : isChecked;

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newChecked = event.target.checked;
            if (checked === undefined) {
                setIsChecked(newChecked);
            }
            onCheckedChange?.(newChecked);
        };

        return (
            <label
                className={cn(
                    'relative inline-flex cursor-pointer items-center',
                    props.disabled && 'cursor-not-allowed opacity-50',
                    className
                )}
            >
                <input
                    type="checkbox"
                    ref={ref}
                    checked={actualChecked}
                    onChange={handleChange}
                    className="sr-only peer"
                    {...props}
                />
                <div
                    className={cn(
                        'h-6 w-6 flex items-center justify-center',
                        'border-3 border-black dark:border-white bg-white dark:bg-gray-900',
                        'transition-all duration-150',
                        'peer-checked:bg-[#7FB069]',
                        'peer-focus:ring-2 peer-focus:ring-black dark:peer-focus:ring-white peer-focus:ring-offset-2',
                        'peer-checked:shadow-[2px_2px_0px_0px_#000000] dark:peer-checked:shadow-[2px_2px_0px_0px_#FFFFFF]'
                    )}
                >
                    {actualChecked && (
                        <svg
                            className="h-4 w-4 stroke-[3] text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="square"
                                strokeLinejoin="miter"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    )}
                </div>
            </label>
        );
    }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
