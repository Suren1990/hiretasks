import { useState } from "react";
import Header from "./Components/Header/Header";
import CounterContext from "./context";
import Routing from "./Routing";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);

  return (
    <CounterContext.Provider value={{ count, setCount, value, setValue, lists, setLists }}>
      <div className="App">
        <Header />
        <main className="main">
          <h1>Here are only 2 tasks</h1>
          <Routing />
        </main>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
