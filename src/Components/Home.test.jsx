import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

jest.mock("react-responsive", () => ({
  useMediaQuery: jest.fn(),
}));

const { useMediaQuery } = require("react-responsive");

jest.mock("aos", () => ({
  init: jest.fn(),
}));

beforeEach(() => {
  useMediaQuery.mockClear();
});

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
}

test("renders Cards and Aboutme on desktop", () => {
  useMediaQuery.mockReturnValue(false);
  renderHome();
  expect(screen.getByText("Alessio Guida")).toBeInTheDocument();
  expect(screen.getByText("About Me")).toBeInTheDocument();
});

test("renders language toggle button", () => {
  useMediaQuery.mockReturnValue(false);
  renderHome();
  const itaFlag = screen.getByAltText("Switch to Italian");
  expect(itaFlag).toBeInTheDocument();
});

test("toggles Italian text when flag button is clicked", () => {
  useMediaQuery.mockReturnValue(false);
  renderHome();

  const flagButton = screen.getByAltText("Switch to Italian").closest("button");
  fireEvent.click(flagButton);

  // After clicking, the English flag should be visible
  const enFlag = screen.getByAltText("Switch to English");
  expect(enFlag.className).toContain("d-block");
});

test("shows About Me toggle button on mobile", () => {
  useMediaQuery.mockReturnValue(true);
  renderHome();

  const aboutMeButton = screen.getByRole("button", { name: /about me/i });
  expect(aboutMeButton).toBeInTheDocument();
});

test("toggles About Me visibility on mobile", () => {
  useMediaQuery.mockReturnValue(true);
  renderHome();

  const aboutMeButton = screen.getByRole("button", { name: /about me/i });
  fireEvent.click(aboutMeButton);

  // The aboutme section should now be visible (d-block)
  const aboutMeSection = document.querySelector(".aboutme");
  expect(aboutMeSection.className).toContain("d-block");
});
