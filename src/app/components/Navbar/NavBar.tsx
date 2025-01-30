import NavItem from "./NavItem";

const NavBar: React.FC = () => {
  return (
    <div className="flex space-x-12">
      <NavItem label="Home" href="#" />
      <NavItem label="Shop" href="#" />
      <NavItem label="News" href="#" />
      <NavItem label="About" href="#" />
      <NavItem label="Contact" href="#" />
    </div>
  );
};

export default NavBar;
