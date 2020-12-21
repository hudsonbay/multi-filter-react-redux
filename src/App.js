import React from "react";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import GameSalesTable from "./views/GameSalesTable";

function App() {
  return (
    <Provider store={store}>
      <GameSalesTable />
    </Provider>
  );
}

export default App;
