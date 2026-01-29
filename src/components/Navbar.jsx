import { Link } from "react-router-dom";
const Navbar = () => {
  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
    
    <h1 className="text-2xl font-bold text-amber-700">
      CoffeeCafe
    </h1>

    <ul className="hidden md:flex space-x-8 font-medium text-gray-700 list-none">
      <li className="hover:text-amber-700 cursor-pointer">Home</li>
      <li className="hover:text-amber-700 cursor-pointer">Menu</li>
      <li className="hover:text-amber-700 cursor-pointer">About</li>
      <li className="hover:text-amber-700 cursor-pointer">Contact</li>
    </ul>

    <button className="hidden md:block bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition">
      Order Now
    </button>
  </div>
</nav>

  );
};

export default Navbar;
