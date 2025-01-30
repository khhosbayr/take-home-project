import HeaderTop from "./HeaderBar";
import NavBar from "../Navbar/NavBar";
import LogoIcon from "../icons/logo-icon";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <HeaderTop />
      <nav className="nav-bg-cyan py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="tflex items-center">
            <LogoIcon />
          </div>
          <NavBar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
