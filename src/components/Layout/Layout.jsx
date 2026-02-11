import { Navbar, Footer } from "./index";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* {se cambio my-5 por mb-5 para que el hero quede pegado al navbar} */}
      <main className="mb-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
