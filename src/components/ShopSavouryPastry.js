import SavouryPastryPriceCard from "./SavouryPastryPriceCard";
import { useEffect, useState } from "react";
import Axios from "axios";
const ShopSavouryPastry = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavouryPastries = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:4000/api/blackstarpastry/savourypastry"
        );
        if (response.status === 200) {
          setData(response.data);
          console.log("Savoury Pastry data fetched:", response.data);
        }
      } catch (error) {
        console.log("Error fetching savoury pastry data", error);
        setError(error);
      }
    };
    fetchSavouryPastries();
  }, []);
  return (
    <div className="container mx-auto relative max-w mb-10">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col shadow-md border-r-2 w-[400px] h-full ml-4 p-10">
          <a href="/cakes" className="tracking-tighter mb-2">
            Cakes
          </a>
          <a href="/sweetpastry" className="tracking-tighter mb-2">
            Sweet Pastry
          </a>
          <a href="/savourypastry" className="font-bold tracking-tighter mb-2">
            Savoury Pastry
          </a>
          <a href="/addons" className="tracking-tighter">
            Add Ons
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 absolute right-0">
          {/* {savouryPastryData.map((savouryPastry) => (
            <SavouryPastryPriceCard key={savouryPastry.id} {...savouryPastry} />
          ))} */}
          {data &&
            data.map((savourypastry) => (
              <SavouryPastryPriceCard
                key={savourypastry._id}
                {...savourypastry}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSavouryPastry;
