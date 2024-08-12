export default function ProductDisplay({ image, title, description }) {
  return (
    <article className="shadow-md rounded-lg overflow-hidden">
      <div className="bg-white">
        <img
          className="bg-slate-200 w-full h-full object-contain"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4">
        <h5 class="mb-2 text-2xl text-gray-900 tracking-wide">{title}</h5>
        <p className="text-black text-base tracking-wide">{description}</p>
      </div>
    </article>
  );
}
