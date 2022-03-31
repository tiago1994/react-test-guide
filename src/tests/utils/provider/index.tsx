import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { bookSlice } from "../../../stores/book";
import { todoSlice } from "../../../stores/todo";

interface WrapperProps {
  children?: React.ReactNode;
}

function render(ui: any, { initialState = {} } = {}) {
  const store = configureStore({
    reducer: {
      book: bookSlice.reducer,
      todo: todoSlice.reducer,
    },
    preloadedState: initialState,
  });

  const Wrapper = ({ children }: WrapperProps) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
