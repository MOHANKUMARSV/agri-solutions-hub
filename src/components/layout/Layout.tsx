import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContacts from "./FloatingContacts";

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pt-20 md:pt-24">
      <Outlet />
    </main>
    <Footer />
    <FloatingContacts />
    <ScrollRestoration />
  </div>
);

export default Layout;
