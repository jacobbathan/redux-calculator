import { createStore } from "redux";

function reducer(store, action) {
  if (!store) {
    return {
      currentInput: 0,
      stack: []
    };
  }

  if (action.type === "setCurrentInput") {
    return {
      ...store,
      currentInput: action.value
    };
  }

  if (action.type === "pushToStack") {
    return {
      currentInput: 0,
      stack: [...store.stack, store.currentInput]
    };
  }

  if (action.type === "add") {
    const answer =
      store.stack[store.stack.length - 1] + store.stack[store.stack.length - 2];

    return {
      ...store,
      stack: [...store.stack.slice(0, store.stack.length - 2), answer]
    };
  }

  if (action.type === "subtract") {
    const answer =
      store.stack[store.stack.length - 1] - store.stack[store.stack.length - 2];

    return {
      ...store,
      stack: [...store.stack.slice(0, store.stack.length - 2), answer]
    };
  }
}

const reduxStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default reduxStore;
