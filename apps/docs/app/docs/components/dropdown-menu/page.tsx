'use client';

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    Button,
    Badge,
} from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';
import { User, Settings, LogOut, CreditCard } from 'lucide-react';
import * as React from 'react';

export default function DropdownMenuPage() {
    const [showStatus, setShowStatus] = React.useState(true);
    const [position, setPosition] = React.useState('bottom');

    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Dropdown Menu</h1>

            <p>
                Displays a menu to the user — such as a set of actions or functions — triggered by a
                button. Built on Radix UI Dropdown Menu primitive.
            </p>

            <h2>Preview</h2>
            <ComponentPreview>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CreditCard className="mr-2 h-4 w-4" />
                            Billing
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="dropdown-menu" />

            <h2>With Checkboxes</h2>
            <ComponentPreview>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>Options</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuCheckboxItem
                            checked={showStatus}
                            onCheckedChange={setShowStatus}
                        >
                            Show Status Bar
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ComponentPreview>

            <h2>With Radio Items</h2>
            <ComponentPreview>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>Position: {position}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ComponentPreview>
        </div>
    );
}
