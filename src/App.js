import { useState } from 'react';
import { useNavigate } from 'react-router';
import './App.css';
import { Input, Button } from "atomize";

function App() {

  const navigate = useNavigate();
  const [name, updateName] = useState("")
  const [password, updatePassword] = useState("")

  const login = () => {
    if (name === "testemail@dal.ca" && password === "Test@123") {
      fetch("https://express-t4.onrender.com/api/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: name,
          password: password
        })
      })
        .then(response => response.json())
        .then(() => {
          navigate('/home');
        });
    } else {
      alert("Invalid credentials.")
    }
  }

  return (
    <>
      <h2 style={{ textAlign: 'center', paddingTop: '3%', paddingBottom: '3%', backgroundColor: '#333333', color: 'white' }} >Login</h2>
      <div className="login-body">
        <Input placeholder="Username" value={name} onChange={(e) => updateName(e.target.value)} style={{ marginTop: '10px' }} />
        <Input placeholder="Password" value={password} type="password" onChange={(e) => updatePassword(e.target.value)} style={{ marginTop: '10px' }} />
        <Button
          style={{ marginTop: '10px' }}
          shadow="3"
          hoverShadow="4"
          m={{ r: "1rem" }}
          onClick={() => login()}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default App;
