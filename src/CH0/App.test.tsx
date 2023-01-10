import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given ", () => {
  describe("When", () => {
    test("Then it should ...", () => {
      render(<App />);
      const header = screen.getByRole("heading", { name: "Vite + React" });
      expect(header).toBeInTheDocument();
    });
  });
});
