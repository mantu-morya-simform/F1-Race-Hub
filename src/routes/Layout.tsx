import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-black text-white">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
