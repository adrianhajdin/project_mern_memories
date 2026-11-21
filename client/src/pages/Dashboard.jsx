import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useState } from "react";

const MENUS = [
  { id: "ringkasan", label: "Ringkasan" },
  { id: "data", label: "Data Pengguna" },
  { id: "pengaturan", label: "Pengaturan" },
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("ringkasan");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const activeLabel = MENUS.find((m) => m.id === activeMenu)?.label;

  return (
    <div className="min-h-screen flex bg-slate-100 text-slate-800">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-slate-200 flex-col justify-between p-5 hidden md:flex">
        <div className="flex flex-col gap-6">
          {/* Logo / Nama Aplikasi */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center font-bold text-white">
              A
            </div>
            <span className="text-lg font-bold tracking-wide text-white">
              AppPanel
            </span>
          </div>

          {/* Menu Navigasi */}
          <nav className="flex flex-col gap-2">
            {MENUS.map((menu) => (
              <button
                key={menu.id}
                onClick={() => setActiveMenu(menu.id)}
                className={`text-left px-4 py-2.5 rounded-lg font-medium transition cursor-pointer ${
                  activeMenu === menu.id
                    ? "bg-blue-800 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {menu.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tombol Logout di Bagian Bawah Sidebar */}
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2.5 text-left text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-red-400 rounded-lg transition cursor-pointer"
        >
          Keluar (Logout)
        </button>
      </aside>

      {/* KONTEN UTAMA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER / TOPBAR */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-800">{activeLabel}</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">
              Halo,{" "}
              <strong className="text-slate-800">
                {user?.email || "Admin"}
              </strong>
            </span>
            {/* Tombol logout khusus tampilan HP */}
            <button
              onClick={handleLogout}
              className="md:hidden text-sm bg-slate-200 hover:bg-slate-300 px-3 py-1.5 rounded-lg font-medium cursor-pointer"
            >
              Logout
            </button>
          </div>
        </header>

        {/* MENU DI HP (sidebar disembunyikan di layar kecil) */}
        <nav className="md:hidden bg-white border-b border-slate-200 px-4 py-2 flex gap-2 overflow-x-auto">
          {MENUS.map((menu) => (
            <button
              key={menu.id}
              onClick={() => setActiveMenu(menu.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer ${
                activeMenu === menu.id
                  ? "bg-blue-800 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {menu.label}
            </button>
          ))}
        </nav>

        {/* ISI DASHBOARD */}
        <main className="p-6 flex flex-col gap-6 max-w-6xl w-full mx-auto">
          {activeMenu === "ringkasan" ? (
            <>
              {/* Banner Sapaan */}
              <div className="bg-blue-900 text-slate-100 p-6 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Selamat Datang Kembali!
                  </h2>
                  <p className="text-sm text-blue-200 mt-1">
                    Berikut adalah ringkasan aktivitas sistem Anda hari ini.
                  </p>
                </div>
                <button className="bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition w-fit cursor-pointer">
                  + Tambah Data Baru
                </button>
              </div>

              {/* Kartu Statistik */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-sm font-medium text-slate-500">
                    Total Pengguna
                  </p>
                  <p className="text-2xl font-bold text-slate-800 mt-2">1,248</p>
                  <span className="inline-block mt-2 text-xs font-medium text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                    +12% bulan ini
                  </span>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-sm font-medium text-slate-500">
                    Transaksi Aktif
                  </p>
                  <p className="text-2xl font-bold text-slate-800 mt-2">342</p>
                  <span className="inline-block mt-2 text-xs font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    Stabil
                  </span>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-sm font-medium text-slate-500">
                    Laporan Selesai
                  </p>
                  <p className="text-2xl font-bold text-slate-800 mt-2">98.5%</p>
                  <span className="inline-block mt-2 text-xs font-medium text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                    Target tercapai
                  </span>
                </div>
              </div>

              {/* Tabel Aktivitas Terbaru */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200">
                  <h3 className="font-bold text-slate-800">Aktivitas Terbaru</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-3 font-semibold">Nama</th>
                        <th className="px-6 py-3 font-semibold">Status</th>
                        <th className="px-6 py-3 font-semibold">Tanggal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50 transition">
                        <td className="px-6 py-3.5 font-medium text-slate-800">
                          Budi Santoso
                        </td>
                        <td className="px-6 py-3.5">
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                            Selesai
                          </span>
                        </td>
                        <td className="px-6 py-3.5 text-slate-500">
                          20 Nov 2026
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition">
                        <td className="px-6 py-3.5 font-medium text-slate-800">
                          Siti Aminah
                        </td>
                        <td className="px-6 py-3.5">
                          <span className="bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                            Diproses
                          </span>
                        </td>
                        <td className="px-6 py-3.5 text-slate-500">
                          19 Nov 2026
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-slate-500">
              Halaman {activeLabel} belum dibuat.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}