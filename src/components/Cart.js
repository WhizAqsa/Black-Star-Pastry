import { useState } from "react";
import Swal from "sweetalert2";

const Cart = ({ title, image, description, price }) => {
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container flex flex-col h-full mb-2">
      <img
        src={image}
        // isko ap dek len, i g wo msla solve ho gaya, right?yes
        //thank you!!, no prb x
        className="w-full h-[400px] object-cover border border-gray-200 bg-slate-200"
      />
      <div className="container mx-auto ">
        <h1 className="text-xl px-2 py-3 tracking-tighter">{title}</h1>
        <p className="tracking-tighter text-lg py-2 px-2">{description}</p>
        <h2 className="font-bold text-lg tracking-tighter px-2 py-2">
          {price}
        </h2>
      </div>
      <div className="flex md:flex-row gap-1 p-4 border border-gray-200 shadow-md w-full md:h-[80px] sm:h-[50px]">
        <div className="container mx-auto border border-slate-200 ml-2 p-2 w-[150px] h-[50px] sm:w-[100px]">
          <div className="flex flex-row justify-between">
            <span className="cursor-pointer font-bold" onClick={decrementCount}>
              &#8722;
            </span>
            <span className="text-md font-bold">{count}</span>
            <span className="cursor-pointer font-bold" onClick={incrementCount}>
              &#xFF0B;
            </span>
          </div>
        </div>
        <div
          className="container mx-auto border-black cursor-pointer bg-black bg-opacity-50 md:w-[500px] sm:w-[280px] h-[45px]"
          onClick={function () {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Items added to cart. Thank you!",
              showConfirmButton: false,
              timer: 1500,
            });
          }}
        >
          <div className="flex flex-row gap-[13rem] p-1">
            <span className="px-2 py-2 text-white tracking-tighter font-bold">
              {price}
            </span>
            <button className="px-4 py-2 text-white cursor-pointer text-center tracking-tighter font-bold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
