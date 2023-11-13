export default function Footer() {
  return (
    <div className="bg-gray-900  h-20 text-sm text-stone-50 flex justify-center items-center">
      <h1>
        &copy; {new Date().getFullYear()}
        <span className="text-orange-300 text-lg"> mixed-shop </span>
        <div className="md:hidden"> All rights reserved</div>
        <span className="hidden md:inline-block"> All rights reserved</span>
      </h1>
    </div>
  );
}
