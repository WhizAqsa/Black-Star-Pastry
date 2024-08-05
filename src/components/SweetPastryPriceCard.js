const PastryPriceCard = ({ image, title, price, description }) => {
  return (
    <div className="mx-auto w-[350px] h-[600px]">
      <div className=" bg-white border shadow-md">
        <img
          className=" bg-slate-200 w-full h-full object-contain"
          src={image}
          alt={title}
        />
        <div className=" py-4">
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
    </div>
  );
};

export default PastryPriceCard;
