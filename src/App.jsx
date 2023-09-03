import "./App.css";
import Home from "./components/home/home";
import Navigation from "./components/navigation/navigation";

function App() {
  const homeRenderedHandler = () => {
    console.log("home are rendered");
  };

  return (
    <div className="App">
      <Navigation />
      <Home renderedHandler={homeRenderedHandler} />
    </div>
  );
}

export default App;
