function ButtonRectangular({ title, icon }) {
  function renderIcon() {
    return icon ? (
      <img src={icon} alt="shop" className="size-6 lg:size-12" />
    ) : "";
  }

  return (
    <button className="flex items-center justify-center gap-3 text-xl text-white lg:text-3xl transition duration-300 ease-in-out bg-primary border-3 border-white rounded-xl w-30 h-15 p-5 z-3 hover:cursor-pointer hover:bg-white hover:text-primary hover:border-primary lg:w-60 lg:h-20 lg:gap-5">
      {renderIcon()}
      <h1 className="font-bold text-center">
        {title}
      </h1>
    </button>
  );
}

export default ButtonRectangular;
