import { PiLessThan } from "react-icons/pi";
import { TbStarFilled } from "react-icons/tb";
import { PiGreaterThan } from "react-icons/pi";

function Navigation({ onRotate }) {
  return (
    <div className="flex flex-row">
      <button onClick={() => onRotate("right")}>
        <PiLessThan className="text-3xl" />
      </button>
      <a>
        <TbStarFilled className="text-3xl" />
      </a>
      <button onClick={() => onRotate("left")}>
        <PiGreaterThan className="text-3xl" />
      </button>
    </div>
  );
}

export default Navigation;
