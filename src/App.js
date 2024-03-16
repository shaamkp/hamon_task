import logo from "./logo.svg";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./components/routing/MainRouter";
import { Provider, useStore } from "react-redux";
import rootReducer from "./store/Reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
