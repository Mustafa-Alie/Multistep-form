import { useRef, useReducer } from "react";

import StepsContainer from "./components/StepsContainer";
import NextStepBtn from "./components/NextStepBtn";
import Info from "./components/Info";
import Plan from "./components/Plan";
import Addons from "./components/Addons";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";

//write the reduced function outside the app to increase performace, so that it doesnt get recreated everytime the app renders:
const initialState = {
  step: 1,
  validated: false,
  cycle: "monthly",
  plan: "arcade",
  addon: {
    "Online Service": false,
    "Larger Storage": false,
    "Customizable Profile": false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREVIOUS_STEP":
      return { ...state, step: state.step - 1 };

    case "PREVIOUS_STEP_2":
      return { ...state, step: state.step - 2 };

    case "SET_VALIDATED":
      return { ...state, validated: action.payload };

    case "SET_CYCLE":
      return {
        ...state,
        cycle: state.cycle === "monthly" ? "yearly" : "monthly",
      };

    case "SET_PLAN":
      return { ...state, plan: action.payload };

    case "SET_ADDON":
      return {
        ...state,
        addon: {
          ...state.addon,
          [action.addonType]: !state.addon[action.addonType],
        },
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const formRef = useRef(null);

  function handleNextStep() {
    dispatch({ type: "NEXT_STEP" });
  }

  function handleValidateForm(event) {
    event.preventDefault();
    event.stopPropagation();

    const form = formRef.current;

    if (form?.checkValidity() === false) {
      dispatch({ type: "SET_VALIDATED", payload: true });
    } else {
      dispatch({ type: "SET_VALIDATED", payload: false });
      handleNextStep();
    }
  }

  return (
    <main
      className="bg-main d-flex flex-column justify-content-center align-items-center overflow-hidden"
      style={{ height: "100dvh" }}
    >
      <section className="white-container row bg-white rounded-5 d-flex ">
        <StepsContainer state={state} />

        {state.step === 1 && (
          <Info
            onValidateForm={handleValidateForm}
            state={state}
            formRef={formRef}
          />
        )}
        {state.step === 2 && <Plan state={state} dispatch={dispatch} />}

        {state.step === 3 && <Addons state={state} dispatch={dispatch} />}

        {state.step === 4 && <Summary state={state} dispatch={dispatch} />}

        {state.step === 5 && <Thanks />}
      </section>

      <NextStepBtn
        dispatch={dispatch}
        onValidateForm={handleValidateForm}
        state={state}
      />
    </main>
  );
}

export default App;
