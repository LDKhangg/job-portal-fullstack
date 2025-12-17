import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      {/* --- HEADER: TAB CHUYỂN ĐỔI --- */}
      <header className="flex w-full justify-between items-center mb-8">
        {/* Nút Back (giữ nguyên SVG) */}
        <Link to="/" className="text-gray-400 hover:text-gray-300">
          <svg
            className="h-7 w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
          >
            <path
              strokeWidth="1"
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>

        {/* Buttons Switch */}
        <div className="flex gap-2">
          {/* Nút Login đang Active */}
          <button
            type="button"
            className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-3 font-bold text-blue-500 ring-2 ring-gray-300 active:translate-y-[0.125rem] active:border-b-gray-200"
          >
            LOGIN
          </button>

          {/* Nút Sign Up chuyển sang trang Register */}
          <Link to="/register">
            <button
              type="button"
              className="rounded-2xl border-b-2 border-transparent bg-transparent px-4 py-3 font-bold text-gray-400 hover:bg-gray-100"
            >
              SIGN UP
            </button>
          </Link>
        </div>
      </header>

      {/* --- CONTENT LOGIN --- */}
      <div className="space-y-4 text-center">
        <header className="mb-3 text-2xl font-bold">Log in</header>

        {/* Input Email/Username */}
        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400 transition-all">
          <input
            type="text"
            placeholder="Email or username"
            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none focus:ring-0"
          />
        </div>

        {/* Input Password */}
        <div className="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400 transition-all">
          <input
            type="password"
            placeholder="Password"
            className="my-3 w-full border-none bg-transparent outline-none focus:outline-none focus:ring-0"
          />
          <a href="#" className="font-medium text-gray-400 hover:text-gray-500 whitespace-nowrap">
            FORGOT?
          </a>
        </div>

        {/* Submit Button */}
        <button className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400 transition-all">
          LOG IN
        </button>
      </div>

      {/* --- DIVIDER --- */}
      <div className="flex items-center space-x-4">
        <hr className="w-full border border-gray-300" />
        <div className="font-semibold text-gray-400">OR</div>
        <hr className="w-full border border-gray-300" />
      </div>

      {/* --- FOOTER SOCIALS --- */}
      <footer className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <button className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">
            FACEBOOK
          </button>
          <button className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">
            GOOGLE
          </button>
        </div>

        <div className="text-center text-sm text-gray-400">
          By signing in, you agree to our{" "}
          <a href="#" className="font-medium text-gray-500">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-gray-500">
            Privacy Policy
          </a>
          .
        </div>
      </footer>
    </div>
  );
};

export default Login;
