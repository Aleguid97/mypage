import React from "react";
import { render, screen } from "@testing-library/react";
import AboutMeAndLanguages from "./Aboutme";

test("renders English About Me heading by default", () => {
  render(<AboutMeAndLanguages showItalian={false} />);
  const headingEn = screen.getByText("About Me");
  expect(headingEn.className).toContain("d-block");
});

test("renders Italian heading when showItalian is true", () => {
  render(<AboutMeAndLanguages showItalian={true} />);
  const headingIt = screen.getByText("Su di me");
  expect(headingIt.className).toContain("d-block");
});

test("renders English description when showItalian is false", () => {
  render(<AboutMeAndLanguages showItalian={false} />);
  const desc = document.querySelector(".description");
  expect(desc.className).toContain("d-block");
});

test("hides English description when showItalian is true", () => {
  render(<AboutMeAndLanguages showItalian={true} />);
  const desc = document.querySelector(".description");
  expect(desc.className).toContain("d-none");
});

test("renders all language progress bars", () => {
  render(<AboutMeAndLanguages showItalian={false} />);
  expect(screen.getByText("Italiano")).toBeInTheDocument();
  expect(screen.getByText("English")).toBeInTheDocument();
  expect(screen.getByText("Français")).toBeInTheDocument();
  expect(screen.getByText("Español")).toBeInTheDocument();
  expect(screen.getByText("日本語")).toBeInTheDocument();
});

test("renders technology icons", () => {
  render(<AboutMeAndLanguages showItalian={false} />);
  expect(screen.getByAltText("HTML5 icon")).toBeInTheDocument();
  expect(screen.getByAltText("React icon")).toBeInTheDocument();
  expect(screen.getByAltText("JavaScript icon")).toBeInTheDocument();
});

test("hides content on mobile when showAboutMe is false", () => {
  render(
    <AboutMeAndLanguages
      showItalian={false}
      showAboutMe={false}
      isTabletOrMobile={true}
    />
  );
  const aboutmeDiv = document.querySelector(".aboutme");
  expect(aboutmeDiv.className).toContain("d-none");
});

test("shows content on mobile when showAboutMe is true", () => {
  render(
    <AboutMeAndLanguages
      showItalian={false}
      showAboutMe={true}
      isTabletOrMobile={true}
    />
  );
  const aboutmeDiv = document.querySelector(".aboutme");
  expect(aboutmeDiv.className).toContain("d-block");
});

test("always shows content on desktop regardless of showAboutMe", () => {
  render(
    <AboutMeAndLanguages
      showItalian={false}
      showAboutMe={false}
      isTabletOrMobile={false}
    />
  );
  const aboutmeDiv = document.querySelector(".aboutme");
  expect(aboutmeDiv.className).toContain("d-block");
});

test("renders Languages heading in English", () => {
  render(<AboutMeAndLanguages showItalian={false} />);
  const langEn = screen.getByText("Languages");
  expect(langEn.className).toContain("d-block");
});

test("renders Lingue heading in Italian", () => {
  render(<AboutMeAndLanguages showItalian={true} />);
  const langIt = screen.getByText("Lingue");
  expect(langIt.className).toContain("d-block");
});

test("renders Technologies heading in English", () => {
  render(<AboutMeAndLanguages showItalian={false} />);
  const tecEn = screen.getByText("Technologies");
  expect(tecEn.className).toContain("d-block");
});

test("renders Tecnologie heading in Italian", () => {
  render(<AboutMeAndLanguages showItalian={true} />);
  const tecIt = screen.getByText("Tecnologie");
  expect(tecIt.className).toContain("d-block");
});
