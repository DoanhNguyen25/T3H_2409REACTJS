import {} from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./redux/actions/countAction";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);
  // console.log(count);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
    </>
  );
}

export default App;
