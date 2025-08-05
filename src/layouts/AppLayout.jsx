import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function AppLayout(props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar data={props} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer/>
      
    </div>
  );
}
