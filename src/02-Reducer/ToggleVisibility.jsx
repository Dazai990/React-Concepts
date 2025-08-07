import { useReducer } from "react";

const toggleReducer = (Show) => !Show;

const ToggleVisibility = () => {
  const [isVisible, dispatch] = useReducer(toggleReducer, false);

  return (
    <div className="text-center mt-4">
      <button className="btn btn-info" onClick={dispatch}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p className="mt-3 fs-5">Look! I'm Visible Now 👋</p>}
    </div>
  );
};
export default ToggleVisibility;