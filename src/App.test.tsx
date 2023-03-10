import { MemoryRouter } from "react-router-dom";
import App from "./App";
import TestRenderer from "react-test-renderer";

describe("Given an App component", () => {
  describe("When it's instantiated in home", () => {
    test("Then it should render the same html structure as the one in App", () => {
      const expectedApp = TestRenderer.create(
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });

  describe("When it's instantiated in a unkown page", () => {
    test("Then it should show the notFoundPage", () => {
      const expectedApp = TestRenderer.create(
        <MemoryRouter initialEntries={["/yayoNacho"]}>
          <App />
        </MemoryRouter>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });

  describe("When it's instantiated in favorites", () => {
    test("Then it should show the favorites page", () => {
      const expectedApp = TestRenderer.create(
        <MemoryRouter initialEntries={["/favorites"]}>
          <App />
        </MemoryRouter>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });
});
