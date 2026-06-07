import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cards from "./Cards";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("aos", () => ({
  init: jest.fn(),
}));

beforeEach(() => {
  mockNavigate.mockClear();
});

function renderCards() {
  return render(
    <MemoryRouter>
      <Cards />
    </MemoryRouter>
  );
}

test("renders profile image", () => {
  renderCards();
  const img = screen.getByAltText("Alessio Guida");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", "ProPic.jpg");
});

test("renders name and title", () => {
  renderCards();
  expect(screen.getByText("Alessio Guida")).toBeInTheDocument();
  expect(screen.getByText("Junior Fullstack Developer")).toBeInTheDocument();
});

test("renders the Tolkien quote", () => {
  renderCards();
  expect(
    screen.getByText(/Elen Sila Lumenn Omentielvo/i)
  ).toBeInTheDocument();
});

test("renders social links", () => {
  renderCards();
  const links = document.querySelectorAll(".social a");
  expect(links.length).toBe(5);
  expect(links[0]).toHaveAttribute("href", "https://github.com/aleguid97");
  expect(links[1]).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/aleguid97dev/"
  );
});

test("renders Download CV button", () => {
  renderCards();
  expect(screen.getByText("Download CV")).toBeInTheDocument();
});

test("navigates to /projects when Projects button is clicked", () => {
  renderCards();
  const projectsBtn = screen.getByText("Projects");
  fireEvent.click(projectsBtn);
  expect(mockNavigate).toHaveBeenCalledWith("/projects");
});
