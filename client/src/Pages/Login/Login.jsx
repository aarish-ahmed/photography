import { useNavigate } from "react-router-dom";
import { API_URL } from "../../Api/api";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch(`${API_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(data.message);
      navigate("/admin/dashboard");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-yellow-50 via-purple-50 to-amber-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-xl p-8 w-[400px] flex flex-col gap-5"
      >
        <h1 className="text-4xl text-center font-bold text-amber-800">
          Admin Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border border-purple-500 rounded-lg p-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="border border-purple-500 rounded-lg p-3"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      {message && <p className="text-center text-red-500 mt-2">{message}</p>}
    </div>
  );
};

export default Login;
