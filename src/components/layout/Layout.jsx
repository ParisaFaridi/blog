import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
