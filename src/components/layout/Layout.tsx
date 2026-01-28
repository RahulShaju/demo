import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="ml-20 w-full flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="pt-16 p-4  ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
