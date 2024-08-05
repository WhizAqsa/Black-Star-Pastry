import Category from "./Category";

const CategoryMenu = () => {
  const categoryData = [
    { id: 1, image: "./cakes-category.png", title: "Cakes" },
    { id: 2, image: "./mini-pastries.png", title: "Sweet Pastry" },
    { id: 3, image: "./savour-pastry.png", title: "Savoury Pastry" },
    { id: 4, image: "./add_ons.png", title: "Add Ons" },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categoryData.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
