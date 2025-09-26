📘 React useContext Hook
🔹 What is useContext?

The useContext hook is a React hook that allows you to access values from a Context directly, without manually passing props down the component tree.
It simplifies working with the React Context API by avoiding the verbose <Context.Consumer> syntax.

🔹 Why is it Used?

To avoid prop drilling (passing props through multiple levels of components that don’t use them).

To make global values like authentication, theme, or settings available across components.

Provides a simpler alternative to external state management libraries for small to medium apps.

🔹 When to Use useContext?

Use useContext when:

Multiple components need access to the same data.

You want to share state like:

✅ User authentication info

✅ Theme (light/dark mode)

✅ App language (i18n)

✅ Global settings/preferences

⚠️ Avoid using it as a full replacement for Redux/other state libraries in large apps with complex state.

🔹 Basic Syntax :-
import React, { createContext, useContext } from "react";

// 1. Create context
const MyContext = createContext();

// 2. Provide context
function App() {
  return (
    <MyContext.Provider value={"Hello from Context"}>
      <Child />
    </MyContext.Provider>
  );
}

// 3. Consume context
function Child() {
  const value = useContext(MyContext);
  return <h1>{value}</h1>; // Output: Hello from Context
}

🔹 Official Docs

👉 React Docs: [useContext](https://react.dev/reference/react/useContext)