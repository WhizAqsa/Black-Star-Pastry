import { useEffect, useState } from "react";
import DisplayDrinks from "./DisplayDrinks";
import Navbar from "./Navbar";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
function DrinksMenu() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/home");
  };
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:4000/api/blackstarpastry/drink"
        );
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.log("Error fetching drinks!");
        setError(error);
      }
    };
    fetchDrinks();
  }, []);
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
          {/* {drinksData.map((drink) => (
            <DisplayDrinks key={drink.id} {...drink} />
          ))} */}
          {data &&
            data.map((drink) => <DisplayDrinks key={drink._id} {...drink} />)}
        </div>
      </div>
    </>
  );
}
export default DrinksMenu;
