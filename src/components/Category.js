import { useNavigate } from "react-router-dom";

const Category = ({ image, title }) => {
  const navigate = useNavigate();

  const goToCakes = () => {
    navigate("/cakes");
  };
  const goToSweetPastry = () => {
    navigate("/sweetpastry");
  };
  const goToSavouryPastry = () => {
    navigate("/savourypastry");
  };
  const goToAddOns = () => {
    navigate("/addons");
  };
  return (
    <div className="mx-auto w-[500px]">
      <div className="bg-white border border-gray-200">
        <img
          src={image}
          alt={title}
          className="object-contain bg-red-100 w-full h-full cursor-pointer"
          onClick={
            title === "Cakes"
              ? goToCakes
              : title === "Sweet Pastry"
              ? goToSweetPastry
              : title === "Savoury Pastry"
              ? goToSavouryPastry
              : title === "Add Ons"
              ? goToAddOns
              : undefined
          }
        />
      </div>
      <div className="container mx-auto py-4">
        <h1 className="text-xl text-center tracking-tighter">{title}</h1>
      </div>
    </div>
  );
};

export default Category;
