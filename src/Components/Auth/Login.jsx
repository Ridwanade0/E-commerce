const Login = () => {
  return (
    <div>
      <form>
        <div className="my-3">
          <label htmlFor="email" className="">
            Enter email address
          </label>
          <input
            className="p-3 w-full mt-3"
            type="email"
            id="email"
            placeholder="youremail@email.com"
          />
        </div>
        <div className="my-3">
          <label htmlFor="password">Enter password</label>
          <input
            className="p-3 w-full"
            type="email"
            id="password"
            placeholder="********"
          />
        </div>
      </form>
    </div>
  );
};
export default Login;
