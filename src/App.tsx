import "./App.css";
import { Title } from "./components/Title";
import { TreeWrapper } from "./components/TreeWrapper";

function App() {
  return (
    <>
      <div className="container-main flex">
        <Title />
        <TreeWrapper />
      </div>
    </>
  );
}

export default App;
