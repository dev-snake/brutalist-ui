import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Switch } from "../../components/switch";

describe("Switch", () => {
    it("renders correctly", () => {
        render(<Switch aria-label="test switch" />);
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("handles toggle", () => {
        const onCheckedChange = vi.fn();
        render(
            <Switch aria-label="test switch" onCheckedChange={onCheckedChange} />
        );

        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);

        expect(onCheckedChange).toHaveBeenCalledWith(true);
    });

    it("renders as checked", () => {
        render(<Switch aria-label="test switch" checked />);
        expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("renders as unchecked", () => {
        render(<Switch aria-label="test switch" checked={false} />);
        expect(screen.getByRole("checkbox")).not.toBeChecked();
    });

    it("renders as disabled", () => {
        render(<Switch aria-label="test switch" disabled />);
        expect(screen.getByRole("checkbox")).toBeDisabled();
    });

    it("applies custom className to wrapper", () => {
        const { container } = render(
            <Switch aria-label="test switch" className="custom-switch" />
        );
        expect(container.querySelector("label")).toHaveClass("custom-switch");
    });

    it("has neo-brutalism styles on track", () => {
        const { container } = render(<Switch aria-label="test switch" />);
        const track = container.querySelector("label > div");
        expect(track).toHaveClass("border-3");
        expect(track).toHaveClass("border-black");
    });
});
