import "./App.css";
import LandingView from "./Quizview/LandingView";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: "url(./bg-image.jpg)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div style={{ paddingTop: "20px" }}>
        <center>
          <div style={{ color: "balck", fontSize: "100px", fontWeight: 50 }}>
            INTUITIVE QUIZ HUB
          </div>
        </center>
      </div>
      <div style={{ padding: "0px 40px", color: "black" }}>
        <hr />
      </div>
      <LandingView />
      <div></div>
    </div>
  );
}

export default App;
