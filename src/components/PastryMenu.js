import DisplayPastry from "./DisplayCake";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
function PastryMenu() {
  const pastryData = [
    {
      id: 1,
      image: "./Puff-Pastry-Cinnamon-Rolls.png",
      title: "Puff Pastry Cinnamon Rolls",
      description:
        "Made with buttery puff pastry and filled with a sweet cinnamon sugar mixture, offering a crispy exterior and a soft, gooey center.",
      price: "$80.00",
    },
    {
      id: 2,
      image: "./Chocolate-Truffle-Pastry.png",
      title: "Chocolate Truffle Pastry",
      description:
        "A luxurious pastry filled with a smooth, creamy chocolate truffle filling, encased in a delicate chocolate shell.",
    },
    {
      id: 3,
      image: "./Farmers-Cheese-Sweet-Pastries.png",
      title: "Farmers Cheese Sweet Pastry",
      description:
        "A light and airy pastry filled with a creamy, tangy farmers cheese filling.",
      price: "$100.00",
    },
    {
      id: 4,
      image: "./EgglessDutchTrufflePastry.png",
      title: "Eggless Dutch Truffle Pastry",
      description:
        "A rich and indulgent Dutch pastry made with a creamy, chocolate truffle filling and a hint of orange zest.",
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
            <a href="/cakes" className="me-4 underline md:me-6">
              CAKES
            </a>
          </li>
          <li>
            <a href="/pastry" className="me-4 md:me-6">
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
            Our pastries pay respect to classic recipes but explore
            cross-cultural culinary possibilities. Created with an adventurous
            <br />
            spirit and always a twist.
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
          {pastryData.map((pastry) => (
            <DisplayPastry key={pastry.id} {...pastry} />
          ))}
        </div>
      </div>
    </>
  );
}
export default PastryMenu;
