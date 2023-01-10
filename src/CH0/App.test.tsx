import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Given App component", () => {
  beforeEach(() => {
    render(<App />);
  });
  describe("When it is rendered", () => {
    test("Then it should be on the screen", () => {
      const header = screen.getByRole("heading", { name: "Vite + React" });
      expect(header).toBeInTheDocument();
    });
  });
  describe("When button is clicked", () => {
    test("Then counter should render 1", async () => {
      const button = screen.getByRole("button");
      const expectedText = "count is 1";
      expect(button).toBeInTheDocument();
      await userEvent.click(button);
      const result = screen.getByText(expectedText);
      expect(result).toBeInTheDocument();
    });
  });
});
