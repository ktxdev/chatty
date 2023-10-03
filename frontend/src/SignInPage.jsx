import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <div className="w-full h-full absolute top-[50%] transform -translate-y-[50%] flex items-center justify-center">
      <div className="bg-stone-50 w-[80%] max-w-md px-6 py-8 flex flex-col items-center text-gray-600">
        <h3 className="mb-8">
          <img width="60" height="60" src="/chatty.svg" alt="Chatty" />
        </h3>
        <form className="space-y-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              className="border rounded-md px-2 py-2.5"
              placeholder="Enter email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="border rounded-md px-2 py-2.5"
              placeholder="Enter password"
            />
          </div>
          <button className="w-full rounded-md bg-slate-700 hover:bg-slate-600 text-stone-100 py-2 transition-colors duration-300">
            Sign In
          </button>
        </form>
        <p className="mt-5">
          Do not have an account? &nbsp;
          <Link
            to="/sign-up"
            className="text-blue-500 hover:text-blue-600 hover:cursor-pointer hover:underline transition-colors duration-300 "
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
