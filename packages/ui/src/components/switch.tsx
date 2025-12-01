import * as React from 'react';
import { cn } from '../lib/utils';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
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
                        'h-7 w-12 p-0.5',
                        'border-3 border-black bg-white',
                        'transition-colors duration-150',
                        'peer-checked:bg-[#7FB069]',
                        'peer-focus:ring-2 peer-focus:ring-black peer-focus:ring-offset-2'
                    )}
                >
                    <div
                        className={cn(
                            'h-full aspect-square',
                            'bg-black',
                            'transition-transform duration-150',
                            actualChecked ? 'translate-x-5' : 'translate-x-0'
                        )}
                    />
                </div>
            </label>
        );
    }
);
Switch.displayName = 'Switch';

export { Switch };
