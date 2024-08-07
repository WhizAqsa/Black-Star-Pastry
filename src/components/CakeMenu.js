import DisplayCake from "./DisplayCake";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
function CakeMenu() {
  const cakeData = [
    {
      id: 1,
      image: "./chocoCake.png",
      title: "Black Truffle Crepe Cake",
      description:
        "A savoury crepe cake made with buckwheat pancakes layered with a creamy blend of black truffle, herbs, and roasted mushrooms. (GF, V)",
      price: "$80.00",
    },
    `{
      id: 2,
      image: "./fullChoco.png",
      title: "Decadent Chocolate Layer Cake",
      description:
        "A rich and velvety chocolate cake, layered with moist chocolate sponge and topped with a smooth chocolate ganache and decadent chocolate shavings.",
      price: "$90.00",
    },
    {
      id: 3,
      image: "./cakeball.png",
      title: "Triple Chocolate Bliss Cake",
      description:
        "Three layers of rich chocolate cake, separated by a smooth chocolate mousse filling and covered in a glossy chocolate glaze.",
      price: "$100.00",
    },
    {
      id: 4,
      image: "./cakeLayer.png",
      title: "Luscious Chocolate Cake",
      description:
        "A luscious chocolate cake with rich chocolate sponge,luscious chocolate filling and a decadent chocolate frosting.",
      price: "$150.00",
    },`,
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
            <a href="/displaycakes" className="me-4 md:me-6">
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
            <a href="/drinks" className="me-4 underline md:me-6">
              DRINKS
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center mt-10">
          <p className="text-center whitespace-pre-wrap">
            Original cakes with poetic storytelling woven through each slice.
            Authentic creations that awaken the senses and evoke
            <br /> moments of edible emotion. Gluten Free (GF), Vegetarian (V)
            and Vegan (VG) options available.
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
          {cakeData.map((cake) => (
            <DisplayCake key={cake.id} {...cake} />
          ))}
        </div>
      </div>
    </>
  );
}
export default CakeMenu;
