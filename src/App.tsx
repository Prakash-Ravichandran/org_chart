import "./App.css";
import Footer from "./components/Footer";
import { Title } from "./components/Title";
import { TreeWrapper } from "./components/TreeWrapper";

function App() {
  return (
    <>
      <div className="container-main flex">
        <Title />
        <TreeWrapper />
        <Footer />
      </div>
    </>
  );
}

export default App;
