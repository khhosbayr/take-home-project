import { Phone, Search, ShoppingCart, MapPin } from "lucide-react";
const HeaderBar: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
      <div className="flex items-center space-x-6 text-gray-600">
        <div className="flex items-center">
          <Phone size={14} className="mr-2" />
          <span className="text-sm">7717-5566</span>
        </div>
        <span className="text-sm">About</span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="flex items-center text-gray-600">
          <Search size={14} className="mr-1" />
          <span className="text-sm">Search</span>
        </button>
        <button className="flex items-center text-gray-600">
          <ShoppingCart size={14} className="mr-1" />
          <span className="text-sm">Cart</span>
        </button>
        <button className="flex items-center text-gray-600">
          <MapPin size={14} className="mr-1" />
          <span className="text-sm">Location</span>
        </button>
        <button className="text-sm">🇺🇸</button>
      </div>
    </div>
  );
};

export default HeaderBar;
