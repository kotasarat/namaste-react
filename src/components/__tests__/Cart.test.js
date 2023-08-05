import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load RestaurantMenu component ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Peri Peri Chicken (5)");
  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(5);

  const addButtons = screen.getAllByRole("button", { name: "ADD +" });

  const beforeAddCartItems = screen.getByText("Cart 🛒 (0 items)");

  expect(beforeAddCartItems).toBeInTheDocument();

  fireEvent.click(addButtons[0]);

  const afterAddCartItems = screen.getByText("Cart 🛒 (1 items)");

  expect(afterAddCartItems).toBeInTheDocument();

  fireEvent.click(addButtons[1]);

  const afterAddCartItems2 = screen.getByText("Cart 🛒 (2 items)");

  expect(afterAddCartItems2).toBeInTheDocument();

  //   const cartItems = screen.getByTestId("cart");

  //   fireEvent.click(cartItems);

  //   const cartFoodItems = screen.getByTestId("foodItems");

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(
    screen.getByText("Cart is empty. Please add items to cart")
  ).toBeInTheDocument();
});
