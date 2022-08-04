import { UIState } from "../../../interfaces/interfaces";
import { Action } from "../../types/actions";
import UIReducer from "./UIReducer";

describe("Given a UI reducer function", () => {
  describe("When it is called with a 'showLoading' action and a 'false' previous state of loading", () => {
    test("Then it should change the state of loading to 'true'", () => {
      const previousUI: UIState = { isLoading: false, type: "loading" };
      const newUI: UIState = { isLoading: true, type: "loading" };
      const action = { type: "showLoading" };

      const UIReducerTest = UIReducer(previousUI, action);

      expect(UIReducerTest).toStrictEqual(newUI);
    });
  });
  describe("When it is called with a 'unknown' action and and a 'false' previous state of loading", () => {
    test("Then it should not change the state of loading", () => {
      const previousUI: UIState = { isLoading: false, type: "loading" };
      const newUI: UIState = { isLoading: false, type: "loading" };
      const action = { type: "ensaladilla-rusa" };

      const UIReducerTest = UIReducer(previousUI, action);

      expect(UIReducerTest).toStrictEqual(newUI);
    });
  });
});
