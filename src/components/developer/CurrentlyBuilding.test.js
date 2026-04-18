import "@testing-library/jest-dom";
import React from "react";
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
    expect(screen.getByText("OpenClaude")).toBeInTheDocument();
  });

  it("renders status badges", () => {
    renderWithTheme(<CurrentlyBuilding />);
    expect(screen.getByText("In Development")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders GitHub links for each project", () => {
    renderWithTheme(<CurrentlyBuilding />);
    const links = screen.getAllByText("View on GitHub →");
    expect(links.length).toBeGreaterThanOrEqual(3);
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
