import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);
        try {
            await login(form.email, form.password);
            navigate("/dashboard");
        } catch (err) {
            setError(
                err.response?.data?.message || err.message || "Terjadi kesalahan"
            );
        } finally {
            setSubmitting(false);
        }
    };

    // Latar memakai bg-slate-100 agar senada dengan Dashboard
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100 px-4 text-slate-800">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full max-w-sm bg-white p-7 rounded-xl shadow-sm border border-slate-200"
            >
                {/* Header Form */}
                <div className="text-center mb-1">
                    <h2 className="text-2xl font-bold text-slate-800">Login</h2>
                    <p className="text-sm text-slate-500 mt-1">
                        Masuk ke akun AppPanel Anda
                    </p>
                </div>

                {/* Pesan Error */}
                {error && (
                    <p
                        role="alert"
                        className="text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded-lg text-center"
                    >
                        {error}
                    </p>
                )}

                {/* Input Email */}
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-800 transition"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="nama@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Input Password */}
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-slate-700"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-800 transition"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        placeholder="••••••••"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Tombol Submit */}
                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-blue-800 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-4 rounded-lg mt-1 enabled:hover:scale-[1.02] active:scale-100 transition duration-200 cursor-pointer"
                >
                    {submitting ? "Memproses..." : "Login"}
                </button>

                {/* Link Daftar */}
                <p className="text-sm text-center text-slate-600 mt-1">
                    Belum punya akun?{" "}
                    <Link
                        to="/register"
                        className="text-blue-800 hover:text-blue-600 font-semibold hover:underline"
                    >
                        Daftar
                    </Link>
                </p>
            </form>
        </div>
    );
}