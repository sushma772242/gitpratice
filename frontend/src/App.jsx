import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Simple React + Node.js Project</h1>

      <h2>Message from Backend</h2>
      <h5>Hello commit3 for squash</h5>
      <h5>Hello commit4 for squash</h5>
      <h3>{message}</h3>
    </div>
  );
}

export default App;