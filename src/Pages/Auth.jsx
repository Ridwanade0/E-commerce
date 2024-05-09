// import Login from "../Components/Auth/Login";
// import image from "../assets/Images/ecommerce_cart.jpeg";

const Auth = () => {
  return (
    <div className="h-screen p-4 flex flex-row justify-center items-center">
      <div className="h-full p-2 bg-orange-500 text-white w-3/6 rounded-3xl md:hidden lg:block xl:block sm:hidden">
        <div className="text-white text-5xl w-1/2 mx-auto">
          <p>Simplify management with our dashboard.</p>
        </div>
      </div>
      <div className="h-full p-2 w-3/6 mt-4">
        <h1 className="border border-black p-2 bg-white text-black font-semibold text-lg text-center w-32 mx-auto mb-3">
          E-Commerce
        </h1>
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
            className="p-4 bg-gray-200 border-0 w-full my-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 bg-gray-200 border-0 w-full my-3 rounded-lg"
          />
          <span className="hover:underline text-gray-300 float-end">
            Forgot password?
          </span>
          <button className="w-full p-3 text-white text-2xl rounded-lg bg-orange-500 my-2">
            Login
          </button>
        </form>
        <div className="mt-6 flex justify-center items-center space-x-2">
          <hr className="w-1/4 border-t border-gray-300" />
          <span className="text-gray-300">or continue with</span>
          <hr className="w-1/4 border-t border-gray-300" />
        </div>
        <div className="border border-gray-300 w-3/5 p-3 bg-white text-black text-xl font-medium my-3 text-center rounded-lg mx-auto">
          Google
        </div>
        <p className="text-gray-400 text-center mt-3">
          {"Don't have an account?"}{" "}
          <span className="text-orange-400 hover:underline">Signup</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
