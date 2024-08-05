import PastryPriceCard from "./SweetPastryPriceCard";

const ShopSweetPastry = () => {
  const sweetPastryData = [
    {
      id: 1,
      image: "./chocoCake.png",
      title: "Black Truffle Crepe Cake",
      description:
        "A savoury crepe cake made with buckwheat pancakes layered with a creamy blend of black truffle, herbs, and roasted mushrooms. (GF, V)",
      price: "$80.00",
    },
    {
      id: 2,
      image: "./fullChoco.png",
      title: "Black Truffle Crepe Cake",
      description:
        "A savoury crepe cake made with buckwheat pancakes layered with a creamy blend of black truffle, herbs, and roasted mushrooms. (GF, V)",
      price: "$90.00",
    },
    {
      id: 3,
      image: "./cakeball.png",
      title: "Black Truffle Crepe Cake",
      description:
        "A savoury crepe cake made with buckwheat pancakes layered with a creamy blend of black truffle, herbs, and roasted mushrooms. (GF, V)",
      price: "$100.00",
    },
    {
      id: 4,
      image: "./cakeLayer.png",
      title: "Black Truffle Crepe Cake",
      description:
        "A savoury crepe cake made with buckwheat pancakes layered with a creamy blend of black truffle, herbs, and roasted mushrooms. (GF, V)",
      price: "$150.00",
    },
  ];

  return (
    <div className="container mx-auto relative max-w mb-10">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col shadow-md border-r-2 w-[400px] h-full ml-4 p-10">
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 absolute right-0">
          {sweetPastryData.map((sweetPastry) => (
            <PastryPriceCard key={sweetPastry.id} {...sweetPastry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSweetPastry;
