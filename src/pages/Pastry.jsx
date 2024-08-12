import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import Axios from "axios";
import DisplaySelectionList from "../components/DisplaySelectionList";
import Grid from "../components/Grid";
import ProductDisplay from "../components/ProductDisplay";
const Pastry = () => {
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
      <div className="container p-2 sm:p-4 md:p-8 mx-auto mt-7">
        <DisplaySelectionList selected="pastry" />

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

export default Pastry;
