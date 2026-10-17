import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders every section of the portfolio", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: "Shilpa Bijalwan" })).toBeInTheDocument();
  for (const id of ["about", "experience", "skills", "work", "contact"]) {
    expect(document.getElementById(id)).toBeInTheDocument();
  }
  expect(screen.getByText("Warehouse Management System")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
});
