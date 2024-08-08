import AddOnsPriceCard from "./AddOnsPriceCard";
import { useEffect, useState } from "react";
import Axios from "axios";
const ShopAddOns = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchAddOns = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:4000/api/blackstarpastry/addon"
        );
        if (response.status === 200) {
          setData(response.data);
          console.log("Add Ons data fetched:", response.data);
        }
      } catch (error) {
        console.log("Error fetching add ons data", error);
        setError(error);
      }
    };
    fetchAddOns();
  }, []);
  return (
    <div className="container mx-auto relative max-w mb-10">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col shadow-md border-r-2 w-[400px] h-full ml-4 p-10">
          <a href="/cakes" className="tracking-tighter mb-2">
            Cakes
          </a>
          <a href="/sweetpastry" className=" tracking-tighter mb-2">
            Sweet Pastry
          </a>
          <a href="/savourypastry" className="tracking-tighter mb-2">
            Savoury Pastry
          </a>
          <a href="/addons" className="font-bold tracking-tighter">
            Add Ons
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 absolute right-0">
          {/* {addOnsData.map((addOn) => (
            <AddOnsPriceCard key={addOn.id} {...addOn} />
          ))} */}
          {data &&
            data.map((addon) => <AddOnsPriceCard key={addon._id} {...addon} />)}
        </div>
      </div>
    </div>
  );
};

export default ShopAddOns;
