import CakePriceCard from "./CakePriceCard";
import Axios from "axios";
import { useEffect, useState } from "react";
import Cart_PopUpModal from "./Cart_PopUpModal";

const ShopCake = () => {
  const [cakes, setCakes] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchShopCakes = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:4000/api/blackstarpastry/shopcake"
        );
        if (response.status === 200) {
          setCakes(response.data);
        }
      } catch (error) {
        console.log("Error fetching cakes to be shopped", error);
        setError(error);
      }
    };
    fetchShopCakes();
  }, []);

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="container mx-auto relative mb-10">
        <div className="flex gap-2 flex-col md:flex-row md:items-start p-2">
          <aside className="flex flex-col p-4 md:w-60 md:sticky md:top-0 md:h-auto">
            <a href="/cakes" className="font-bold tracking-tighter mb-2">
              Cakes
            </a>
            <a href="/sweetpastry" className="tracking-tighter mb-2">
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
              gridTemplateColumns: `repeat(auto-fit, minmax(18rem, 1fr))`,
            }}
          >
            {cakes.map((shopcake) => (
              <CakePriceCard
                key={shopcake._id}
                {...shopcake}
                onClick={() => {
                  setShowModal(true);
                  setSelectedProduct(shopcake);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <Cart_PopUpModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        product={selectedProduct}
      />
    </>
  );
};

export default ShopCake;
