import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import DisplaySelectionList from "../components/DisplaySelectionList";
import Grid from "../components/Grid";
import ProductDisplay from "../components/ProductDisplay";

const TieredCakes = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTieredCakes = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:4000/api/blackstarpastry/tieredcake"
        );
        if (response.status === 200) {
          setData(response.data);
          console.log("Tiered Cakes data fetched:", response.data);
        }
      } catch (error) {
        console.log("Error fetching tiered cakes", error);
        setError(error);
      }
    };
    fetchTieredCakes();
  }, []);
  return (
    <>
      <Navbar isMainPage="true" />
      <div className="container p-2 sm:p-4 md:p-8 mx-auto mt-7">
        <DisplaySelectionList selected="tiered cakes" />
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

export default TieredCakes;
