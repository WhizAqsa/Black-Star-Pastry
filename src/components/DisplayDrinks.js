function DisplayDrinks({ image, title, description }) {
  return (
    <div className="mx-auto w-[400px]">
      <div className="rounded-lg bg-white border border-gray-200">
        <img
          className="rounded-lg bg-slate-200 w-full h-full object-contain"
          src={image}
          alt={title}
        />
      </div>
      <div className=" py-4">
        <h5 class="mb-2 text-2xl text-gray-900 tracking-wide">{title}</h5>
        <p className="text-black text-lg tracking-wide">{description}</p>
      </div>
    </div>
  );
}
export default DisplayDrinks;
