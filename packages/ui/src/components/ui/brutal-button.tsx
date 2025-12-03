import * as React from 'react';

import {
    Button as BrutalBaseButton,
    buttonVariants as brutalButtonVariants,
} from '../button';

type BrutalButtonProps = React.ComponentProps<typeof BrutalBaseButton>;

function BrutalButton(props: BrutalButtonProps) {
    return <BrutalBaseButton {...props} />;
}

export { BrutalButton, brutalButtonVariants };
