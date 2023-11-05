import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingView from "./Quizview/LandingView";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <div
      className="app"
      style={{
        backgroundImage: "url(./bg-image.jpg)",
      }}
    >
      <Header />
      <LandingView/>
    </div>
    
  
    </BrowserRouter>
    
  );
}

export default App;
