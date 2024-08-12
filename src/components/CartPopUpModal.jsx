import { useState } from "react";
import Swal from "sweetalert2";
import { useCartStore } from "../store/cart-store";
import { FaXmark } from "react-icons/fa6";

const CartPopUpModal = ({ isVisible, onClose, product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [count, setCount] = useState(1);

  if (!isVisible) return null;
  if (product === null) return null;

  const { image, price, description, title } = product;

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-auto">
      <div className="w-full m-4 p-2 md:w-[500px] flex flex-col bg-white relative rounded-lg">
        <button
          className="text-xl text-black absolute top-3 right-3 w-10 h-10 rounded-full bg-white inline-flex justify-center items-center"
          onClick={() => onClose()}
        >
          <FaXmark />
        </button>

        <img
          src={image}
          className="w-full rounded-md bg-slate-200 max-h-80 object-contain"
          alt={title}
        />

        <article className="px-3 md:w-96 md:mx-auto">
          <h1 className="text-xl mt-2 mb-3 tracking-tighter flex justify-between">
            <span>{title}</span>
            <span className="text-lg"> {price}</span>
          </h1>
          <p className="tracking-tighter text-lg mb-4">{description}</p>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row justify-between">
              <span
                className="cursor-pointer font-bold w-8 h-8 bg-white rounded-full flex justify-center items-center shadow-md border"
                onClick={decrementCount}
              >
                &#8722;
              </span>
              <span className="text-md font-bold w-fit h-8 bg-white rounded-full flex justify-center items-center">
                {count}
              </span>
              <span
                className="cursor-pointer font-bold w-8 h-8 bg-white rounded-full flex justify-center items-center shadow-md border"
                onClick={incrementCount}
              >
                &#xFF0B;
              </span>
            </div>
            <div
              className="cursor-pointer bg-black bg-opacity-50 rounded-md"
              onClick={function () {
                addToCart({
                  id: product.id,
                  image: image,
                  title: title,
                  price: price,
                  quantity: count,
                });

                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Items added to cart. Thank you!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }}
            >
              <div className="flex flex-row justify-between px-4 py-3">
                <span className="text-white tracking-tighter font-bold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                  }).format(parseFloat(price.slice(1)) * count)}
                </span>
                <button className="text-white cursor-pointer text-center tracking-tighter font-bold">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default CartPopUpModal;
