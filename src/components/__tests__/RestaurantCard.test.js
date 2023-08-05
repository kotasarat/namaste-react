import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restroName = screen.getByText("McDonald's");

  expect(restroName).toBeInTheDocument();
});

it("Should render RestaurantCard component with promoted label", () => {});
