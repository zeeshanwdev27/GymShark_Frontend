import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Suspense } from "react";

function Layout() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen  pt-[120px]">
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-70">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce"></span>
              </div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </>
  );
}

export default Layout;
