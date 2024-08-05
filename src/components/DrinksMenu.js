import DisplayDrinks from "./DisplayDrinks";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
function DrinksMenu() {
  const drinksData = [
    {
      id: 1,
      image: "./chocoCake.png",
      title: "Black Truffle Crepe Cake",
      description:
        "A savoury crepe cake made with buckwheat pancakes layered with a creamy blend of black truffle, herbs, and roasted mushrooms. (GF, V)",
      price: "$80.00",
    },
    {
      id: 2,
      image: "./fullChoco.png",
      title: "Black Truffle Crepe Cake",
      description:
        "A savoury crepe cake made with buckwheat pancakes layered with a creamy blend of black truffle, herbs, and roasted mushrooms. (GF, V)",
      price: "$90.00",
    },
    {
      id: 3,
      image: "./cakeball.png",
      title: "Black Truffle Crepe Cake",
      description:
        "A savoury crepe cake made with buckwheat pancakes layered with a creamy blend of black truffle, herbs, and roasted mushrooms. (GF, V)",
      price: "$100.00",
    },
    {
      id: 4,
      image: "./cakeLayer.png",
      title: "Black Truffle Crepe Cake",
      description:
        "A savoury crepe cake made with buckwheat pancakes layered with a creamy blend of black truffle, herbs, and roasted mushrooms. (GF, V)",
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
            <a href="/tieredcakes" className="me-4 underline md:me-6">
              TIERED CAKES
            </a>
          </li>
          <li>
            <a href="/drinks" className="me-4 md:me-6">
              DRINKS
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center mt-10">
          <p className="text-center whitespace-pre-wrap">
            Black Star Pastry have lovingly reproduced some of our favourite
            slices to be enjoyed by the sip, now available at all stores.
            <br /> We partner with iconic specialty coffee roasters, ST. ALi -
            blends available for purchase instore or online.
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
          {drinksData.map((drink) => (
            <DisplayDrinks key={drink.id} {...drink} />
          ))}
        </div>
      </div>
    </>
  );
}
export default DrinksMenu;
