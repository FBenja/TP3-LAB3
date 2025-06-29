const App = () => {
  const [enabled, setEnabled] = React.useState("left");

  const handleClick = (side) => {
    setEnabled(side === "left" ? "right" : "left");
  };

  return (
    <>
      <h1>alternatives buttons</h1>
      <button
        onClick={() => handleClick("left")}
        disabled={enabled !== "left"}
      >
        Lefty
      </button>
      <button
        onClick={() => handleClick("right")}
        disabled={enabled !== "right"}
      >
        Righty
      </button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//Unique commit