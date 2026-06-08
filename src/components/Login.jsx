import React, { useState } from "react";

function Login({ onClose, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    console.log("Saved User:", savedUser);
    console.log("Input:", email, password);

    if (!savedUser) {
      alert("No account found. Please sign up first");
      return;
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      setUser(savedUser);
      alert("Login successful");
      onClose();
    } else {
      alert("Wrong email or password");
    }
  };

  const handleSignup = () => {
    const user = {
      name: email.split("@")[0],
      email,
      password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created");
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white w-[400px] rounded-xl p-6 shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">Welcome</h2>

          <button onClick={onClose} className="text-xl">
            ✕
          </button>
        </div>

        {/* Inputs */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        {/* Buttons */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded mb-3"
        >
          Login
        </button>

        <button
          onClick={handleSignup}
          className="w-full border border-blue-600 text-blue-600 py-3 rounded"
        >
          Sign Up
        </button>

        <button
          onClick={onClose}
          className="w-full mt-4 text-gray-500"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
}

export default Login;