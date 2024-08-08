import Axios from "axios";
import DisplayCake from "./DisplayCake";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function CakeMenu() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/home");
  };

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:4000/api/blackstarpastry/cake"
        );
        if (response.status === 200) {
          setData(response.data);
          console.log("Cakes data fetched:", response.data);
        }
      } catch (error) {
        console.log("Error fetching cakes", error);
        setError(error);
      }
    };
    fetchCakes();
  }, []);
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
          {/* {cakeData.map((cake) => (
            <DisplayCake key={cake.id} {...cake} />
          ))} */}

          {data && data.map((cake) => <DisplayCake key={cake._id} {...cake} />)}
        </div>
      </div>
    </>
  );
}
export default CakeMenu;
