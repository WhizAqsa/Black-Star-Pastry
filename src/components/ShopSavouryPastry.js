import SavouryPastryPriceCard from "./SavouryPastryPriceCard";

const ShopSavouryPastry = () => {
  const savouryPastryData = [
    {
      id: 1,
      image: "./Puff-Pastry-Cinnamon-Rolls.png",
      title: "Puff Pastry Cinnamon Rolls",
      description:
        "Made with buttery puff pastry and filled with a sweet cinnamon sugar mixture, offering a crispy exterior and a soft, gooey center.",
      price: "$80.00",
    },
    {
      id: 2,
      image: "./Puff-Pastry.png",
      title: "Puff-Pastry",
      description:
        "A versatile and flaky pastry base, characterized by its airy layers and buttery flavor.",
      price: "$90.00",
    },
    {
      id: 3,
      image: "./Farmers-Cheese-Sweet-Pastries.png",
      title: "Farmers Cheese Sweet Pastry",
      description:
        "Classic farmers cheese sweet pastry, a light and airy one filled with a creamy, tangy farmers cheese filling.",
      price: "$100.00",
    },
    {
      id: 4,
      image: "./fish-star-pastry.png",
      title: "Fish Star Pastry",
      description:
        "A delightful and savory pastry shaped like a star, filled with a flavorful combination of fish, herbs, and cheese.",
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
          {savouryPastryData.map((savouryPastry) => (
            <SavouryPastryPriceCard key={savouryPastry.id} {...savouryPastry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSavouryPastry;
