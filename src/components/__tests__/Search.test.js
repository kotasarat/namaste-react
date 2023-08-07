import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search ResList for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(resCardsBeforeSearch.length).toBe(9);

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchButton);

  const resCardsAfterSearch = screen.getAllByTestId("resCard");

  expect(resCardsAfterSearch.length).toBe(2);
});

it("Should search ResList for top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(resCardsBeforeSearch.length).toBe(9);

  const topRatedResListButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedResListButton);

  const resCardsAfterSearch = screen.getAllByTestId("resCard");

  expect(resCardsAfterSearch.length).toBe(4);
});

it("Should clear all top rated restaurants and show complete ResList", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(resCardsBeforeSearch.length).toBe(9);

  const topRatedResListButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedResListButton);

  const resCardsAfterSearch = screen.getAllByTestId("resCard");

  expect(resCardsAfterSearch.length).toBe(4);

  const clearButton = screen.getByRole("button", {
    name: "Clear",
  });

  fireEvent.click(clearButton);

  const resCardsAfterClear = screen.getAllByTestId("resCard");
  expect(resCardsAfterClear.length).toBe(9);
});
