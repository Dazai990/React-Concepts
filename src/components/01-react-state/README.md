🔍 What is React State?
React state is a way for components to store and manage data that changes over time.

It is:

📦 Local to the component

🔁 Mutable using the useState hook

🔄 Triggers re-renders when updated

🧠 Why Use State?
State lets you make your UI interactive. You use it when your app needs to:

Track user input

Update counters or toggles

Change content dynamically

🧩 Key Features
⚡ Dynamic: Re-renders UI on change

🧱 Encapsulated: Each component owns its own state

✨ Simple: Easy with hooks like useState
---

📌 Examples of React State Usage ....

These examples demonstrate different real-world use cases of the useState hook in React:

1️⃣ Count.jsx – Simple Counter
A classic example to demonstrate how React state updates and causes re-renders.

✅ Concepts Used:
Numeric state with useState

Functional updates to avoid stale state

Event handlers for increment, decrement, and reset

🧠 What It Does:
Initializes count with 0

Increases/decreases the count on button clicks

Resets count to 0 with the Reset button

----

2️⃣ PersonForm1.jsx – Single Input (Greeting Form)
Demonstrates useState with a simple string input and conditional rendering.

✅ Concepts Used:
String state (e.g., username)

Controlled input (value bound to state)

Real-time feedback using state

Conditional rendering based on input

🧠 What It Does:
Stores name input in state

Displays a greeting as the user types

----
3️⃣ PersonForm2.jsx – Form with Multiple Fields
Shows how to manage form state as an object with multiple fields using useState.

✅ Concepts Used:
useState with an object (name and age)

Controlled inputs for each field

Form reset using initial state

Object spread (...person) to update partial state

🧠 What It Does:
Manages fullname and age together in a single state object

Updates each field independently without overwriting the other

Resets the form back to initial state using a Reset button