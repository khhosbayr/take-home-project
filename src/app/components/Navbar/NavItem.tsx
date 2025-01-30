interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <a href={href} className="text-gray-900 hover:text-blue-600">
      {label}
    </a>
  );
};

export default NavItem;
