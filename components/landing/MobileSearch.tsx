import { FaSearch } from "react-icons/fa";

export default function MobileSearch({
  openFunction,
}: {
  openFunction: () => void;
}) {
  return (
    <button
      onClick={openFunction}
      className="cursor-pointer outline-none hover:bg-[#1c1c1cc4] hover:text-[#12F7D6]  p-1.5 rounded-full"
      type="button"
    >
      <FaSearch strokeWidth={1.5} />
    </button>
  );
}
