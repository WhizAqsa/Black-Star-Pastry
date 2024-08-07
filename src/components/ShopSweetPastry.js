import PastryPriceCard from "./SweetPastryPriceCard";

const ShopSweetPastry = () => {
  const sweetPastryData = [
    {
      id: 1,
      image: "./chocolate-pastry.png",
      title: "Chocolate Pastry",
      description:
        "Indulge in pure decadence with a rich, velvety chocolate pastry filled with smooth filling.",
      price: "$80.00",
    },
    {
      id: 2,
      image: "./Chocolate-Truffle-Pastry.png",
      title: "Chocolate Truffle Pastry",
      description:
        "A luxurious pastry filled with a smooth, creamy chocolate truffle filling, encased in a delicate chocolate shell.",
      price: "$90.00",
    },
    {
      id: 3,
      image: "./Classic-French-Pastry.png",
      title: "Classic French Pastry",
      description:
        "A symphony of textures and flavors that epitomizes French elegance and sophistication.",
      price: "$100.00",
    },
    {
      id: 4,
      image: "./EgglessDutchTrufflePastry.png",
      title: "Eggless Dutch Truffle Pastry",
      description:
        "A rich and indulgent Dutch pastry made with a creamy, chocolate truffle filling and a hint of orange zest.",
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
