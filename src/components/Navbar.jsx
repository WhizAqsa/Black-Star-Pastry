import { TbHomeStar, TbShoppingBagSearch } from "react-icons/tb";
import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Navbar({ isMainPage } = { isMainPage: false }) {
  const navigate = useNavigate();

  if (isMainPage) {
    const goToHome = () => {
      navigate("/home");
    };
    const goToMain = () => {
      navigate("/");
    };
    return (
      <nav className="bg-white border-gray-200 container mx-auto">
        <div className="max-w-screen-xl flex flex-wrap gap-4  items-center justify-center sm:justify-between sm:flex-row sm:flex-nowrap mx-auto p-4">
          <a className="flex items-center h-8">
            <TbHomeStar
              className="text-5xl cursor-pointer"
              onClick={() => goToMain()}
            />
          </a>
          <div className="text-center">
            <img src="/main-title-logo.svg" className="w-full" />
          </div>
          <a className="flex items-center h-8">
            <TbShoppingBagSearch
              className="text-5xl cursor-pointer"
              onClick={() => goToHome()}
            />
          </a>
        </div>
      </nav>
    );
  } else {
    const goToCartDetails = () => {
      navigate("/cart-details");
    };
    return (
      <nav className="bg-white border-gray-200 shadow-md px-4 py-8 z-10">
        <div className="flex flex-wrap justify-between items-center container mx-auto">
          <div className="text-sm">
            <img src="/logo-main.svg" />
          </div>
          <a className="">
            <FaBasketShopping
              className="text-lg cursor-pointer"
              onClick={() => goToCartDetails()}
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
