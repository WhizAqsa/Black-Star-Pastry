import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Grid from "../components/Grid";
import ProductDisplay from "../components/ProductDisplay";
import DisplaySelectionList from "../components/DisplaySelectionList";

const Drinks = () => {
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
      <div className="container p-2 sm:p-4 md:p-8 mx-auto mt-7">
        <DisplaySelectionList selected="drinks" />
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
        <Grid>
          {data &&
            data.map(({ _id, image, description, title }) => (
              <ProductDisplay
                key={_id}
                image={image}
                description={description}
                title={title}
              />
            ))}
        </Grid>
      </div>
    </>
  );
};

export default Drinks;
