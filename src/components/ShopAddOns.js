import AddOnsPriceCard from "./AddOnsPriceCard";
const ShopAddOns = () => {
  const addOnsData = [
    {
      id: 1,
      image: "./teddy-bear.png",
      title: "Soft and Sweet Teddy",
      price: "$80.00",
    },
    {
      id: 2,
      image: "./birthday-card.png",
      title: "Heartfelt Birthday Wishes",
      price: "$90.00",
    },
    {
      id: 3,
      image: "./birthday-banner.png",
      title: "Sparkling Birthday Banner",
      price: "$100.00",
    },
    {
      id: 4,
      image: "./wish-cards.png",
      title: "Personalized Wish Card",
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
          {addOnsData.map((addOn) => (
            <AddOnsPriceCard key={addOn.id} {...addOn} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopAddOns;
