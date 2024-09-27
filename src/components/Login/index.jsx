export default function LogIn(props) {
  const { loginData, handleLoginPage } = props;
  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/80">
      <div className="relative w-full max-w-xs border rounded-lg backdrop-blur-md p-7">
        <form action="">
          <h2 className="mb-2 text-3xl font-bold text-orange-400">Login</h2>
          <p className="mb-8 text-slate-400">
            Welcome, please enter your detail
          </p>
          {loginData.map((item) => (
            <div key={item.label} className="text-white">
              <label htmlFor="" className="block mb-1 font-semibold">
                {item.label}
              </label>

              <input
                type={item.tipe}
                placeholder={item.placeholder}
                className="w-full px-3 py-2 mb-2 text-sm rounded-md text-slate-600 bg-slate-100 active:border-indigo-300 placeholder:opacity-50"
              />
            </div>
          ))}
          <div>
            <button className="w-full p-2 mt-5 text-white transition duration-100 ease-linear bg-orange-500 rounded-md hover:bg-orange-600">
              Login
            </button>
            <button
              onClick={handleLoginPage}
              className="absolute w-8 h-8 p-1 font-bold transition duration-100 ease-linear bg-white rounded-full hover:bg-slate-400 -top-3 -right-3 "
            >
              X
            </button>
            <p className="mt-2 text-sm text-center text-slate-400">
              Don't have an account?{" "}
              <a
                className="text-blue-600 underline hover:text-blue-500"
                href="#"
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
