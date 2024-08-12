import Axios from "axios";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "./Grid";
import ProductDisplay from "./ProductDisplay";
import DisplaySelectionList from "./DisplaySelectionList";

const DisplayCakes = () => {
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
      <div className="container p-2 sm:p-4 md:p-8 mx-auto mt-7">
        <DisplaySelectionList selected="cakes" />

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
        <Grid>
          {data &&
            data.map(({ _id, image, description, title }) => (
              <ProductDisplay
                key={_id}
                image={image}
                title={title}
                description={description}
              />
            ))}
        </Grid>
      </div>
    </>
  );
};

export default DisplayCakes;
