export const paginationTemplate = (utilsAlias: string) => `"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "${utilsAlias}";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    showFirstLast?: boolean;
}

function Pagination({ currentPage, totalPages, onPageChange, className, showFirstLast = true }: PaginationProps) {
    const getVisiblePages = () => {
        const delta = 1;
        const range: (number | string)[] = [];
        
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
                range.push(i);
            } else if (range[range.length - 1] !== "...") {
                range.push("...");
            }
        }
        return range;
    };

    return (
        <nav className={cn("flex items-center gap-1", className)}>
            <PaginationButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                <ChevronLeft className="h-4 w-4" />
            </PaginationButton>

            {getVisiblePages().map((page, i) =>
                page === "..." ? (
                    <span key={\`ellipsis-\${i}\`} className="px-2">
                        <MoreHorizontal className="h-4 w-4" />
                    </span>
                ) : (
                    <PaginationButton
                        key={page}
                        onClick={() => onPageChange(page as number)}
                        active={currentPage === page}
                    >
                        {page}
                    </PaginationButton>
                )
            )}

            <PaginationButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                <ChevronRight className="h-4 w-4" />
            </PaginationButton>
        </nav>
    );
}

interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

function PaginationButton({ className, active, disabled, ...props }: PaginationButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex h-9 min-w-[36px] items-center justify-center border-3 border-black dark:border-white px-3 text-sm font-bold transition-all",
                active ? "bg-[#FF6B6B] text-white shadow-brutal" : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800",
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
            disabled={disabled}
            {...props}
        />
    );
}

export { Pagination, PaginationButton };
`;
