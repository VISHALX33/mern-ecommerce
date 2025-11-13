import AdminNavbar from "../components/AdminNavbar";

export default function AdminDashboard() {
  return (
    <div>
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to the admin control panel.</p>
      </div>
    </div>
  );
}
