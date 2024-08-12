export default function DisplaySelectionList({ selected }) {
  return (
    <ul className="flex flex-row flex-wrap gap-2 items-center justify-center sm:gap-10 md:gap-12 text-gray-900">
      <li>
        <a
          href="/displaycakes"
          className={`me-4 md:me-6 ${
            selected.toLowerCase() !== "cakes" && "underline"
          }`}
        >
          CAKES
        </a>
      </li>
      <li>
        <a
          href="/pastry"
          className={`me-4 md:me-6 ${
            selected.toLowerCase() !== "pastry" && "underline"
          }`}
        >
          PASTRY
        </a>
      </li>
      <li>
        <a
          href="/tieredcakes"
          className={`me-4 md:me-6 ${
            selected.toLowerCase() !== "tiered cakes" && "underline"
          }`}
        >
          TIERED CAKES
        </a>
      </li>
      <li>
        <a
          href="/drinks"
          className={`me-4 md:me-6 ${
            selected.toLowerCase() !== "drinks" && "underline"
          }`}
        >
          DRINKS
        </a>
      </li>
    </ul>
  );
}
