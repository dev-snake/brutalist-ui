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
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    Button,
    Badge,
} from '@/components/ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';
import {
    User,
    Settings,
    LogOut,
    CreditCard,
    Keyboard,
    Mail,
    MessageSquare,
    PlusCircle,
    Plus,
    UserPlus,
    Cloud,
    Github,
    LifeBuoy,
} from 'lucide-react';
import * as React from 'react';

export default function DropdownMenuPage() {
    const [showStatus, setShowStatus] = React.useState(true);
    const [showActivity, setShowActivity] = React.useState(false);
    const [showPanel, setShowPanel] = React.useState(true);
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
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CreditCard className="mr-2 h-4 w-4" />
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Keyboard className="mr-2 h-4 w-4" />
                            Keyboard shortcuts
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="dropdown-menu" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
            </pre>

            <h2>Examples</h2>

            <h3>With Submenus</h3>
            <p>Use nested submenus for complex navigation hierarchies.</p>
            <ComponentPreview>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>Open with Submenu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    Invite users
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem>
                                        <Mail className="mr-2 h-4 w-4" />
                                        Email
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        Message
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <PlusCircle className="mr-2 h-4 w-4" />
                                        More...
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                            <DropdownMenuItem>
                                <Plus className="mr-2 h-4 w-4" />
                                New Team
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LifeBuoy className="mr-2 h-4 w-4" />
                            Support
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>
                            <Cloud className="mr-2 h-4 w-4" />
                            API (Coming Soon)
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ComponentPreview>

            <h3>With Checkboxes</h3>
            <p>Toggle options using checkbox menu items.</p>
            <ComponentPreview>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>View Options</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                            checked={showStatus}
                            onCheckedChange={setShowStatus}
                        >
                            Show Status Bar
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={showActivity}
                            onCheckedChange={setShowActivity}
                        >
                            Show Activity Bar
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={showPanel}
                            onCheckedChange={setShowPanel}
                        >
                            Show Panel
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ComponentPreview>

            <h3>With Radio Items</h3>
            <p>Select a single option from a group.</p>
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
                            <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ComponentPreview>

            <h3>With Disabled Items</h3>
            <p>
                Use <code>disabled</code> prop to disable specific items.
            </p>
            <ComponentPreview>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary">Actions</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem disabled>Archive</DropdownMenuItem>
                        <DropdownMenuItem disabled>Move to Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ComponentPreview>

            <h2>API Reference</h2>

            <h3>DropdownMenuContent</h3>
            <p>The container for menu items.</p>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#FFE66D]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Prop
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Type
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Default
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                sideOffset
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                number
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">6</td>
                            <td className="p-3 border-b border-gray-200">
                                Distance from trigger in pixels
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">side</td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "top" | "bottom" | "left" | "right"
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "bottom"
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Position relative to trigger
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">align</td>
                            <td className="p-3 font-mono text-sm">"start" | "center" | "end"</td>
                            <td className="p-3 font-mono text-sm">"center"</td>
                            <td className="p-3">Alignment relative to trigger</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>DropdownMenuItem</h3>
            <p>Individual menu item.</p>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#FFE66D]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Prop
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Type
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Default
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                disabled
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                boolean
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                false
                            </td>
                            <td className="p-3 border-b border-gray-200">Disable the menu item</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                inset
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                boolean
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                false
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Add left padding for alignment
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">onSelect</td>
                            <td className="p-3 font-mono text-sm">(event) =&gt; void</td>
                            <td className="p-3 font-mono text-sm">-</td>
                            <td className="p-3">Handler when item is selected</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>All Exports</h3>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#4ECDC4]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Component
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenu
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Root component managing state
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuTrigger
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Button that opens the menu
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuContent
                            </td>
                            <td className="p-3 border-b border-gray-200">Container for items</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuItem
                            </td>
                            <td className="p-3 border-b border-gray-200">Basic menu item</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuCheckboxItem
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Toggleable checkbox item
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuRadioGroup
                            </td>
                            <td className="p-3 border-b border-gray-200">Group for radio items</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuRadioItem
                            </td>
                            <td className="p-3 border-b border-gray-200">Radio selection item</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuLabel
                            </td>
                            <td className="p-3 border-b border-gray-200">Section label/heading</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuSeparator
                            </td>
                            <td className="p-3 border-b border-gray-200">Visual divider</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuShortcut
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Keyboard shortcut display
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuGroup
                            </td>
                            <td className="p-3 border-b border-gray-200">Group related items</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuSub
                            </td>
                            <td className="p-3 border-b border-gray-200">Submenu root</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuSubTrigger
                            </td>
                            <td className="p-3 border-b border-gray-200">Opens submenu on hover</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DropdownMenuSubContent
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Submenu content container
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">DropdownMenuPortal</td>
                            <td className="p-3">Portal for menu content</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Accessibility</h2>
            <ul>
                <li>
                    <kbd>Enter</kbd> / <kbd>Space</kbd> opens menu and selects item
                </li>
                <li>
                    <kbd>↑</kbd> <kbd>↓</kbd> navigate between items
                </li>
                <li>
                    <kbd>→</kbd> opens submenu, <kbd>←</kbd> closes submenu
                </li>
                <li>
                    <kbd>Escape</kbd> closes the menu
                </li>
                <li>Type to search and focus matching items</li>
            </ul>
        </div>
    );
}
