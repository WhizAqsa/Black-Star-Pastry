import PastryPriceCard from "./SweetPastryPriceCard";
import { useEffect, useState } from "react";
import Axios from "axios";
// @ts-ignore
import CartPopUpModal from "./CartPopUpModal";
const ShopSweetPastry = () => {
  const [sweetpastries, setSweetPastries] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const fetchSweetPastries = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:4000/api/blackstarpastry/sweetpastry"
        );
        if (response.status === 200) {
          setSweetPastries(response.data);
          console.log("Sweet Pastry data fetched:", response.data);
        }
      } catch (error) {
        console.log("Error fetching sweet pastry data", error);
        setError(error);
      }
    };
    fetchSweetPastries();
  }, []);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="container mx-auto relative mb-10">
        <div className="flex gap-2 flex-col md:flex-row md:items-start p-2">
          <aside className="flex flex-col p-4  md:w-60 md:sticky md:top-0 md:h-auto">
            <a href="/cakes" className="tracking-tighter mb-2">
              Cakes
            </a>
            <a href="/sweetpastry" className="font-bold tracking-tighter mb-2">
              Sweet Pastry
            </a>
            <a href="/savourypastry" className="tracking-tighter mb-2">
              Savoury Pastry
            </a>
            <a href="/addons" className="tracking-tighter">
              Add Ons
            </a>
          </aside>
          <div
            className="flex-1 grid gap-4"
            style={{
              gridTemplateColumns: `repeat(auto-fit,minmax(18rem,1fr))`,
            }}
          >
            {sweetpastries.map((sweetpastry) => (
              <PastryPriceCard
                key={sweetpastry._id}
                {...sweetpastry}
                onClick={() => {
                  setSelectedProduct(sweetpastry);
                  setShowModal(true);
                  //make body unscrollable
                  document.body.style.overflow = "hidden";
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <CartPopUpModal
        isVisible={showModal}
        onClose={() => {
          // make body scrollable
          document.body.style.overflow = "auto";

          setShowModal(false);
        }}
        product={selectedProduct}
      />
    </>
  );
};

export default ShopSweetPastry;
