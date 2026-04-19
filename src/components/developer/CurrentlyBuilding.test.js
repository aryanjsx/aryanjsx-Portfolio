import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CurrentlyBuilding from "./CurrentlyBuilding";
import { ThemeProvider } from "../../context/ThemeContext";

function renderWithTheme(ui) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe("CurrentlyBuilding", () => {
  it("renders project titles from data", () => {
    renderWithTheme(<CurrentlyBuilding />);
    expect(screen.getByText("AURA")).toBeInTheDocument();
    expect(screen.getByText("AURA MCP Server")).toBeInTheDocument();
    expect(screen.getByText("Code Converter")).toBeInTheDocument();
    expect(screen.getByText("Know India")).toBeInTheDocument();
  });

  it("renders status badges", () => {
    renderWithTheme(<CurrentlyBuilding />);
    expect(screen.getByText("In Development")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
    const activeBadges = screen.getAllByText("Active");
    expect(activeBadges.length).toBe(2);
  });

  it("renders GitHub links for each project", () => {
    renderWithTheme(<CurrentlyBuilding />);
    const links = screen.getAllByText("View on GitHub →");
    expect(links.length).toBeGreaterThanOrEqual(4);
    links.forEach((link) => {
      expect(link.closest("a")).toHaveAttribute("target", "_blank");
      expect(link.closest("a")).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders tech stack badges", () => {
    renderWithTheme(<CurrentlyBuilding />);
    const pythonBadges = screen.getAllByText("Python");
    expect(pythonBadges.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});
