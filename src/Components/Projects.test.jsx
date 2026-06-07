import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Projects from "./Projects";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

beforeEach(() => {
  mockNavigate.mockClear();
});

function renderProjects() {
  return render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>
  );
}

test("renders the Projects heading", () => {
  renderProjects();
  expect(screen.getByText("Projects")).toBeInTheDocument();
});

test("renders all project cards", () => {
  renderProjects();
  expect(screen.getByText("Fruitfy Market")).toBeInTheDocument();
  expect(screen.getByText("Project 2")).toBeInTheDocument();
  expect(screen.getByText("Project 3")).toBeInTheDocument();
});

test("renders project descriptions", () => {
  renderProjects();
  expect(
    screen.getByText(/marketplace per la frutta/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Dungeons & Dragons/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Terzo progetto di esempio/i)
  ).toBeInTheDocument();
});

test("renders video elements for projects with video", () => {
  renderProjects();
  const videos = document.querySelectorAll("video");
  expect(videos).toHaveLength(2);
});

test("renders an image for projects without video", () => {
  renderProjects();
  const img = screen.getByAltText("Project 3");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", "https://via.placeholder.com/800x400");
});

test("renders Ingrandisci buttons for video projects", () => {
  renderProjects();
  const buttons = screen.getAllByText("Ingrandisci");
  expect(buttons).toHaveLength(2);
});

test("opens modal when Ingrandisci is clicked", () => {
  renderProjects();
  const buttons = screen.getAllByText("Ingrandisci");
  fireEvent.click(buttons[0]);

  expect(screen.getByText("Anteprima")).toBeInTheDocument();
  const modalVideo = document.querySelector(".modal-body video");
  expect(modalVideo).toBeInTheDocument();
});

test("closes modal when Chiudi is clicked", async () => {
  renderProjects();
  fireEvent.click(screen.getAllByText("Ingrandisci")[0]);
  expect(screen.getByText("Anteprima")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Chiudi"));
  // After closing, modal video should be removed
  const { waitFor } = require("@testing-library/react");
  await waitFor(() => {
    expect(document.querySelector(".modal-body video")).not.toBeInTheDocument();
  });
});

test("navigates home when back arrow is clicked", () => {
  renderProjects();
  const backButton = screen.getByLabelText("Torna alla home");
  fireEvent.click(backButton);
  expect(mockNavigate).toHaveBeenCalledWith("/");
});
