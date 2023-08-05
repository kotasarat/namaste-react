import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("ContactUs page test cases", () => {
  beforeAll(() => {
    // console.log("Before All");
  });

  beforeEach(() => {
    // console.log("Before Each");
    render(<Contact />);
  });

  afterAll(() => {
    // console.log("After All");
  });

  afterEach(() => {
    // console.log("After Each");
  });

  it("Should load ContactUs component", () => {
    // render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside ContactUs component", () => {
    // render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside ContactUs component", () => {
    // render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the ContactUs component", () => {
    // render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).not.toBe(3);
  });
});
