import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((s) => s.user);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(form));
    if (result.type === "user/register/fulfilled") nav("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Create Account</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full border p-2" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
        <input className="w-full border p-2" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
        <input className="w-full border p-2" placeholder="Password" type="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} />
        <button className="w-full bg-indigo-600 text-white py-2 rounded">{status === "loading" ? "Loading..." : "Register"}</button>
      </form>
    </div>
  );
}
