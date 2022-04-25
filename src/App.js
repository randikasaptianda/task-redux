import { Provider } from "react-redux";
import store from "../src/app/store";
import Counter from "./Redux/Counter";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
