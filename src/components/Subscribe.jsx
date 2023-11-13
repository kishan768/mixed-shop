export default function Subscribe() {
  return (
    <div className="mb-52 mt-20 lg:flex lg:justify-between lg:items-center">
      <div>
        <h1 className="text-3xl font-bold tracking-wide opacity-80">
          Join our newsletter and get 20% off
        </h1>
        <p className="text-sm  font-thin p-1 md:w-80">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
          consectetur voluptatum fuga error ipsa. Quo aliquid nesciunt nulla
          odit dolore alias iste, dicta quos nisi minus velit !
        </p>
      </div>
      <div className="mt-5  border-gray-70">
        <input
          className="border-gray-700 px-3  border-2 h-12 rounded-l-md"
          type="text"
          placeholder="Enter Email"
        />
        <button
          type="button"
          className=" bg-orange-300 mt-3 hover:bg-orange-400 border-gray-700 border-y-2 border-r-2 rounded-r-md w-40 p-2.5 "
        >
          subscribe
        </button>
      </div>
    </div>
  );
}
