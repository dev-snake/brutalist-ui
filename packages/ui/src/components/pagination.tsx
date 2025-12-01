'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const paginationVariants = cva('flex items-center justify-center', {
    variants: {
        variant: {
            default: '',
            rounded: '[&_button]:rounded-none',
            minimal: '[&_button]:border-0 [&_button]:shadow-none',
        },
        size: {
            sm: 'gap-1',
            default: 'gap-2',
            lg: 'gap-3',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

const paginationButtonVariants = cva(
    [
        'inline-flex items-center justify-center font-black',
        'border-3 border-black dark:border-white',
        'transition-all duration-150',
        'focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none',
    ],
    {
        variants: {
            size: {
                sm: 'h-8 min-w-8 text-sm px-2',
                default: 'h-10 min-w-10 text-base px-3',
                lg: 'h-12 min-w-12 text-lg px-4',
            },
            isActive: {
                true: [
                    'bg-black text-white dark:bg-white dark:text-black',
                    'shadow-[4px_4px_0px_0px_#FF6B6B]',
                    'hover:shadow-[2px_2px_0px_0px_#FF6B6B]',
                    'active:shadow-none active:translate-x-1 active:translate-y-1',
                ],
                false: [
                    'bg-white dark:bg-gray-900 text-black dark:text-white',
                    'shadow-[4px_4px_0px_0px_#000000] dark:shadow-[4px_4px_0px_0px_#FFFFFF]',
                    'hover:bg-gray-100 dark:hover:bg-gray-800',
                    'hover:shadow-[2px_2px_0px_0px_#000000] dark:hover:shadow-[2px_2px_0px_0px_#FFFFFF]',
                    'active:shadow-none active:translate-x-1 active:translate-y-1',
                ],
            },
        },
        defaultVariants: {
            size: 'default',
            isActive: false,
        },
    }
);

interface PaginationProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof paginationVariants> {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    showFirstLast?: boolean;
    showPageNumbers?: boolean;
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
    (
        {
            className,
            currentPage,
            totalPages,
            onPageChange,
            siblingCount = 1,
            showFirstLast = true,
            showPageNumbers = true,
            variant,
            size,
            ...props
        },
        ref
    ) => {
        const range = (start: number, end: number) => {
            const length = end - start + 1;
            return Array.from({ length }, (_, idx) => idx + start);
        };

        const paginationRange = React.useMemo(() => {
            const totalPageNumbers = siblingCount + 5;

            if (totalPageNumbers >= totalPages) {
                return range(1, totalPages);
            }

            const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
            const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

            const shouldShowLeftDots = leftSiblingIndex > 2;
            const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

            const firstPageIndex = 1;
            const lastPageIndex = totalPages;

            if (!shouldShowLeftDots && shouldShowRightDots) {
                const leftItemCount = 3 + 2 * siblingCount;
                const leftRange = range(1, leftItemCount);
                return [...leftRange, 'dots', totalPages];
            }

            if (shouldShowLeftDots && !shouldShowRightDots) {
                const rightItemCount = 3 + 2 * siblingCount;
                const rightRange = range(totalPages - rightItemCount + 1, totalPages);
                return [firstPageIndex, 'dots', ...rightRange];
            }

            if (shouldShowLeftDots && shouldShowRightDots) {
                const middleRange = range(leftSiblingIndex, rightSiblingIndex);
                return [firstPageIndex, 'dots', ...middleRange, 'dots', lastPageIndex];
            }

            return range(1, totalPages);
        }, [totalPages, siblingCount, currentPage]);

        const buttonSize = size || 'default';

        return (
            <nav
                ref={ref}
                role="navigation"
                aria-label="pagination"
                className={cn(paginationVariants({ variant, size, className }))}
                {...props}
            >
                {/* First page button */}
                {showFirstLast && (
                    <button
                        className={cn(
                            paginationButtonVariants({ size: buttonSize, isActive: false })
                        )}
                        onClick={() => onPageChange(1)}
                        disabled={currentPage === 1}
                        aria-label="Go to first page"
                    >
                        <ChevronsLeft className="h-4 w-4 stroke-[3]" />
                    </button>
                )}

                {/* Previous button */}
                <button
                    className={cn(paginationButtonVariants({ size: buttonSize, isActive: false }))}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Go to previous page"
                >
                    <ChevronLeft className="h-4 w-4 stroke-[3]" />
                </button>

                {/* Page numbers */}
                {showPageNumbers &&
                    paginationRange.map((pageNumber, index) => {
                        if (pageNumber === 'dots') {
                            return (
                                <span
                                    key={`dots-${index}`}
                                    className={cn(
                                        'flex items-center justify-center font-black text-black dark:text-white',
                                        buttonSize === 'sm' && 'h-8 w-8',
                                        buttonSize === 'default' && 'h-10 w-10',
                                        buttonSize === 'lg' && 'h-12 w-12'
                                    )}
                                >
                                    •••
                                </span>
                            );
                        }

                        return (
                            <button
                                key={pageNumber}
                                className={cn(
                                    paginationButtonVariants({
                                        size: buttonSize,
                                        isActive: currentPage === pageNumber,
                                    })
                                )}
                                onClick={() => onPageChange(pageNumber as number)}
                                aria-label={`Go to page ${pageNumber}`}
                                aria-current={currentPage === pageNumber ? 'page' : undefined}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                {/* Page indicator for minimal mode */}
                {!showPageNumbers && (
                    <span className="px-4 font-black text-black dark:text-white">
                        {currentPage} / {totalPages}
                    </span>
                )}

                {/* Next button */}
                <button
                    className={cn(paginationButtonVariants({ size: buttonSize, isActive: false }))}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Go to next page"
                >
                    <ChevronRight className="h-4 w-4 stroke-[3]" />
                </button>

                {/* Last page button */}
                {showFirstLast && (
                    <button
                        className={cn(
                            paginationButtonVariants({ size: buttonSize, isActive: false })
                        )}
                        onClick={() => onPageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        aria-label="Go to last page"
                    >
                        <ChevronsRight className="h-4 w-4 stroke-[3]" />
                    </button>
                )}
            </nav>
        );
    }
);
Pagination.displayName = 'Pagination';

export { Pagination, paginationVariants, paginationButtonVariants };
export type { PaginationProps };
