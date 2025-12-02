import { buttonTemplate } from './button.js';
import { cardTemplate } from './card.js';
import { inputTemplate } from './input.js';
import { badgeTemplate } from './badge.js';
import { alertTemplate } from './alert.js';
import { avatarTemplate } from './avatar.js';
import { calendarTemplate } from './calendar.js';
import { checkboxTemplate } from './checkbox.js';
import { comboboxTemplate } from './combobox.js';
import { commandTemplate } from './command.js';
import { dialogTemplate } from './dialog.js';
import { dropdownMenuTemplate } from './dropdown-menu.js';
import { labelTemplate } from './label.js';
import { paginationTemplate } from './pagination.js';
import { popoverTemplate } from './popover.js';
import { selectTemplate } from './select.js';
import { separatorTemplate } from './separator.js';
import { skeletonTemplate } from './skeleton.js';
import { spinnerTemplate } from './spinner.js';
import { switchTemplate } from './switch.js';
import { tableTemplate } from './table.js';
import { tabsTemplate } from './tabs.js';
import { textareaTemplate } from './textarea.js';
import { toastTemplate } from './toast.js';
import { tooltipTemplate } from './tooltip.js';
import { scrollAreaTemplate } from './scroll-area.js';

const templates: Record<string, (utilsAlias: string) => string> = {
    button: buttonTemplate,
    card: cardTemplate,
    input: inputTemplate,
    badge: badgeTemplate,
    alert: alertTemplate,
    avatar: avatarTemplate,
    calendar: calendarTemplate,
    checkbox: checkboxTemplate,
    combobox: comboboxTemplate,
    command: commandTemplate,
    dialog: dialogTemplate,
    'dropdown-menu': dropdownMenuTemplate,
    label: labelTemplate,
    pagination: paginationTemplate,
    popover: popoverTemplate,
    select: selectTemplate,
    separator: separatorTemplate,
    skeleton: skeletonTemplate,
    spinner: spinnerTemplate,
    switch: switchTemplate,
    table: tableTemplate,
    tabs: tabsTemplate,
    textarea: textareaTemplate,
    toast: toastTemplate,
    tooltip: tooltipTemplate,
    'scroll-area': scrollAreaTemplate,
};

export function getComponentTemplate(name: string, utilsAlias: string): string {
    const templateFn = templates[name];
    if (!templateFn) {
        throw new Error(`Template not found for component: ${name}`);
    }
    return templateFn(utilsAlias);
}
