import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const SuccessModal = ({ message }) => {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
      <div className="w-64 h-48 rounded-lg bg-white drop-shadow-xl border flex flex-col justify-center items-center">
        <div className="text-green-600 text-6xl">
          <IoMdCheckmarkCircleOutline />
        </div>
        <h1 className="text-green-600 text-3xl">{message}</h1>
        <Link to={"/login"} className="text-orange-400 hover:underline">
          Continue to login
        </Link>
      </div>
    </div>
  );
};
export default SuccessModal;
