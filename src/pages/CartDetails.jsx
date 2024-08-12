import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCartStore } from "../store/cart-store";
import Swal from "sweetalert2";

const CartDetails = () => {
  const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="font-bold text-xl h-8 bg-red-900 text-white text-center">
          CART DETAILS
        </h1>
      </div>
      <div className="relative mt-8 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-orange-800">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Item
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="sr-only">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 && (
              <tr className="bg-white border-b hover:bg-gray-5">
                <td colSpan="5" className="p-4 text-center">
                  <p className="">Cart is empty</p>
                </td>
              </tr>
            )}
            {cart.map((item) => (
              <tr className="bg-white border-b hover:bg-gray-5">
                <td className="p-4">
                  <img
                    src={item.image}
                    className="w-16  md:w-32 max-w-full max-h-full "
                    alt={item.title}
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  {item.title}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {item.price}
                </td>
                <td className="px-6 py-4 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => removeFromCart(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cart.length > 0 && (
        <div className="flex items-center justify-center mt-8">
          <button
            type="button"
            className="rounded-md bg-red-900 hover:bg-red-500 text-white text-center p-2 w-28"
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, clear it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  clearCart();
                  Swal.fire(
                    "Cleared!",
                    "Your cart has been cleared.",
                    "success"
                  );
                }
              });
            }}
          >
            CLEAR
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
