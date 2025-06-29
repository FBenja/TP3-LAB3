
const App = () => {

  const [height, setHeigth] = React.useState(0)
  const [weight, setWeight] = React.useState(0)
  const [imc, setImc] = React.useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (height <= 0 || weight <= 0) {
      alert("don't enter zero or negatives numbers")
      return
    } else {
      const calculatedImc = (weight / (height * height) * 10000).toFixed(2);
      setImc(calculatedImc);
    }
  }

  const whatType = (imc) => {
    const imcValue = Number(imc)

    if (imcValue < 18.5 && imcValue > 0) return "low";
    if (imcValue >= 18.5 && imcValue < 25) return "regular";
    if (imcValue >= 25 && imcValue < 30) return "semi-overweight";
    if (imcValue >= 30) return "overweight";

  };

  //console.log(imc)
  return (
    < >
      <h2>IMC calculator</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="height">Enter your height </label>
        <input type="number"

          id="height"
          value={height}
          onChange={(e) => setHeigth(e.target.value)} />
        <br />

        <label htmlFor="weight">Enter your weight </label>
        <input type="number"

          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)} />
        <br />
        <button type="submit">SHOW IMC</button>

      </form>
      <p className={whatType(imc)}>{`YOUR IMC IS: ${imc}`}
      </p>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//Unique commit