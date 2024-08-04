const Category = ({ image, title }) => {
  return (
    <div className="mx-auto w-[500px]">
      <div className="bg-white border border-gray-200">
        <img
          src={image}
          alt={title}
          className="object-contain bg-red-100 w-full h-full"
        />
      </div>
      <div className="container mx-auto py-4">
        <h1 className="text-xl text-center tracking-tighter">{title}</h1>
      </div>
    </div>
  );
};

export default Category;
