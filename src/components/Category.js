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
    <div className="w-fit p-4">
      <div
        className="bg-white border border-gray-200"
        onClick={
          () => {
            const href = "/" + title.split(" ").join("").toLowerCase();
            console.log(href);
            navigate(href);
          }
          // title === "Cakes"
          //   ? goToCakes
          //   : title === "Sweet Pastry"
          //   ? goToSweetPastry
          //   : title === "Savoury Pastry"
          //   ? goToSavouryPastry
          //   : title === "Add Ons"
          //   ? goToAddOns // commit bhi kr liya karein, or record nahi hoga ap k paas rollback krny k liye in case someithngi goes wrong//krty hn dikaoun??
          //   : undefined
        }
      >
        <img
          src={image}
          alt={title}
          className="bg-red-100 w-full cursor-pointer"
        />
      </div>
      <div className="py-4">
        <h1 className="text-xl text-center tracking-tighter">{title}</h1>
      </div>
    </div>
  );
};

export default Category;
