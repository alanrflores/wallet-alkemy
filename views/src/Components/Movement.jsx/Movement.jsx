import Loader from "../Loader/Loader";
import { RiArrowUpDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Movement = ({ movement }) => {
  return movement === undefined ? (
    <div className="flex justify-center">
      <Loader />
    </div>
  ) : (
    <div
      className={`flex flex-col justify-center m-auto px-6 lg:px-24 gap-10 py-24 border rounded-lg ${
        movement.category === "Income"
          ? "bg-gradient-to-b from-teal-50 to-white"
          : "bg-gradient-to-b from-red-50 to-white"
      }`}
    >
      <h2 className="text-5xl font-bold text-center">$ {movement.amount}</h2>
      <div className="flex flex-col gap-6">
        <p className="flex justify-between text-lg border-b py-1">
          Transaction Id: {movement.id}
        </p>
        <p className="flex justify-between text-lg border-b py-1">
          Concept: {movement.concept}
        </p>
        <p className="flex justify-between text-lg border-b py-1">
          Category: {movement.category}
        </p>
        <p className="flex justify-between text-lg border-b py-1">
          Date: {movement.createdAt}
        </p>
        <div className="flex gap-10 mt-6">
          <Link
            to="/movements"
            className="flex items-center m-auto gap-1 justify-center bg-white border w-fit px-4 py-2 rounded-lg hover:border-black duration-200"
          >
            <i className="text-lg">
              <RiArrowUpDownLine />
            </i>
            <p>View all movements</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movement;
