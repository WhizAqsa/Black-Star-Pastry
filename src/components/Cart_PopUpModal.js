import Cart from "./Cart";

const CartPopUpModal = ({ isVisible, onClose, product }) => {
  if (!isVisible) return null;
  if (product === null) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full m-4 p-2 md:w-[700px] flex flex-col bg-white">
        <button
          className="text-xl text-black place-self-end"
          onClick={() => onClose()}
        >
          &times;
        </button>
        <Cart
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      </div>
    </div>
  );
};

export default CartPopUpModal;
