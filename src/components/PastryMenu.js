import { useEffect, useState } from "react";
import DisplayPastry from "./DisplayCake";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
import Axios from "axios";
function PastryMenu() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/home");
  };
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchPastries = async () => {
      const response = await Axios.get(
        "http://localhost:4000/api/blackstarpastry/pastry"
      );
      if (response.status === 200) {
        setData(response.data);
      } else {
        console.log("Error fetching pastries");
      }
    };
    fetchPastries();
  }, []);
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
          {/* {pastryData.map((pastry) => (
            <DisplayPastry key={pastry.id} {...pastry} />
          ))} */}
          {data &&
            data.map((pastry) => (
              <DisplayPastry key={pastry._id} {...pastry} />
            ))}
        </div>
      </div>
    </>
  );
}
export default PastryMenu;
