import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    dpf: "",
    age: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // ✅ Validation
    for (let key in form) {
      if (form[key] === "") {
        alert("Please fill all fields");
        return;
      }
    }

    setLoading(true);
    setResult(null); // clear old result

    // 🔥 Demo prediction (replace later with backend)
    setTimeout(() => {
      const randomResult = Math.random() > 0.5 ? "Diabetic" : "Not Diabetic";
      setResult(randomResult);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="card">

        {/* ✅ Title */}
        <div className="title">
          <span className="icon">🩺</span>
          <h1>Diabetes Prediction</h1>
        </div>

        <p className="subtitle">Enter your health details below</p>

        {/* ✅ Form */}
        <div className="form-grid">
          <input name="pregnancies" placeholder="Pregnancies" onChange={handleChange} />
          <input name="glucose" placeholder="Glucose" onChange={handleChange} />
          <input name="bloodPressure" placeholder="Blood Pressure" onChange={handleChange} />
          <input name="skinThickness" placeholder="Skin Thickness" onChange={handleChange} />
          <input name="insulin" placeholder="Insulin" onChange={handleChange} />
          <input name="bmi" placeholder="BMI" onChange={handleChange} />
          <input name="dpf" placeholder="Diabetes Pedigree Function" onChange={handleChange} />
          <input name="age" placeholder="Age" onChange={handleChange} />
        </div>

        {/* ✅ Only ONE button */}
        <button className="btn" onClick={handleSubmit}>
          Predict
        </button>

        {loading && <p className="loading">⏳ Predicting...</p>}

        {/* ✅ Show ONLY after prediction */}
        {result && (
          <div className={`result ${result === "Diabetic" ? "danger" : "safe"}`}>
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;