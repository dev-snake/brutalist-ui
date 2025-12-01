import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../../components/input";

describe("Input", () => {
    it("renders correctly", () => {
        render(<Input placeholder="Enter text" />);
        expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });

    it("handles value changes", () => {
        const handleChange = vi.fn();
        render(<Input onChange={handleChange} />);

        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: "test" } });

        expect(handleChange).toHaveBeenCalled();
    });

    it("renders with neo-brutalism styles", () => {
        render(<Input data-testid="input" />);
        const input = screen.getByTestId("input");
        expect(input).toHaveClass("border-3");
        expect(input).toHaveClass("border-black");
    });

    it("renders as disabled", () => {
        render(<Input disabled />);
        expect(screen.getByRole("textbox")).toBeDisabled();
    });

    it("applies custom className", () => {
        render(<Input className="custom-input" data-testid="input" />);
        expect(screen.getByTestId("input")).toHaveClass("custom-input");
    });

    it("renders different input types", () => {
        const { rerender } = render(<Input type="email" />);
        expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");

        rerender(<Input type="password" />);
        // Password inputs don't have textbox role
        expect(document.querySelector('input[type="password"]')).toBeInTheDocument();
    });

    it("forwards ref correctly", () => {
        const ref = vi.fn();
        render(<Input ref={ref} />);
        expect(ref).toHaveBeenCalled();
    });
});
