import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);
        try {
            await register(form);
            navigate("/dashboard");
        } catch (err) {
            setError(
                err.response?.data?.message || err.message || "Terjadi kesalahan"
            );
        } finally {
            setSubmitting(false);
        }
    };

    // Latar memakai bg-slate-100 agar senada dengan Login dan Dashboard
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100 px-4 text-slate-800">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full max-w-sm bg-white p-7 rounded-xl shadow-sm border border-slate-200"
            >
                {/* Header Form */}
                <div className="text-center mb-1">
                    <h2 className="text-2xl font-bold text-slate-800">Daftar</h2>
                    <p className="text-sm text-slate-500 mt-1">
                        Buat akun AppPanel baru
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

                {/* Input Nama */}
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-700"
                    >
                        Nama
                    </label>
                    <input
                        id="name"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-800 transition"
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Nama lengkap"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

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
                        autoComplete="new-password"
                        placeholder="Minimal 6 karakter"
                        value={form.password}
                        onChange={handleChange}
                        minLength={6}
                        required
                    />
                </div>

                {/* Tombol Submit */}
                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-blue-800 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-4 rounded-lg mt-1 enabled:hover:scale-[1.02] active:scale-100 transition duration-200 cursor-pointer"
                >
                    {submitting ? "Memproses..." : "Daftar"}
                </button>

                {/* Link Login */}
                <p className="text-sm text-center text-slate-600 mt-1">
                    Sudah punya akun?{" "}
                    <Link
                        to="/login"
                        className="text-blue-800 hover:text-blue-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}