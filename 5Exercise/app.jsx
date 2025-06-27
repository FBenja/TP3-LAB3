const App = () => {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operation, setOperation] = React.useState("addition");
  const [result, setResult] = React.useState(null);

  const handleCalculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res;

    switch (operation) {
      case "addition":
        res = a + b;
        break;
      case "subtraction":
        res = a - b;
        break;
      case "multiplication":
        res = a * b;
        break;
      case "division":
        res = b !== 0 ? a / b : "0 divisions are not allowed";
        break;
      default:
        res = "invalid operation";
    }

    setResult(res);
  };

  const deshabilitar = operation === "division" && parseFloat(num2) === 0;

  return (
    <div>
      <h1>enter two numbers</h1>

      <input
        type="number"
        min="1"
        value={num1}
        onChange={(e) => {
          const value = e.target.value
          if (value === "" || Number(value) >= 1) {
            setNum1(value)
          }
        }}
      />
      <br />

      <input
        type="number"
        min="0"
        value={num2}
        onChange={(e) => {
          const value = e.target.value
          if (value === "" || Number(value) >= 0) {
            setNum2(value)
          }
        }}
      />
      <br />

      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="addition">Addition</option>
        <option value="subtraction">Subtraction</option>
        <option value="multiplication">Multiplication</option>
        <option value="division">Division</option>
      </select>
      <br />

      <button onClick={handleCalculate} disabled={deshabilitar}>
        Calculate
      </button>

      <h3>Result: {result !== NaN ? result : ""}</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
