import { useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import { signup } from "../services/authService";

export default function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await signup({ fullname, email, password });
    alert("Signup successful");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <AuthCard title="Authorization">
        <input className="w-full border p-2 rounded-lg mb-3" placeholder="Full Name" onChange={(e)=>setFullname(e.target.value)} />
        <input className="w-full border p-2 rounded-lg mb-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input className="w-full border p-2 rounded-lg mb-3" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />

        <button className="w-full bg-blue-600 text-white p-2 rounded-lg" onClick={handleSignup}>
          SIGN UP
        </button>

        <p className="text-center mt-4">
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </AuthCard>
    </div>
  );
}

