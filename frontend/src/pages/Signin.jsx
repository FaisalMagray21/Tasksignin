import { useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import { signin } from "../services/authService";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
      console.log("Signin clicked"); // 🔥 check this

    try {
      const response = await signin({ email, password });
      console.log("Login successful");
    } catch (error) {
      console.log("Signin failed! Please check your email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <AuthCard title="Authorization">
        <input
          className="w-full border p-2 rounded-lg mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded-lg mb-3"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white p-2 rounded-lg"
          onClick={handleSignin}
        >
          SIGN IN
        </button>

        <p className="text-center mt-4">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </AuthCard>
    </div>
  );
}
