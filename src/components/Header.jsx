import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import hero from "../assets/hero.webp";
import rectangle from "../assets/Rectangle 23.png";
import Dots from "./Dots";

const Header = () => {
  const heading = "A Digital Product Agency";
  const paragraph = `Leading digital agency with solid design and development expertise. We
  build readymade websites mobile applications and elaborate online
  business services.`;
  return (
    <>
      <header className="flex flex-shrink-0 relative w-[100%] h-[38rem] ">
        <div className="w-[60%] self-center">
          <Heading heading={heading} />
          <Paragraph paragraph={paragraph} />
          <Button />
          <div className="absolute -bottom-[4.5rem]">
            <Dots />
          </div>
        </div>
        <div className="relative">
          <svg
            className="absolute left-[-4rem] top-[0] -z-[10] "
            xmlns="http://www.w3.org/2000/svg"
            width="129"
            height="129"
            viewBox="0 0 129 129"
            fill="none"
          >
            <circle cx="64.5" cy="64.5" r="64.5" fill="#DAE9FF" />
          </svg>

          <img
            src={hero}
            className="w-[67.125rem] h-[32rem] flex-shrink-0 object-fill"
            alt="hero-image"
          />
          <img
            src={rectangle}
            className="absolute right-2 bottom-[-1rem] -z-[10]"
            alt=""
          />
        </div>
      </header>
    </>
  );
};

export default Header;
