import { useReducer } from "react";

const stepReducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return state + 1;
    case "PREV":
      return state > 0 ? state - 1 : 0;
    default:
      return state;
  }
};

const StepForm = () => {
  const [step, dispatch] = useReducer(stepReducer, 0);
  const steps = ["Step 1: Info", "Step 2: Details", "Step 3: Confirm"];

  return (
    <div className="text-center mt-4">
      <h4>{steps[step]}</h4>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-secondary" onClick={() => dispatch({ type: "PREV" })}disabled={step === 0}>Previous</button>
        <button className="btn btn-primary" onClick={() => dispatch({ type: "NEXT" })}>Next</button>
      </div>
    </div>
  );
};
export default StepForm;