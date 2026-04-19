import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Gallery from "./Gallery";
import { ThemeProvider } from "../../context/ThemeContext";

function renderWithTheme(ui) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe("Gallery", () => {
  const screenshots = ["/screenshots/1.svg", "/screenshots/2.svg", "/screenshots/3.svg"];

  it("renders nothing when screenshots array is empty", () => {
    const { container } = renderWithTheme(<Gallery screenshots={[]} projectName="Test" />);
    expect(container.firstChild).toBeNull();
  });

  it("renders thumbnail buttons for each screenshot", () => {
    renderWithTheme(<Gallery screenshots={screenshots} projectName="TestProject" />);
    const buttons = screen.getAllByRole("button", { name: /View TestProject screenshot/i });
    expect(buttons).toHaveLength(3);
  });

  it("opens modal when a thumbnail is clicked", () => {
    renderWithTheme(<Gallery screenshots={screenshots} projectName="TestProject" />);
    const buttons = screen.getAllByRole("button", { name: /View TestProject screenshot/i });
    fireEvent.click(buttons[0]);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("closes modal when close button is clicked", () => {
    renderWithTheme(<Gallery screenshots={screenshots} projectName="TestProject" />);
    const buttons = screen.getAllByRole("button", { name: /View TestProject screenshot/i });
    fireEvent.click(buttons[0]);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Close"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("navigates between images with prev/next buttons", () => {
    renderWithTheme(<Gallery screenshots={screenshots} projectName="TestProject" />);
    const buttons = screen.getAllByRole("button", { name: /View TestProject screenshot/i });
    fireEvent.click(buttons[0]);
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Next image"));
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Previous image"));
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });
});
