import { createStore } from "redux";

/*
{
  currentInput: 1234.5,
  stack: [
    10,
    20,
  ]
}
*/

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
    // take current input push it onto the stack
    return {
      currentInput: 0,
      stack: [...store.stack, store.currentInput]
    };
  }

  if (action.type === "add") {
    // take top two things on stack, add, then push answer onto stack
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

const reduxStore = createStore(reducer);
console.log("initial redux store", reduxStore);
export default reduxStore;
