// Components
export * from './components/button';
// SubmitButton is exported separately to work properly with Server Components
// Import from 'brutalist-ui/submit-button' instead
// export * from './components/submit-button';
export * from './components/card';
export * from './components/input';
export * from './components/textarea';
export * from './components/label';
export * from './components/badge';
export * from './components/dialog';
export * from './components/popover';
export * from './components/tooltip';
export * from './components/dropdown-menu';
export * from './components/select';
export * from './components/tabs';
export * from './components/table';
export * from './components/alert';
export * from './components/avatar';
export * from './components/separator';
export * from './components/switch';
export * from './components/checkbox';
export * from './components/pagination';
export * from './components/spinner';
export * from './components/toast';
export * from './components/skeleton';
export * from './components/command';
export * from './components/combobox';
export * from './components/scroll-area';
// Calendar is exported separately to avoid SSR issues with react-day-picker
// Import from 'brutalist-ui/calendar' instead
// export * from './components/calendar';

// React 19 Hooks are re-exported from 'brutalist-ui/hooks'
// to avoid issues with Server Components
// Import from 'brutalist-ui/hooks' for useFormStatus, useFormState

// Utilities
export * from './lib/utils';

// Types
export type { VariantProps } from 'class-variance-authority';
