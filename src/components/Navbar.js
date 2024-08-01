import { TbHomeStar } from "react-icons/tb";
import { TbShoppingBagSearch } from "react-icons/tb";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse h-8">
          <TbHomeStar />
        </a>
        <h1 className="text-center font-mono">BLACK STAR PASTRY</h1>

        <a className="flex items-center space-x-3 rtl:space-x-reverse h-8">
          <TbShoppingBagSearch />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
