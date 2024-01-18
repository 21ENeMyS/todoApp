import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form
      action="#"
      method="POST"
      className="mx-auto mt-16 max-w-xl sm:mt-20 w-full"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2.5">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <input
              type="checkbox"
              className="bg-gray-200 flex flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              role="switch"
              aria-checked="false"
              aria-labelledby="switch-1-label"
            />
            <span className="sr-only">Agree to policies</span>
            {/* <span
                  aria-hidden="true"
                  className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                /> */}
          </div>
          <div className="flex justify-between w-full">
            <label
              className="text-sm leading-6 text-gray-600"
              id="switch-1-label"
            >
              Remember me
            </label>
            <Link>
              <a href="" className="text-primary">
                Forgot password?
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
