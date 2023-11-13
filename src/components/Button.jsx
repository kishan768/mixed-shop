/* eslint-disable react/prop-types */

export default function Button({
  children,
  onClick,
  size,
  disable,
  width,
  type,
}) {
  if (type === "gray") {
    return (
      <button
        onClick={onClick}
        disabled={disable}
        className={` bg-gray-900 mt-3  text-white text-${size} hover:bg-gray-700 rounded-md w-40 p-3  capitalize hover:duration-700 disabled:bg-orange-100`}
      >
        {children}
      </button>
    );
  }
  if (type === "large") {
    return (
      <button
        onClick={onClick}
        disabled={disable}
        type="submit"
        className={` bg-orange-300 w-${width} mt-3 text-${size} hover:bg-orange-400 rounded-md w-40 p-3  capitalize hover:duration-700 disabled:bg-orange-100`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={` bg-orange-300 mt-3 text-${size} hover:bg-orange-400 rounded-md w-40 p-3  capitalize hover:duration-700 disabled:bg-orange-100`}
    >
      {children}
    </button>
  );
}
