// import Login from "../Components/Auth/Login";
import image from "../assets/Images/ecommerce-image.png";
import logo from "../assets/Images/online-shop-logo.png";
import googleicon from "../assets/Images/googleicon.png";

const Auth = () => {
  return (
    <div className="h-[95vh] p-4 flex flex-row justify-center items-center w-10/12 mx-auto mt-4 rounded-xl bg-white drop-shadow-2xl">
      <div className="h-full ms-2">
        <img
          src={image}
          alt="increase your sale with an ecommerce website"
          className="h-full w-full rounded-3xl"
        />
      </div>
      <div className="h-full p-2 w-3/6 mt-2 ms-8">
        <img src={logo} alt="online shop" className="w-32 h-32 mx-auto" />
        <h1 className="text-black font-bold text-4xl text-center">
          Welcome back
        </h1>
        <p className="text-gray-400 text-center">
          Please login to your account.
        </p>
        <form action="" className="w-4/5 mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="p-4 bg-gray-200 border-0 w-full my-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 bg-gray-200 border-0 w-full my-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <span className="hover:underline text-gray-300 float-end pb-3">
            Forgot password?
          </span>
          <button className="w-full p-3 text-white text-2xl rounded-xl bg-orange-500 my-2 hover:bg-orange-600 mt-3">
            Login
          </button>
        </form>
        <div className="mt-6 flex justify-center items-center space-x-2">
          <hr className="w-1/4 border-t border-gray-300" />
          <span className="text-gray-300">or continue with</span>
          <hr className="w-1/4 border-t border-gray-300" />
        </div>
        {/* <div className="border border-gray-300 w-3/5 p-3 h-20 bg-white text-black text-xl font-medium my-3 text-center rounded-lg mx-auto hover:bg-gray-100 active:border-orange-500">
          <img src={googleicon} alt="Google" className="" />
          Google
        </div> */}
        <button className="flex items-center justify-center w-3/5 h-16 p-3 bg-white text-black text-xl font-medium my-3 text-center rounded-xl mx-auto border border-gray-300 hover:bg-gray-100 active:border-orange-500">
          <img src={googleicon} alt="Google" className="w-6 h-6 mr-2" />
          Google
        </button>
        <p className="text-gray-400 text-center mt-3">
          {"Don't have an account?"}{" "}
          <span className="text-orange-400 hover:underline">Signup</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
