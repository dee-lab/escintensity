import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accordion from "./accordion";

test("renders correctly, unopened", () => {
  
  const Mock = (<Accordion header="Header"
  summary={["Summary"]} />)

  render(<Mock />);
  const button = screen.getByRole("button", { name: /Header/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("aria-expanded", "false");
});

test("toggle button onClick triggers it to open/close correctly with correct summary text", () => {
  render(<Mock />);
  const button = screen.getByRole("button", { name: /Header/i });
  const summary = screen.getByText("Summary");

  fireEvent.click(button);
  expect(button).toHaveAttribute("aria-expanded", "true");
  expect(summary).toBeVisible();
  fireEvent.click(button);
  expect(summary).not.toBeVisible();
});
