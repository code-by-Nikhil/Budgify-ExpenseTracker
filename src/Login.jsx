import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useLoginMutation } from "./services/apiSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        email,
        password,
      });

      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/expenses");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Servor error");
      }
    }
  };

  return (
    <div className="bg-gray-200 text-center font-bold p-20 min-h-screen flex flex-col gap-5">
      <h1 className="text-blue-600 font-bold text-6xl">
        💸Budgify - Expense Tracker
      </h1>
      <h1 className="font-bold text-5xl mt-15 mb-7">Login</h1>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="flex flex-col gap-5 w-80 p-7 bg-white rounded-md shadow-xl">
          <div className="flex flex-col text-start">
            <label>Name</label>
            <input
              className="bg-gray-100 p-2 mt-2 font-semibold border border-gray-300 rounded-md"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col text-start">
            <label>Email</label>
            <input
              className="bg-gray-100 p-2 mt-2 font-semibold border border-gray-300 rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col text-start">
            <label>Password</label>
            <input
              className="bg-gray-100 p-2 mt-2 font-semibold border border-gray-300 rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="mt-3 px-10 flex gap-3 flex-col">
            <button
              className="bg-blue-600 rounded text-white p-2 mx-5 cursor-pointer hover:bg-blue-500 duration-200"
              type="submit"
            >
              {" "}
              Login
            </button>
            <button
              className="bg-green-600 rounded text-white p-3 cursor-pointer hover:bg-green-500 duration-200"
              type="button"
              onClick={() => navigate("/register")}
            >
              {" "}
              Create an account
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
