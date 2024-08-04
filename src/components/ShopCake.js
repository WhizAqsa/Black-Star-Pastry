import CakePriceCard from "./CakePriceCard";

const ShopCake = () => {
  const cakeData = [
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
        <div className="flex flex-col shadow-md border-r-2 w-[400px] h-full ml-4">
          <div className="container mx-auto p-10">
            <h2 className="font-bold tracking-tighter mb-2">Cakes</h2>
            <h2 className="tracking-tighter mb-2">Sweet Pastry</h2>
            <h2 className="tracking-tighter mb-2">Savoury Pastry</h2>
            <h2 className="tracking-tighter">Add Ons</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 absolute right-0">
          {cakeData.map((cake) => (
            <CakePriceCard key={cake.id} {...cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCake;
