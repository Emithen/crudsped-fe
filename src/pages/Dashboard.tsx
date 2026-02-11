import { logout } from "../api/auth";

export const DashboardPage = () => {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="mt-10 flex w-full items-center justify-between px-10">
        <div className="text-2xl font-bold">Dashboard</div>
        <button
          className="cursor-pointer rounded-lg bg-gray-800 px-3 py-1 text-white hover:bg-gray-500"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
