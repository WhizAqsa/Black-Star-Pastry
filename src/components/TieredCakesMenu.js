import DisplayTieredCakes from "./DisplayTieredCakes";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
function TieredCakesMenu() {
  const tieredCakesData = [
    {
      id: 1,
      image: "./Chocolate-Mini-Tiered-Wedding-Cake.png",
      title: "Chocolate Mini Tiered Wedding Cake",
      description:
        "A promising, decadent cake for a small wedding, featuring rich chocolate flavors and elegant tiers.",
      price: "$80.00",
    },
    {
      id: 2,
      image: "./Cookie-butter-cake.png",
      title: "Cookie Butter Cake",
      description:
        "A unique delicious wedding cake made with creamy cookie butter.",
      price: "$90.00",
    },
    {
      id: 3,
      image: "./tiered-cake.png",
      title: "Pink Flower Cake",
      description:
        "A whimsical and charming wedding cake with pink tiers and delicate floral accents",
      price: "$100.00",
    },
    {
      id: 4,
      image: "./wedding-cake.png",
      title: "Tiered Wedding Cake",
      description:
        "A classic and elegant traditional wedding cake with multiple tiers.",
      price: "$150.00",
    },
  ];
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };
  return (
    <>
      <Navbar isMainPage="true" />
      <div className="container mx-auto mt-7">
        <ul className="flex flex-row items-center justify-center gap-11  text-gray-900">
          <li>
            <a href="/displaycakes" className="me-4 underline md:me-6">
              CAKES
            </a>
          </li>
          <li>
            <a href="/pastry" className="me-4 underline md:me-6">
              PASTRY
            </a>
          </li>
          <li>
            <a href="/tieredcakes" className="me-4 md:me-6">
              TIERED CAKES
            </a>
          </li>
          <li>
            <a href="/drinks" className="me-4 underline md:me-6">
              DRINKS
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center mt-10">
          <p className="text-center whitespace-pre-wrap">
            Iconic centerpieces for any occasion. All of our famous flavours are
            available in two, three and four-layer sizes that serve
            <br /> up to 160 guests.
          </p>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-black text-white px-5 py-2 rounded-lg text-xl mt-7 mb-10 mr-12 cursor-pointer"
            onClick={() => goToHomePage()}
          >
            SHOP NOW
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tieredCakesData.map((tieredCake) => (
            <DisplayTieredCakes key={tieredCake.id} {...tieredCake} />
          ))}
        </div>
      </div>
    </>
  );
}
export default TieredCakesMenu;
