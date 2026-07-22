import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Pratham Gupta"
        School="LNCT Bhopal"
        Total={450}
        goal={5}
      />
    </div>
  );
}

export default App;