const CakePriceCard = ({ image, title, price, description, onClick }) => {
  return (
    <div className="bg-white border rounded-md shadow-md shadow-slate-100">
      <img
        className="bg-slate-200 w-full object-contain"
        src={image}
        alt={title}
      />
      <div className="py-4 cursor-pointer" onClick={onClick}>
        <h5 class="mb-2 text-2xl text-gray-900 tracking-tighter px-4">
          {title}
        </h5>
        <p className="text-black text-lg tracking-tighter px-4">
          {description}
        </p>
        <h1 className="text-xl py-2 font-bold tracking-tighter px-4">
          {price}
        </h1>
      </div>
    </div>
  );
};

export default CakePriceCard;
