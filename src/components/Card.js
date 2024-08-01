function Card() {
  return (
    <div className="w-[300px] h-[420px] bg-white  rounded-lg shadow mt-12 ml-7 border-2 border-black group perspective">
      <div className="relative w-full h-full duration-1000 preserve-3d group-hover:my-rotate-y-180 ">
        <div className="absolute w-full h-full text-center backface-hidden">
          <img className="rounded-lg" src="/cake.png" alt="cake-img" />
          <span className="text-2xl font-semibold text-gray-90">CAKES</span>
        </div>
        <div className="absolute my-rotate-y-180 w-full h-full bg-gray-100 rounded-lg backface-hidden">
          <div className="grid grid-cols-3 gap-0 custom-rows">
            <div className="bg-red-300 rounded-tl-lg">
              <a href="#">
                <img
                  className="w-full object-center"
                  src="/cake-2.png"
                  alt="cake-img"
                />
              </a>
            </div>
            <div className="bg-red-100">
              <a href="#">
                <img
                  className="w-full object-center"
                  src="/cake-3.png"
                  alt="cake-img"
                />
              </a>
            </div>
            <div className="bg-orange-200 rounded-tr-lg">
              <a href="#">
                <img
                  className="w-full object-center "
                  src="/cake-4.png"
                  alt="cake-img"
                />
              </a>
            </div>
            <div className="bg-orange-300">
              <a href="#">
                <img
                  className="w-full object-center"
                  src="/cake-5.png"
                  alt="cake-img"
                />
              </a>
            </div>
            <div className="bg-amber-100">
              <a href="#">
                <img
                  className="w-full object-center"
                  src="/cake-6.png"
                  alt="cake-img"
                />
              </a>
            </div>
            <div className="bg-lime-200">
              <a href="#">
                <img
                  className="w-full object-center"
                  src="/cake-7.png"
                  alt="cake-img"
                />
              </a>
            </div>
            <div className="bg-rose-400 rounded-bl-lg">
              <a href="#">
                <img
                  className="w-full object-center "
                  src="/cake-8.png"
                  alt="cake-img"
                />
              </a>
            </div>
            <div className="bg-emerald-200">
              <a href="#">
                <img
                  className="w-full object-center"
                  src="/cake-9.png"
                  alt="cake-img"
                />
              </a>
            </div>
            <div className="bg-rose-300 rounded-br-lg">
              <a href="#">
                <img
                  className="w-full object-center"
                  src="/cake-1.png"
                  alt="cake-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
