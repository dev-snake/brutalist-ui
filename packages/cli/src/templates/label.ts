export const labelTemplate = (utilsAlias: string) => `"use client";

import * as React from "react";
import { cn } from "${utilsAlias}";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
    <label
        ref={ref}
        className={cn("text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
        {...props}
    />
));
Label.displayName = "Label";

export { Label };
`;
