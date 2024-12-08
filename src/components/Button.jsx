import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, herf, onClick, children, px, white }) => {
  const clases = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "";
  const renderButton = () => (
    <button className={clases} onClick={onClick}>
      <span className={"relative z-[199999999]"}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={herf} className={clases}>
      {" "}
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return herf ? renderLink() : renderButton;
};

export default Button;
